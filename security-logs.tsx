"use client"

import { useState } from "react"
import { AlertTriangle, Ban, Eye, Lock, LogIn, MoreHorizontal, Search, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample security log data
const securityLogs = [
  {
    id: "1",
    type: "login",
    user: "admin@hostershub.com",
    ip: "192.168.1.1",
    location: "New York, USA",
    status: "success",
    details: "Successful login",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    type: "login",
    user: "john.smith@example.com",
    ip: "203.0.113.1",
    location: "London, UK",
    status: "failed",
    details: "Invalid password (3rd attempt)",
    timestamp: "15 minutes ago",
  },
  {
    id: "3",
    type: "admin",
    user: "admin@hostershub.com",
    ip: "192.168.1.1",
    location: "New York, USA",
    status: "success",
    details: "User account suspended: michael.b@example.com",
    timestamp: "1 hour ago",
  },
  {
    id: "4",
    type: "login",
    user: "sarah.j@example.com",
    ip: "198.51.100.1",
    location: "Toronto, Canada",
    status: "success",
    details: "Successful login",
    timestamp: "2 hours ago",
  },
  {
    id: "5",
    type: "security",
    user: "system",
    ip: "internal",
    location: "Server",
    status: "warning",
    details: "Multiple failed login attempts detected from IP: 45.33.100.2",
    timestamp: "3 hours ago",
  },
  {
    id: "6",
    type: "admin",
    user: "admin@hostershub.com",
    ip: "192.168.1.1",
    location: "New York, USA",
    status: "success",
    details: "Plan modified: Cloud Enterprise",
    timestamp: "5 hours ago",
  },
  {
    id: "7",
    type: "security",
    user: "system",
    ip: "internal",
    location: "Server",
    status: "blocked",
    details: "IP address blocked: 45.33.100.2 (10+ failed login attempts)",
    timestamp: "5 hours ago",
  },
  {
    id: "8",
    type: "login",
    user: "robert.w@example.com",
    ip: "172.16.254.1",
    location: "Sydney, Australia",
    status: "success",
    details: "Successful login after password reset",
    timestamp: "8 hours ago",
  },
  {
    id: "9",
    type: "admin",
    user: "admin@hostershub.com",
    ip: "192.168.1.1",
    location: "New York, USA",
    status: "success",
    details: "New user created: jennifer.l@example.com",
    timestamp: "1 day ago",
  },
  {
    id: "10",
    type: "security",
    user: "system",
    ip: "internal",
    location: "Server",
    status: "warning",
    details: "Unusual login pattern detected for user: david.m@example.com",
    timestamp: "1 day ago",
  },
]

export function SecurityLogs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter logs based on search term, filters, and active tab
  const filteredLogs = securityLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.ip.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === "all" || log.type === typeFilter
    const matchesStatus = statusFilter === "all" || log.status === statusFilter

    // Filter by type based on active tab
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "login" && log.type === "login") ||
      (activeTab === "admin" && log.type === "admin") ||
      (activeTab === "security" && log.type === "security")

    return matchesSearch && matchesType && matchesStatus && matchesTab
  })

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Security & Logs</h2>
        <p className="text-muted-foreground">Monitor security events and admin activities.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Login Attempts</CardTitle>
            <LogIn className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">+18% from last week</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Logins</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">+7% from last week</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blocked IPs</CardTitle>
            <Ban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center">+2 in last 24 hours</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Actions</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-muted-foreground flex items-center">+12 today</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Logs</TabsTrigger>
          <TabsTrigger value="login">Login Activity</TabsTrigger>
          <TabsTrigger value="admin">Admin Activity</TabsTrigger>
          <TabsTrigger value="security">Security Events</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Security Logs</CardTitle>
            <CardDescription>
              {activeTab === "all" && "View all security and activity logs."}
              {activeTab === "login" && "View login attempts and authentication logs."}
              {activeTab === "admin" && "View admin actions and system changes."}
              {activeTab === "security" && "View security alerts and system warnings."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search logs..."
                    className="w-full pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex items-center space-x-2">
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="login">Login</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="blocked">Blocked</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {log.type === "login" && <LogIn className="h-4 w-4" />}
                          {log.type === "admin" && <Shield className="h-4 w-4" />}
                          {log.type === "security" && <AlertTriangle className="h-4 w-4" />}
                          <span className="capitalize">{log.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>{log.ip}</TableCell>
                      <TableCell className="hidden md:table-cell">{log.location}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            log.status === "success"
                              ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                              : log.status === "failed"
                                ? "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
                                : log.status === "warning"
                                  ? "bg-orange-100 text-orange-800 hover:bg-orange-100 hover:text-orange-800"
                                  : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                          }
                        >
                          {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{log.timestamp}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            {log.type === "login" && log.status === "failed" && (
                              <DropdownMenuItem>
                                <Ban className="mr-2 h-4 w-4" />
                                Block IP
                              </DropdownMenuItem>
                            )}
                            {log.status === "blocked" && (
                              <DropdownMenuItem>
                                <Lock className="mr-2 h-4 w-4" />
                                Unblock IP
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredLogs.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No logs found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  )
}
