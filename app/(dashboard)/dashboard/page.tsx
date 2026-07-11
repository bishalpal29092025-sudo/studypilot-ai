import { redirect } from "next/navigation";
import { BookOpen, CheckCircle2, Clock3, Flame } from "lucide-react";
import StatCard from "@/components/dashboard/cards/stat-card";
import WelcomeBanner from "@/components/dashboard/widgets/welcome-banner";
import { getDashboardData } from "@/lib/dashboard";

export default async function DashboardPage() {
  const dashboard = await getDashboardData();

  // Add it here
  if (!dashboard.user) {
    redirect("/sign-in");
  }
  return (
    <div className="space-y-6">
      <WelcomeBanner />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Study Hours"
          value={dashboard.stats.studyHours.toString()}
          description="This month"
          icon={<Clock3 className="size-5" />}
        />

        <StatCard
          title="Study Streak"
          value={dashboard.stats.streak.toString()}
          description="Keep it up!"
          icon={<Flame className="size-5" />}
        />

        <StatCard
          title="Courses"
          value={dashboard.stats.activeCourses.toString()}
          description="Active"
          icon={<BookOpen className="size-5" />}
        />

        <StatCard
          title="Completed"
          value={dashboard.stats.completedLessons.toString()}
          description="Lessons"
          icon={<CheckCircle2 className="size-5" />}
        />
      </div>
    </div>
  );
}