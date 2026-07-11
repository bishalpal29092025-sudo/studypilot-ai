import {
    BookOpen,
    CheckCircle2,
    Clock3,
    Flame,
  } from "lucide-react";
  
  import StatCard from "@/components/dashboard/cards/stat-card";
  import WelcomeBanner from "@/components/dashboard/widgets/welcome-banner";
  
  export default function DashboardPage() {
    return (
      <div className="space-y-6">
        <WelcomeBanner />
  
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Study Hours"
            value="24"
            description="This month"
            icon={<Clock3 className="size-5" />}
          />
  
          <StatCard
            title="Study Streak"
            value="12 Days"
            description="Keep it up!"
            icon={<Flame className="size-5" />}
          />
  
          <StatCard
            title="Courses"
            value="6"
            description="Active"
            icon={<BookOpen className="size-5" />}
          />
  
          <StatCard
            title="Completed"
            value="18"
            description="Lessons"
            icon={<CheckCircle2 className="size-5" />}
          />
        </div>
      </div>
    );
  }