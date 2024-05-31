import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPostPreview from './BlogPostPreview';
import './styles/BlogSection.css';

function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogposts')
      .then(response => setBlogPosts(response.data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div className="blog-posts-container">
      <h2 className="blog-posts-header">Our Blog</h2>
      <div className="blog-posts-preview-container">
        {blogPosts.map(post => (
          <BlogPostPreview
            key={post._id}
            title={post.title}
            imageURL={post.imageURL}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogPosts;
