import { getCourses } from "@/lib/actions/courses/get-courses";

import CourseGrid from "@/components/courses/course-grid";
import EmptyCourses from "@/components/courses/empty-courses";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Courses
        </h1>

        <p className="text-muted-foreground">
          Explore available learning paths.
        </p>
      </div>

      <div className="mt-10">
        {courses.length === 0 ? (
          <EmptyCourses />
        ) : (
          <CourseGrid courses={courses} />
        )}
      </div>
    </main>
  );
}