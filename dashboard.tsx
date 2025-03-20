"use client"

import { useState, useEffect } from "react"
import { Bell, Menu, Search, User, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsOverview } from "./components/analytics-overview"
import { EngagementChart } from "./components/engagement-chart"
import { AudienceGrowth } from "./components/audience-growth"
import { TopPosts } from "./components/top-posts"
import { RecentActivity } from "./components/recent-activity"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 flex w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 transition-transform duration-300 md:relative md:translate-x-0`}
      >
        <div className="flex h-14 items-center border-b border-gray-200 px-4 dark:border-gray-800">
          <h1 className="text-lg font-semibold">Social Analytics</h1>
          <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 mb-4">
            <div className="flex items-center gap-2 mb-8">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Jane Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Social Media Manager</p>
              </div>
            </div>
            <div className="space-y-1">
              <Button variant="default" className="w-full justify-start">
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Content
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Audience
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Campaigns
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Settings
              </Button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-14 items-center gap-4 border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-950">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-gray-100 pl-8 dark:bg-gray-800 md:w-[240px]"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4">
          <div className="mx-auto max-w-7xl space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Dashboard Overview</h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button size="sm">Refresh Data</Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
                <TabsTrigger value="audience">Audience</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <AnalyticsOverview />

                <div className="grid gap-4 md:grid-cols-2">
                  <EngagementChart />
                  <AudienceGrowth />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <TopPosts className="md:col-span-2" />
                  <RecentActivity />
                </div>
              </TabsContent>

              <TabsContent value="engagement">
                <Card>
                  <CardHeader>
                    <CardTitle>Engagement Analytics</CardTitle>
                    <CardDescription>Detailed metrics about user engagement with your content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Engagement analytics content would go here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="audience">
                <Card>
                  <CardHeader>
                    <CardTitle>Audience Analytics</CardTitle>
                    <CardDescription>
                      Detailed information about your audience demographics and behavior
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Audience analytics content would go here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Analytics</CardTitle>
                    <CardDescription>Performance metrics for your content across platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center border rounded">
                      <p className="text-muted-foreground">Content analytics would go here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

