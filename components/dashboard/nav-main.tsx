import Link from "next/link";
import {
  BookOpen,
  Bot,
  Home,
  Settings,
  User,
} from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Roadmap",
    href: "/roadmap",
    icon: BookOpen,
  },
  {
    title: "AI Chat",
    href: "/chat",
    icon: Bot,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function NavMain() {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            render={
              <Link href={item.href}>
                <item.icon className="size-4" />
                <span>{item.title}</span>
              </Link>
            }
          />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}