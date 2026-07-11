import Logo from "@/components/ui/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import NavMain from "./nav-main";
import NavUser from "./nav-user";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
      </SidebarContent>

      <NavUser />

      <SidebarRail />
    </Sidebar>
  );
}