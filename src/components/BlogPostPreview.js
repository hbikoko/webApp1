import React from 'react';

function BlogPostPreview({ title, imageURL }) {
  return (
    <div className="blog-post-preview">
      <img src={imageURL} alt={title} className="blog-post-image" />
      <h3 className="blog-post-title">{title}</h3>
    </div>
  );
}

export default BlogPostPreview;
