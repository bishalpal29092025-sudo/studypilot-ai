import type { ReactNode } from "react";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import AppHeader from "./app-header";
import AppSidebar from "./app-sidebar";

export default function AppShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />

      <SidebarInset>
        <AppHeader />

        <main className="flex-1 p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}