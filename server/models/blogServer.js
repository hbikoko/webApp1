const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 5000;

const allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000']; // List your allowed origins here

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // Allow credentials (cookies, authorization headers, TLS client certificates, etc.)
}));
app.use(express.json());

const connectionString = 'mongodb+srv://hermanbikoko:<redGr@pes235!>@cluster0.ex8jgld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your actual connection string

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

const BlogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  datePublished: Date,
  tags: [String],
  imageURL: String,
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// Define the API route for fetching blog posts
app.get('/api/blogposts', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Serve static files (e.g., your React app)
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
