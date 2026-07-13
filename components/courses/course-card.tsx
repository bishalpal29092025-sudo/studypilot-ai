import Link from "next/link";

import type { CourseDto } from "@/types/course";

interface CourseCardProps {
  course: CourseDto;
}

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="block rounded-2xl border p-6 transition hover:shadow-lg"
    >
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold">
            {course.title}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {course.description}
          </p>
        </div>

        <div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">
            {course.level}
          </span>
        </div>
      </div>
    </Link>
  );
}