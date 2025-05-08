// Import required dependencies
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Set SendGrid API key from environment variable
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a subscribers data directory and file if they don't exist
const dataDir = path.join(__dirname, 'data');
const subscribersFile = path.join(dataDir, 'subscribers.csv');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('Created data directory');
}

if (!fs.existsSync(subscribersFile)) {
  fs.writeFileSync(subscribersFile, 'email,name,subscriptionDate\n', 'utf8');
  console.log('Created subscribers.csv file');
}

// Test endpoint to verify server is running
app.get('/api/health', (req, res) => {
  console.log('Health check endpoint called');
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Test email endpoint
app.get('/api/test-email', async (req, res) => {
  console.log('Test email endpoint called');
  
  try {
    // Create email message
    const msg = {
      to: 'hermantech8@gmail.com',
      from: process.env.EMAIL_FROM,
      subject: 'SendGrid Test Email',
      text: 'This is a test email from the African Heritage & History newsletter system using SendGrid.',
      html: '<h2>Test Email</h2><p>This is a test email from the African Heritage & History newsletter system using SendGrid.</p>',
    };

    console.log('Attempting to send test email to:', msg.to);
    
    // Send email
    await sgMail.send(msg);
    console.log('Test email sent successfully');
    
    res.status(200).json({
      success: true,
      message: 'Test email sent successfully'
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    
    // Get more detailed error information
    let errorMessage = 'Unknown error';
    if (error.response) {
      console.error('SendGrid API error response:', error.response.body);
      errorMessage = error.response.body;
    }
    
    res.status(500).json({
      success: false,
      message: 'Error sending test email',
      error: errorMessage
    });
  }
});

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  const { email, name } = req.body;
  console.log('Received subscription request:', { email, name });

  // Basic validation
  if (!email || !name) {
    console.log('Validation failed: Email or name missing');
    return res.status(400).json({ 
      success: false, 
      message: 'Email and name are required' 
    });
  }

  try {
    // Check if email already exists in subscribers
    const subscribers = fs.readFileSync(subscribersFile, 'utf8').split('\n');
    const emailExists = subscribers.some(line => line.includes(email));

    if (emailExists) {
      console.log('Email already exists:', email);
      return res.status(400).json({ 
        success: false, 
        message: 'This email is already subscribed to our newsletter' 
      });
    }

    // Add subscriber to CSV
    const now = new Date().toISOString();
    const newSubscriber = `${email},${name.replace(/,/g, '')},${now}\n`;
    fs.appendFileSync(subscribersFile, newSubscriber, 'utf8');
    console.log('Subscriber added to CSV:', email);

    // Send admin notification email
    console.log('Sending admin notification email to:', process.env.ADMIN_EMAIL);
    try {
      const adminMsg = {
        to: process.env.ADMIN_EMAIL,
        from: process.env.EMAIL_FROM,
        subject: 'New Newsletter Subscription',
        text: `A new user has subscribed to the African Heritage and History newsletter.\n\nName: ${name}\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`,
        html: `
          <h2>New Newsletter Subscription</h2>
          <p>A new user has subscribed to the African Heritage and History newsletter.</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Date:</strong> ${new Date().toLocaleString()}</li>
          </ul>
        `
      };
      
      await sgMail.send(adminMsg);
      console.log('Admin notification email sent successfully');
    } catch (adminError) {
      console.error('Error sending admin notification email:', adminError);
      // Continue even if admin email fails
    }

    // Send welcome email to new subscriber
    console.log('Sending welcome email to:', email);
    try {
      const welcomeMsg = {
        to: email,
        from: process.env.EMAIL_FROM,
        subject: 'Welcome to the African Heritage and History Newsletter',
        text: `Hello ${name},\n\nThank you for subscribing to the African Heritage and History newsletter! We're excited to share updates, events, and information about our resources with you.\n\nIf you have any questions or suggestions, please feel free to reach out to us at info@afrheec.org.\n\nBest regards,\nThe African Heritage and History Team`,
        html: `
          <h2>Welcome to Our Newsletter!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for subscribing to the African Heritage and History newsletter! We're excited to share updates, events, and information about our resources with you.</p>
          <p>If you have any questions or suggestions, please feel free to reach out to us at <a href="mailto:info@afrheec.org">info@afrheec.org</a>.</p>
          <p>Best regards,<br>The African Heritage and History Team</p>
        `
      };
      
      await sgMail.send(welcomeMsg);
      console.log('Welcome email sent successfully');
    } catch (welcomeError) {
      console.error('Error sending welcome email:', welcomeError);
      // Continue even if welcome email fails
    }

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Successfully subscribed to the newsletter'
    });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your subscription',
      error: error.message
    });
  }
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test the API with: curl http://localhost:${PORT}/api/health`);
  console.log(`Test email sending with: curl http://localhost:${PORT}/api/test-email`);
});
