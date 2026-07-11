import { SidebarTrigger } from "@/components/ui/sidebar";

export default function AppHeader() {
  return (
    <header className="flex h-16 items-center border-b px-6">
      <SidebarTrigger />

      <h1 className="ml-4 text-lg font-semibold">
        StudyPilot AI
      </h1>
    </header>
  );
}