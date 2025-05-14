"use client"

import { useState } from "react"
import { Check, Edit, MoreHorizontal, Plus, Trash, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample plan data
const plans = [
  {
    id: "1",
    name: "Basic Shared Hosting",
    category: "Shared",
    monthlyPrice: 4.99,
    yearlyPrice: 49.99,
    diskSpace: "10 GB",
    bandwidth: "100 GB",
    databases: 5,
    emails: 10,
    status: "active",
    featured: false,
  },
  {
    id: "2",
    name: "Advanced Shared Hosting",
    category: "Shared",
    monthlyPrice: 9.99,
    yearlyPrice: 99.99,
    diskSpace: "25 GB",
    bandwidth: "Unlimited",
    databases: 20,
    emails: 50,
    status: "active",
    featured: true,
  },
  {
    id: "3",
    name: "Business Shared Hosting",
    category: "Shared",
    monthlyPrice: 14.99,
    yearlyPrice: 149.99,
    diskSpace: "50 GB",
    bandwidth: "Unlimited",
    databases: "Unlimited",
    emails: "Unlimited",
    status: "active",
    featured: false,
  },
  {
    id: "4",
    name: "Starter VPS",
    category: "VPS",
    monthlyPrice: 19.99,
    yearlyPrice: 199.99,
    diskSpace: "50 GB SSD",
    bandwidth: "1 TB",
    databases: "Unlimited",
    emails: "Unlimited",
    status: "active",
    featured: false,
  },
  {
    id: "5",
    name: "Professional VPS",
    category: "VPS",
    monthlyPrice: 39.99,
    yearlyPrice: 399.99,
    diskSpace: "100 GB SSD",
    bandwidth: "2 TB",
    databases: "Unlimited",
    emails: "Unlimited",
    status: "active",
    featured: true,
  },
  {
    id: "6",
    name: "Enterprise VPS",
    category: "VPS",
    monthlyPrice: 59.99,
    yearlyPrice: 599.99,
    diskSpace: "200 GB SSD",
    bandwidth: "3 TB",
    databases: "Unlimited",
    emails: "Unlimited",
    status: "active",
    featured: false,
  },
  {
    id: "7",
    name: "Cloud Starter",
    category: "Cloud",
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    diskSpace: "80 GB SSD",
    bandwidth: "2 TB",
    databases: "Unlimited",
    emails: "Unlimited",
    status: "active",
    featured: false,
  },
  {
    id: "8",
    name: "Cloud Business",
    category: "Cloud",
    monthlyPrice: 49.99,
    yearlyPrice: 499.99,
    diskSpace: "160 GB SSD",
    bandwidth: "4 TB",
    databases: "Unlimited",
    emails: "Unlimited",
    status: "active",
    featured: true,
  },
  {
    id: "9",
    name: "Cloud Enterprise",
    category: "Cloud",
    monthlyPrice: 99.99,
    yearlyPrice: 999.99,
    diskSpace: "320 GB SSD",
    bandwidth: "8 TB",
    databases: "Unlimited",
    emails: "Unlimited",
    status: "inactive",
    featured: false,
  },
]

export function PlanManagement() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter plans based on active tab
  const filteredPlans = activeTab === "all" ? plans : plans.filter((plan) => plan.category.toLowerCase() === activeTab)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Hosting Plans</h2>
          <p className="text-muted-foreground">Manage your hosting plans, pricing, and features.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Plan
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Plans</TabsTrigger>
          <TabsTrigger value="shared">Shared Hosting</TabsTrigger>
          <TabsTrigger value="vps">VPS</TabsTrigger>
          <TabsTrigger value="cloud">Cloud</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>All Hosting Plans</CardTitle>
              <CardDescription>Manage all your hosting plans across different categories.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Monthly Price</TableHead>
                      <TableHead>Yearly Price</TableHead>
                      <TableHead className="hidden md:table-cell">Disk Space</TableHead>
                      <TableHead className="hidden md:table-cell">Bandwidth</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans.map((plan) => (
                      <TableRow key={plan.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {plan.name}
                            {plan.featured && (
                              <Badge variant="secondary" className="ml-2">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{plan.category}</TableCell>
                        <TableCell>${plan.monthlyPrice.toFixed(2)}</TableCell>
                        <TableCell>${plan.yearlyPrice.toFixed(2)}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.diskSpace}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.bandwidth}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              plan.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                            }
                          >
                            {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                          </Badge>
                        </TableCell>
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
                                Edit Plan
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {plan.featured ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Remove Featured
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Make Featured
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                {plan.status === "active" ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Deactivate Plan
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Activate Plan
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Plan
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shared" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Shared Hosting Plans</CardTitle>
              <CardDescription>Manage your shared hosting plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Monthly Price</TableHead>
                      <TableHead>Yearly Price</TableHead>
                      <TableHead className="hidden md:table-cell">Disk Space</TableHead>
                      <TableHead className="hidden md:table-cell">Bandwidth</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans.map((plan) => (
                      <TableRow key={plan.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {plan.name}
                            {plan.featured && (
                              <Badge variant="secondary" className="ml-2">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>${plan.monthlyPrice.toFixed(2)}</TableCell>
                        <TableCell>${plan.yearlyPrice.toFixed(2)}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.diskSpace}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.bandwidth}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              plan.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                            }
                          >
                            {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                          </Badge>
                        </TableCell>
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
                                Edit Plan
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {plan.featured ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Remove Featured
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Make Featured
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                {plan.status === "active" ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Deactivate Plan
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Activate Plan
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Plan
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vps" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>VPS Hosting Plans</CardTitle>
              <CardDescription>Manage your VPS hosting plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Monthly Price</TableHead>
                      <TableHead>Yearly Price</TableHead>
                      <TableHead className="hidden md:table-cell">Disk Space</TableHead>
                      <TableHead className="hidden md:table-cell">Bandwidth</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans.map((plan) => (
                      <TableRow key={plan.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {plan.name}
                            {plan.featured && (
                              <Badge variant="secondary" className="ml-2">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>${plan.monthlyPrice.toFixed(2)}</TableCell>
                        <TableCell>${plan.yearlyPrice.toFixed(2)}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.diskSpace}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.bandwidth}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              plan.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                            }
                          >
                            {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                          </Badge>
                        </TableCell>
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
                                Edit Plan
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {plan.featured ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Remove Featured
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Make Featured
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                {plan.status === "active" ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Deactivate Plan
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Activate Plan
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Plan
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cloud" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Cloud Hosting Plans</CardTitle>
              <CardDescription>Manage your cloud hosting plans.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Monthly Price</TableHead>
                      <TableHead>Yearly Price</TableHead>
                      <TableHead className="hidden md:table-cell">Disk Space</TableHead>
                      <TableHead className="hidden md:table-cell">Bandwidth</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans.map((plan) => (
                      <TableRow key={plan.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {plan.name}
                            {plan.featured && (
                              <Badge variant="secondary" className="ml-2">
                                Featured
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>${plan.monthlyPrice.toFixed(2)}</TableCell>
                        <TableCell>${plan.yearlyPrice.toFixed(2)}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.diskSpace}</TableCell>
                        <TableCell className="hidden md:table-cell">{plan.bandwidth}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              plan.status === "active"
                                ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800"
                            }
                          >
                            {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                          </Badge>
                        </TableCell>
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
                                Edit Plan
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                {plan.featured ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Remove Featured
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Make Featured
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                {plan.status === "active" ? (
                                  <>
                                    <X className="mr-2 h-4 w-4" />
                                    Deactivate Plan
                                  </>
                                ) : (
                                  <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Activate Plan
                                  </>
                                )}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Plan
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
