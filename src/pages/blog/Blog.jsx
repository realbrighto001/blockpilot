import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "./BlogData";
import "./Blog.css";

const Blog = () => {
  // First 5 posts for the main section
  const mainPosts = blogPosts.slice(0, 5);

  // For sidebar recent posts (latest 3)
  const recentPosts = blogPosts.slice(0, 3);

  const categories = ["Crypto", "Guides", "News", "Analysis"];

  return (
    <div className="blog-container">
      <div className="blog-main">
        {mainPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className="meta">{post.date} • {post.readTime} • By {post.author}</p>
            <p>{post.description}</p>
            <Link to={`/blog/${post.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>

      <aside className="blog-sidebar">
        <div className="sidebar-section">
          <h3>Categories</h3>
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx}>{cat}</li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h3>Recent Posts</h3>
          {recentPosts.map((post) => (
            <div className="recent-post" key={post.id}>
              <img src={post.image} alt={post.title} />
              <div>
                <p>{post.title}</p>
                <span className="meta">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Blog;
