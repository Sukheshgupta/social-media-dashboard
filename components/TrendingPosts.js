import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TrendingPosts = () => {
  // Dummy trending posts data (Replace with API data later)
  const trendingPosts = [
    { id: 1, user: "Alice", content: "AI is the future!", comments: 12 },
    { id: 2, user: "Bob", content: "React is amazing!", comments: 20 },
    { id: 3, user: "Charlie", content: "Node.js is powerful!", comments: 15 },
  ];

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>🔥 Trending Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {trendingPosts.map((post) => (
            <li key={post.id} className="border-b pb-2">
              <p className="font-semibold">{post.user}</p>
              <p className="text-gray-600">{post.content}</p>
              <p className="text-sm text-gray-400">{post.comments} comments</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TrendingPosts;
