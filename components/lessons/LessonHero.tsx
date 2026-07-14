import type { LessonDto } from "@/types/lesson";

interface LessonHeroProps {
  lesson: LessonDto;
}

export default function LessonHero({
  lesson,
}: LessonHeroProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
          {lesson.difficulty}
        </span>

        <span className="text-sm text-muted-foreground">
          {lesson.estimatedMinutes} min read
        </span>
      </div>

      <h1 className="text-4xl font-bold tracking-tight">
        {lesson.title}
      </h1>

      <p className="max-w-3xl text-lg text-muted-foreground">
        {lesson.description}
      </p>
    </section>
  );
}