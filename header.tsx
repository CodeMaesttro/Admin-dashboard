"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="flex flex-1 items-center gap-4 md:gap-8">
        <form className="flex-1 md:max-w-sm lg:max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full bg-background pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
        </form>
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-4 w-4" />
                <Badge className="absolute -right-1 -top-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">
                  5
                </Badge>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-auto">
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="font-medium">New user registered</div>
                  <div className="text-xs text-muted-foreground">2 minutes ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="font-medium">New support ticket opened</div>
                  <div className="text-xs text-muted-foreground">15 minutes ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="font-medium">Server alert: High CPU usage</div>
                  <div className="text-xs text-muted-foreground">1 hour ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="font-medium">Payment received</div>
                  <div className="text-xs text-muted-foreground">3 hours ago</div>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start">
                  <div className="font-medium">Domain expiry reminder sent</div>
                  <div className="text-xs text-muted-foreground">5 hours ago</div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center font-medium">View all notifications</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
