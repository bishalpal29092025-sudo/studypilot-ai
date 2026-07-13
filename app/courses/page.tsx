import { getCourses } from "@/lib/actions/courses/get-courses";
import type { CourseDto } from "@/types/course";

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

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.length === 0 ? (
          <div className="rounded-xl border p-8">
            <h2 className="text-xl font-semibold">
              No Courses Found
            </h2>

            <p className="mt-2 text-muted-foreground">
              Seed your database first.
            </p>
          </div>
        ) : (
          courses.map((course: CourseDto) => (
            <div
              key={course.id}
              className="rounded-xl border p-6 transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold">
                {course.title}
              </h2>

              <p className="mt-3 text-muted-foreground">
                {course.description}
              </p>

              <div className="mt-6">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">
                  {course.level}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}