import { notFound } from "next/navigation";

import CourseDescription from "@/components/courses/CourseDescription";
import CourseHero from "@/components/courses/CourseHero";
import CourseRoadmapPreview from "@/components/courses/CourseRoadmapPreview";

import { getCourseBySlug } from "@/lib/actions/courses/get-course-by-slug";
import { getModulesByRoadmap } from "@/lib/actions/modules/get-modules-by-roadmap";
import { getRoadmapByCourse } from "@/lib/actions/roadmaps/get-roadmap-by-course";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  // Get course
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Get roadmap
  const roadmap = await getRoadmapByCourse(course.id);

  // Get modules
  const modules = roadmap
    ? await getModulesByRoadmap(roadmap.id)
    : [];

  // Debug
  console.log("================================");
  console.log("Course:", course);
  console.log("Roadmap:", roadmap);
  console.log("Modules:", modules);
  console.log("================================");

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <CourseHero course={course} />

      <CourseDescription course={course} />

      <CourseRoadmapPreview modules={modules} />
    </main>
  );
}