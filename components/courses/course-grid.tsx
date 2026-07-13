import CourseCard from "./course-card";

import type { CourseDto } from "@/types/course";

interface CourseGridProps {
  courses: CourseDto[];
}

export default function CourseGrid({
  courses,
}: CourseGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}