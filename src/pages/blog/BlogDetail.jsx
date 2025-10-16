import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogPosts from "./BlogData";
import "./Blog.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="blog-detail">
      {/* Back button */}
      <button className="back-button" onClick={() => navigate("/blog")}>
        ← Back to Blog
      </button>

      <img src={post.image} alt={post.title} />
      <h1>{post.title}</h1>
      <p className="meta">{post.date} • {post.readTime} • By {post.author}</p>
      <div className="content">
        {post.content.split("\n\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
