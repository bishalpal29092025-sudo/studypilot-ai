import { BookOpen, Clock3, GraduationCap } from "lucide-react";

import type { CourseDto } from "@/types/course";

interface CourseStatsProps {
  course: CourseDto;
}

export default function CourseStats({
  course,
}: CourseStatsProps) {
  return (
    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-4 w-4" />
        <span className="capitalize">
          {course.level}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Clock3 className="h-4 w-4" />
        <span>{course.estimatedHours} Hours</span>
      </div>

      <div className="flex items-center gap-2">
        <BookOpen className="h-4 w-4" />
        <span>Course</span>
      </div>
    </div>
  );
}