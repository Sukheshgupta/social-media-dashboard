"use client"

import { ArrowDown, ArrowUp, Users, Heart, Eye, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AnalyticsOverview() {
  const stats = [
    {
      title: "Total Followers",
      value: "24,532",
      change: "+12.3%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Engagement Rate",
      value: "5.2%",
      change: "+0.8%",
      trend: "up",
      icon: Heart,
    },
    {
      title: "Total Impressions",
      value: "1.2M",
      change: "+24.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Comments",
      value: "8,642",
      change: "-3.2%",
      trend: "down",
      icon: MessageSquare,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="flex items-center text-xs text-muted-foreground">
              {stat.trend === "up" ? (
                <ArrowUp className="mr-1 h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
              )}
              <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
              <span className="ml-1">from last month</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

