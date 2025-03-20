"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "Emily Chen",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "liked your post",
      time: "2 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "commented on your photo",
      time: "15 minutes ago",
    },
    {
      id: 3,
      user: {
        name: "Jessica Lee",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "shared your post",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "mentioned you in a comment",
      time: "2 hours ago",
    },
    {
      id: 5,
      user: {
        name: "Sophia Martinez",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "started following you",
      time: "3 hours ago",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest interactions with your content</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span> {activity.action}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

