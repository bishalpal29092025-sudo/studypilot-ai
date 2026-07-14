import { notFound } from "next/navigation";

import { getCourseBySlug } from "@/lib/actions/courses/get-course-by-slug";

import CourseHero from "@/components/courses/CourseHero";
import CourseDescription from "@/components/courses/CourseDescription";
import CourseRoadmapPreview from "@/components/courses/CourseRoadmapPreview";

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
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <CourseHero course={course} />

      <CourseDescription course={course} />

      <CourseRoadmapPreview />
    </main>
  );
}