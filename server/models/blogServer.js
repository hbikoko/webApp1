const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 9000;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB connection
const uri = "mongodb+srv://hermanbikoko:aXW5SF4Qg8jpwlxM@cluster0.ex8jgld.mongodb.net/BlogPlatformDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Define a schema and model for BlogPost
const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema, 'Posts');

// Routes
app.get('/api/blogposts', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.json(blogPosts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
