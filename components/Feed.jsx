import React, { useEffect, useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ user: "", content: "", image: null });

  useEffect(() => {
    fetch("http://localhost:5001/api/posts") // Fetch posts from backend
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewPost({ ...newPost, image: file });
  };

  const handlePostSubmit = async () => {
    const formData = new FormData();
    formData.append("user", newPost.user);
    formData.append("content", newPost.content);
    formData.append("image", newPost.image);

    try {
      const response = await fetch("http://localhost:5001/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPosts([...posts, data]); // Add new post to feed
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  return (
    <div className="feed-container" style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>📢 Latest Posts</h2>

      {/* Image Upload Form */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setNewPost({ ...newPost, user: e.target.value })}
        />
        <textarea
          placeholder="Write a post..."
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input type="file" onChange={handleFileChange} />
        <button onClick={handlePostSubmit}>Post</button>
      </div>

      {posts.map((post) => (
        <div
          key={post.id}
          className="post-card"
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* User Profile */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img
              src={post.profilePic}
              alt={post.user}
              style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
            />
            <h4 style={{ margin: 0 }}>{post.user}</h4>
          </div>

          {/* Post Content */}
          <p>{post.content}</p>

          {/* Post Image */}
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
            />
          )}

          {/* Comments Count */}
          <p style={{ color: "#555", fontSize: "14px" }}>💬 {post.comments} comments</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;