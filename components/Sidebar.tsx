"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Bot, 
  Monitor, 
  CreditCard, 
  Plus
} from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const navigationItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Q&A",
      href: "/Q&A",
      icon: Bot,
    },
    {
      name: "Meetings",
      href: "/meetings",
      icon: Monitor,
    },
    {
      name: "Billing",
      href: "/billing",
      icon: CreditCard,
    },
  ];

  const projects = [
    {
      name: "DevDigest AI Frontend",
      href: "#",
    },
    {
      name: "DevDigest AI Backend",
      href: "#",
    },
  ];

  return (
    <SidebarProvider>
      <ShadcnSidebar 
        className={`${className} mt-4 mb-20 ml-4 mr-4 border-figma`}
        variant="sidebar"
        collapsible="offcanvas"
      >
        <SidebarHeader>
          <div className="flex items-center gap-3 p-4">
            <div className="w-10 h-10 bg-devdigest-primary rounded-lg flex items-center justify-center">
              <Image
                src="/Logo.svg"
                alt="DevDigest AI Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <span className="text-lg font-semibold text-devdigest-text">DevDigestAI</span>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-2 py-4">
          {/* Application Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium text-devdigest-text dark:text-gray-400 tracking-wider">
              Application
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href} className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Projects Section */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium text-devdigest-text dark:text-gray-400 tracking-wider">
              Your Projects
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton asChild>
                      <Link href={project.href} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-devdigest-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">D</span>
                        </div>
                        {project.name}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="p-4">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border-figma text-devdigest-text rounded-lg hover:bg-devdigest-secondary hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
              Create Project
            </button>
          </div>
        </SidebarFooter>
      </ShadcnSidebar>
    </SidebarProvider>
  );
} 