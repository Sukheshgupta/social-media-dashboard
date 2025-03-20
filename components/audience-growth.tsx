"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", followers: 1200, newFollowers: 200 },
  { month: "Feb", followers: 1400, newFollowers: 220 },
  { month: "Mar", followers: 1600, newFollowers: 240 },
  { month: "Apr", followers: 1900, newFollowers: 280 },
  { month: "May", followers: 2200, newFollowers: 300 },
  { month: "Jun", followers: 2500, newFollowers: 320 },
  { month: "Jul", followers: 2800, newFollowers: 350 },
]

export function AudienceGrowth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audience Growth</CardTitle>
        <CardDescription>Monthly follower growth across platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            followers: {
              label: "Total Followers",
              color: "hsl(var(--chart-1))",
            },
            newFollowers: {
              label: "New Followers",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="followers" radius={[4, 4, 0, 0]} fill="var(--color-followers)" />
              <Bar dataKey="newFollowers" radius={[4, 4, 0, 0]} fill="var(--color-newFollowers)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

