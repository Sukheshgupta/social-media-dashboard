import React, { useState } from "react";

const UploadForm = () => {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]); // Save the selected image file
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("user", user);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5001/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Uploaded:", data);
      alert("Post uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <button type="submit">Upload Post</button>
    </form>
  );
};

export default UploadForm;