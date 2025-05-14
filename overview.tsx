"use client"

import { useState } from "react"
import { ArrowUp, DollarSign, Globe, HardDrive, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function DashboardOverview() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data for charts
  const revenueData = [
    { name: "Jan", revenue: 12000 },
    { name: "Feb", revenue: 15000 },
    { name: "Mar", revenue: 18000 },
    { name: "Apr", revenue: 16000 },
    { name: "May", revenue: 21000 },
    { name: "Jun", revenue: 19000 },
    { name: "Jul", revenue: 22000 },
  ]

  const signupData = [
    { name: "Mon", signups: 12 },
    { name: "Tue", signups: 18 },
    { name: "Wed", signups: 15 },
    { name: "Thu", signups: 25 },
    { name: "Fri", signups: 20 },
    { name: "Sat", signups: 10 },
    { name: "Sun", signups: 8 },
  ]

  const planData = [
    { name: "Shared", value: 45 },
    { name: "VPS", value: 30 },
    { name: "Cloud", value: 25 },
  ]

  const serverStatusData = [
    { name: "Server 1", status: "Operational", load: 65 },
    { name: "Server 2", status: "Operational", load: 42 },
    { name: "Server 3", status: "Operational", load: 78 },
    { name: "Server 4", status: "Warning", load: 89 },
    { name: "Server 5", status: "Operational", load: 55 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome to your Hostershub admin dashboard overview.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="servers">Servers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,853</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    12% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Plans</CardTitle>
                <HardDrive className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,429</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    8% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Domains Registered</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3,672</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    5% from last month
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$48,294</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUp className="mr-1 h-4 w-4" />
                    18% from last month
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>Revenue trend for the past 7 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#0ea5e9"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Daily Signups</CardTitle>
                <CardDescription>New user registrations this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={signupData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="signups" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Plan Distribution</CardTitle>
                <CardDescription>Active subscriptions by plan type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={planData} layout="vertical">
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#0ea5e9" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Active Support Tickets</CardTitle>
                <CardDescription>Current open support tickets by priority</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Badge variant="destructive" className="mr-2">
                        High
                      </Badge>
                      <span>Critical Issues</span>
                    </div>
                    <span className="font-bold">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Badge variant="default" className="mr-2 bg-orange-500">
                        Medium
                      </Badge>
                      <span>Important Issues</span>
                    </div>
                    <span className="font-bold">15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2">
                        Low
                      </Badge>
                      <span>General Inquiries</span>
                    </div>
                    <span className="font-bold">24</span>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-medium mb-2">Ticket Categories</h4>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Technical Support</span>
                          <span>42%</span>
                        </div>
                        <Progress value={42} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Billing Issues</span>
                          <span>28%</span>
                        </div>
                        <Progress value={28} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Account Management</span>
                          <span>18%</span>
                        </div>
                        <Progress value={18} className="h-2" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Other</span>
                          <span>12%</span>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue by product category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChartPlaceholder />
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>New users over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>Visitor to customer conversion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">4.8%</div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      <span className="text-emerald-500 flex items-center justify-center">
                        <ArrowUp className="mr-1 h-4 w-4" />
                        0.5% from last month
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="servers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Server Status</CardTitle>
              <CardDescription>Current status of all hosting servers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {serverStatusData.map((server) => (
                  <div key={server.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{server.name}</div>
                      <Badge
                        variant={server.status === "Operational" ? "outline" : "destructive"}
                        className={
                          server.status === "Operational"
                            ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                            : ""
                        }
                      >
                        {server.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>CPU Load</span>
                        <span>{server.load}%</span>
                      </div>
                      <Progress
                        value={server.load}
                        className="h-2"
                        indicatorClassName={
                          server.load > 80 ? "bg-red-500" : server.load > 60 ? "bg-orange-500" : "bg-green-500"
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Placeholder component for PieChart
function PieChartPlaceholder() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <div className="text-sm text-muted-foreground">Analytics data visualization</div>
      </div>
    </div>
  )
}
