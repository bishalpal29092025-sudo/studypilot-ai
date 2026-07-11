import Link from "next/link";

import Logo from "@/components/ui/logo";

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-64 border-r bg-card lg:flex lg:flex-col">
      <div className="border-b p-6">
        <Logo />
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/roadmap">Roadmap</Link>
        <Link href="/chat">AI Chat</Link>
        <Link href="/quiz">Quiz</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  );
}