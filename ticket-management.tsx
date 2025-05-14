"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Clock, MessageSquare, MoreHorizontal, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample ticket data
const tickets = [
  {
    id: "T-1001",
    subject: "Website not loading after migration",
    user: {
      name: "John Smith",
      email: "john.smith@example.com",
    },
    priority: "high",
    status: "open",
    department: "technical",
    created: "2 hours ago",
    lastReply: "1 hour ago",
    replies: 3,
  },
  {
    id: "T-1002",
    subject: "Need help with domain transfer",
    user: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
    },
    priority: "medium",
    status: "open",
    department: "technical",
    created: "5 hours ago",
    lastReply: "3 hours ago",
    replies: 2,
  },
  {
    id: "T-1003",
    subject: "Billing issue with last invoice",
    user: {
      name: "Michael Brown",
      email: "michael.b@example.com",
    },
    priority: "medium",
    status: "open",
    department: "billing",
    created: "1 day ago",
    lastReply: "12 hours ago",
    replies: 4,
  },
  {
    id: "T-1004",
    subject: "Email service not working",
    user: {
      name: "Emily Davis",
      email: "emily.d@example.com",
    },
    priority: "high",
    status: "in-progress",
    department: "technical",
    created: "2 days ago",
    lastReply: "6 hours ago",
    replies: 7,
  },
  {
    id: "T-1005",
    subject: "Request for refund",
    user: {
      name: "Robert Wilson",
      email: "robert.w@example.com",
    },
    priority: "low",
    status: "in-progress",
    department: "billing",
    created: "3 days ago",
    lastReply: "1 day ago",
    replies: 5,
  },
  {
    id: "T-1006",
    subject: "SSL certificate installation help",
    user: {
      name: "Jennifer Lee",
      email: "jennifer.l@example.com",
    },
    priority: "medium",
    status: "closed",
    department: "technical",
    created: "5 days ago",
    lastReply: "2 days ago",
    replies: 6,
  },
  {
    id: "T-1007",
    subject: "Account access issues",
    user: {
      name: "David Miller",
      email: "david.m@example.com",
    },
    priority: "high",
    status: "closed",
    department: "support",
    created: "1 week ago",
    lastReply: "3 days ago",
    replies: 8,
  },
]

export function TicketManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter tickets based on search term, filters, and active tab
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPriority = priorityFilter === "all" || ticket.priority === priorityFilter
    const matchesDepartment = departmentFilter === "all" || ticket.department === departmentFilter

    // Filter by status based on active tab
    const matchesStatus =
      activeTab === "all" ||
      (activeTab === "open" && (ticket.status === "open" || ticket.status === "in-progress")) ||
      (activeTab === "closed" && ticket.status === "closed")

    return matchesSearch && matchesPriority && matchesDepartment && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Support Tickets</h2>
          <p className="text-muted-foreground">Manage and respond to customer support tickets.</p>
        </div>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" />
          Create Ticket
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="open">Open Tickets</TabsTrigger>
          <TabsTrigger value="closed">Closed Tickets</TabsTrigger>
        </TabsList>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Support Tickets</CardTitle>
            <CardDescription>
              {activeTab === "all" && "View and manage all support tickets."}
              {activeTab === "open" && "View and manage open and in-progress tickets."}
              {activeTab === "closed" && "View closed and resolved tickets."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search tickets..."
                    className="w-full pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex items-center space-x-2">
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Filter by priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priorities</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Department</TableHead>
                    <TableHead className="hidden md:table-cell">Created</TableHead>
                    <TableHead className="hidden md:table-cell">Last Reply</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>
                        <div className="font-medium">{ticket.id}</div>
                        <div className="text-sm text-muted-foreground">{ticket.subject}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={ticket.user.name} />
                            <AvatarFallback>
                              {ticket.user.name.charAt(0)}
                              {ticket.user.name.split(" ")[1]?.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{ticket.user.name}</div>
                            <div className="text-xs text-muted-foreground">{ticket.user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ticket.priority === "high"
                              ? "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
                              : ticket.priority === "medium"
                                ? "bg-orange-100 text-orange-800 hover:bg-orange-100 hover:text-orange-800"
                                : "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                          }
                        >
                          {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {ticket.status === "open" && (
                            <Badge
                              variant="outline"
                              className="bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                            >
                              Open
                            </Badge>
                          )}
                          {ticket.status === "in-progress" && (
                            <Badge
                              variant="outline"
                              className="bg-purple-100 text-purple-800 hover:bg-purple-100 hover:text-purple-800"
                            >
                              In Progress
                            </Badge>
                          )}
                          {ticket.status === "closed" && (
                            <Badge
                              variant="outline"
                              className="bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                            >
                              Closed
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {ticket.replies} {ticket.replies === 1 ? "reply" : "replies"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {ticket.department.charAt(0).toUpperCase() + ticket.department.slice(1)}
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{ticket.created}</TableCell>
                      <TableCell className="hidden md:table-cell">{ticket.lastReply}</TableCell>
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
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Reply
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              Assign
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {ticket.status !== "in-progress" && (
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                Mark as In Progress
                              </DropdownMenuItem>
                            )}
                            {ticket.status !== "closed" && (
                              <DropdownMenuItem>
                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                Close Ticket
                              </DropdownMenuItem>
                            )}
                            {ticket.status === "closed" && (
                              <DropdownMenuItem>
                                <AlertCircle className="mr-2 h-4 w-4" />
                                Reopen Ticket
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredTickets.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={8} className="h-24 text-center">
                        No tickets found.
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
