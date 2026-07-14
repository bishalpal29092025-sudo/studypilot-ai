import type { CourseDto } from "@/types/course";

import CourseStats from "./CourseStats";
import CourseTags from "./CourseTags";

interface CourseHeroProps {
  course: CourseDto;
}

export default function CourseHero({
  course,
}: CourseHeroProps) {
  return (
    <section className="rounded-2xl border p-8">
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground">
            {course.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            {course.title}
          </h1>
        </div>

        <CourseStats course={course} />

        <CourseTags tags={course.tags} />

        <button className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90">
          Continue Learning
        </button>
      </div>
    </section>
  );
}