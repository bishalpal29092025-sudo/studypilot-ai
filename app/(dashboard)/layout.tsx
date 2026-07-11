import type { ReactNode } from "react";

import DashboardHeader from "@/components/dashboard/header";
import DashboardSidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}