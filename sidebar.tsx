"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Bell,
  CreditCard,
  Globe,
  HardDrive,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  Mail,
  Package,
  Settings,
  ShieldAlert,
  Terminal,
  Users,
  FileText,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex h-14 items-center px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <HardDrive className="h-6 w-6" />
            <span className="text-xl">Hostershub</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <SidebarTrigger />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                  <Link href="/dashboard">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/users")}>
                  <Link href="/dashboard/users">
                    <Users className="h-5 w-5" />
                    <span>User Management</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/plans")}>
                  <Link href="/dashboard/plans">
                    <Package className="h-5 w-5" />
                    <span>Hosting Plans</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/domains")}>
                  <Link href="/dashboard/domains">
                    <Globe className="h-5 w-5" />
                    <span>Domain Management</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/billing")}>
                  <Link href="/dashboard/billing">
                    <CreditCard className="h-5 w-5" />
                    <span>Orders & Billing</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/tickets")}>
                  <Link href="/dashboard/tickets">
                    <LifeBuoy className="h-5 w-5" />
                    <span>Support Tickets</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/content")}>
                  <Link href="/dashboard/content">
                    <FileText className="h-5 w-5" />
                    <span>Content Management</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/email")}>
                  <Link href="/dashboard/email">
                    <Mail className="h-5 w-5" />
                    <span>Email & Notifications</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")}>
                  <Link href="/dashboard/settings">
                    <Settings className="h-5 w-5" />
                    <span>Platform Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/analytics")}>
                  <Link href="/dashboard/analytics">
                    <BarChart3 className="h-5 w-5" />
                    <span>Reports & Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/tools")}>
                  <Link href="/dashboard/tools">
                    <Terminal className="h-5 w-5" />
                    <span>Tools & Utilities</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/dashboard/security")}>
                  <Link href="/dashboard/security">
                    <ShieldAlert className="h-5 w-5" />
                    <span>Security & Logs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="p-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start px-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">admin@hostershub.com</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Lock className="mr-2 h-4 w-4" />
                <span>Security Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
