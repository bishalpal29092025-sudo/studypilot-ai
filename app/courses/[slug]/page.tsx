import { notFound } from "next/navigation";

import { getCourseBySlug } from "@/lib/actions/courses/get-course-by-slug";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-4xl font-bold">
        {course.title}
      </h1>

      <p className="mt-4 text-muted-foreground">
        {course.description}
      </p>

      <div className="mt-6">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">
          {course.level}
        </span>
      </div>
    </main>
  );
}