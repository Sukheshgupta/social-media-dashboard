"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "Jan", likes: 2500, comments: 1200, shares: 800 },
  { date: "Feb", likes: 3000, comments: 1400, shares: 900 },
  { date: "Mar", likes: 2800, comments: 1300, shares: 850 },
  { date: "Apr", likes: 3200, comments: 1500, shares: 950 },
  { date: "May", likes: 3500, comments: 1700, shares: 1000 },
  { date: "Jun", likes: 3700, comments: 1800, shares: 1050 },
  { date: "Jul", likes: 4000, comments: 2000, shares: 1200 },
]

export function EngagementChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Engagement Trends</CardTitle>
        <CardDescription>Monthly engagement metrics across platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            likes: {
              label: "Likes",
              color: "hsl(var(--chart-1))",
            },
            comments: {
              label: "Comments",
              color: "hsl(var(--chart-2))",
            },
            shares: {
              label: "Shares",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="likes" strokeWidth={2} activeDot={{ r: 6 }} stroke="var(--color-likes)" />
              <Line
                type="monotone"
                dataKey="comments"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                stroke="var(--color-comments)"
              />
              <Line
                type="monotone"
                dataKey="shares"
                strokeWidth={2}
                activeDot={{ r: 6 }}
                stroke="var(--color-shares)"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

