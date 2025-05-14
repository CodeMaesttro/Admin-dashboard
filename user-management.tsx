"use client"

import { useState } from "react"
import { Check, Download, Edit, MoreHorizontal, Search, Trash, UserPlus, X } from "lucide-react"
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

// Sample user data
const users = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    status: "active",
    plan: "VPS Hosting",
    domains: 3,
    joined: "Jan 12, 2023",
    lastLogin: "2 hours ago",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "active",
    plan: "Cloud Hosting",
    domains: 5,
    joined: "Mar 4, 2023",
    lastLogin: "1 day ago",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    status: "suspended",
    plan: "Shared Hosting",
    domains: 1,
    joined: "Nov 15, 2022",
    lastLogin: "2 weeks ago",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily.d@example.com",
    status: "active",
    plan: "VPS Hosting",
    domains: 2,
    joined: "Apr 22, 2023",
    lastLogin: "5 hours ago",
  },
  {
    id: "5",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    status: "inactive",
    plan: "Shared Hosting",
    domains: 1,
    joined: "Feb 8, 2023",
    lastLogin: "1 month ago",
  },
  {
    id: "6",
    name: "Jennifer Lee",
    email: "jennifer.l@example.com",
    status: "active",
    plan: "Cloud Hosting",
    domains: 4,
    joined: "May 17, 2023",
    lastLogin: "12 hours ago",
  },
  {
    id: "7",
    name: "David Miller",
    email: "david.m@example.com",
    status: "active",
    plan: "VPS Hosting",
    domains: 2,
    joined: "Jun 30, 2023",
    lastLogin: "3 days ago",
  },
]

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [planFilter, setPlanFilter] = useState("all")

  // Filter users based on search term and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesPlan = planFilter === "all" || user.plan === planFilter

    return matchesSearch && matchesStatus && matchesPlan
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
          <p className="text-muted-foreground">Manage your users, their plans, and account settings.</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Users</CardTitle>
          <CardDescription>You have {users.length} total users registered in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex items-center space-x-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Select value={planFilter} onValueChange={setPlanFilter}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Filter by plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Plans</SelectItem>
                    <SelectItem value="Shared Hosting">Shared Hosting</SelectItem>
                    <SelectItem value="VPS Hosting">VPS Hosting</SelectItem>
                    <SelectItem value="Cloud Hosting">Cloud Hosting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-4 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead className="hidden md:table-cell">Domains</TableHead>
                  <TableHead className="hidden md:table-cell">Joined</TableHead>
                  <TableHead className="hidden md:table-cell">Last Login</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                          <AvatarFallback>
                            {user.name.charAt(0)}
                            {user.name.split(" ")[1]?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          user.status === "active"
                            ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                            : user.status === "suspended"
                              ? "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                        }
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.plan}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.domains}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.joined}</TableCell>
                    <TableCell className="hidden md:table-cell">{user.lastLogin}</TableCell>
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
                            <Edit className="mr-2 h-4 w-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Check className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <X className="mr-2 h-4 w-4" />
                            {user.status === "suspended" ? "Unsuspend User" : "Suspend User"}
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredUsers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
