import { useEffect, useState } from "react";
import TrendingPosts from "@/components/TrendingPosts";


const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/posts/trending") // API endpoint
      .then((res) => res.json())
      .then((data) => setTrendingPosts(data))
      .catch((err) => console.error("Error fetching trending posts:", err));
  }, []);

  return (
    <div>
      <h2>🔥 Trending Posts</h2>
      <ul>
        {trendingPosts.map((post) => (
          <li key={post.id}>
            <strong>{post.user}</strong>: {post.content} ({post.comments} comments)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
