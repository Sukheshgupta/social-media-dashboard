"use client"

import type React from "react"

import { Heart, MessageSquare, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface TopPostsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TopPosts({ className, ...props }: TopPostsProps) {
  const posts = [
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        handle: "@alexj",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "Just launched our new product! Check it out and let me know what you think. #newlaunch #product",
      image: "/placeholder.svg?height=300&width=500",
      stats: {
        likes: 1245,
        comments: 43,
        shares: 28,
      },
      platform: "Twitter",
    },
    {
      id: 2,
      user: {
        name: "Sarah Williams",
        handle: "@sarahw",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Beautiful day at the beach! Nothing beats the sound of waves and the feel of sand between your toes. #beachday #summer",
      image: "/placeholder.svg?height=300&width=500",
      stats: {
        likes: 876,
        comments: 32,
        shares: 15,
      },
      platform: "Instagram",
    },
    {
      id: 3,
      user: {
        name: "Tech Insights",
        handle: "@techinsights",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Our latest review of the newest smartphones on the market is now live! See which one comes out on top. #tech #smartphones",
      image: "/placeholder.svg?height=300&width=500",
      stats: {
        likes: 532,
        comments: 21,
        shares: 45,
      },
      platform: "Facebook",
    },
  ]

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>Top Performing Posts</CardTitle>
        <CardDescription>Your most engaging content across platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{post.user.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.user.handle} • {post.platform}
                  </p>
                </div>
              </div>
              <p className="text-sm">{post.content}</p>
              <div className="rounded-md overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Post image"
                  className="aspect-video w-full object-cover"
                />
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span className="text-xs">{post.stats.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs">{post.stats.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  <span className="text-xs">{post.stats.shares}</span>
                </div>
              </div>
              {post.id !== posts.length && <div className="h-px bg-border mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

