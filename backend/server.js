const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Function to get a random image URL for posts
const getRandomImage = (id) => `https://picsum.photos/seed/${id}/500/300`;

// Predefined profile pictures for each user (consistent across restarts)
const userProfilePics = {
  Alice: "https://randomuser.me/api/portraits/women/12.jpg",
  Bob: "https://randomuser.me/api/portraits/men/36.jpg",
  Charlie: "https://randomuser.me/api/portraits/men/60.jpg",
};

// Sample Data (Replace with database queries)
const posts = [
  { id: 1, user: "Alice", content: "Hello world!", comments: 5, timestamp: 1710932400000 },
  { id: 2, user: "Bob", content: "React is awesome!", comments: 10, timestamp: 1710932500000 },
  { id: 3, user: "Charlie", content: "Node.js is powerful.", comments: 7, timestamp: 1710932600000 },
  { id: 4, user: "Alice", content: "I love programming.", comments: 2, timestamp: 1710932700000 },
  { id: 5, user: "Bob", content: "Let's build something cool!", comments: 8, timestamp: 1710932800000 }
];

// Attach images dynamically
const enrichedPosts = posts.map(post => ({
  ...post,
  image: getRandomImage(post.id), // Assign random image for post
  profilePic: userProfilePics[post.user] || "https://randomuser.me/api/portraits/men/1.jpg" // Default if user not found
}));

// 🟢 Get all posts (with images)
app.get("/api/posts", (req, res) => {
  res.json(enrichedPosts);
});

// 🟢 Get top 5 users with most posts
app.get("/api/users", (req, res) => {
  const userPostCounts = posts.reduce((acc, post) => {
    acc[post.user] = (acc[post.user] || 0) + 1;
    return acc;
  }, {});

  const sortedUsers = Object.entries(userPostCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([user, count]) => ({
      user,
      count,
      profilePic: userProfilePics[user] || "https://randomuser.me/api/portraits/men/1.jpg"
    }));

  res.json(sortedUsers);
});

// 🟢 Get trending posts (most commented)
app.get("/api/trending-posts", (req, res) => {
  const trending = [...enrichedPosts].sort((a, b) => b.comments - a.comments);
  res.json(trending);
});

// 🟢 Get real-time feed (latest posts first)
app.get("/api/feed", (req, res) => {
  const latestPosts = [...enrichedPosts].sort((a, b) => b.timestamp - a.timestamp);
  res.json(latestPosts);
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});n