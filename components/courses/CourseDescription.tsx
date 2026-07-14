import type { CourseDto } from "@/types/course";

interface CourseDescriptionProps {
  course: CourseDto;
}

export default function CourseDescription({
  course,
}: CourseDescriptionProps) {
  return (
    <section className="rounded-2xl border p-8">
      <h2 className="mb-4 text-2xl font-semibold">
        About this Course
      </h2>

      <p className="leading-8 text-muted-foreground">
        {course.description}
      </p>
    </section>
  );
}