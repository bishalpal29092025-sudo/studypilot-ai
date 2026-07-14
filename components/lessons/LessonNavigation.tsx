export default function LessonNavigation() {
  return (
    <section className="flex items-center justify-between border-t pt-8">
      <button
        className="rounded-lg border px-4 py-2 transition hover:bg-accent"
      >
        ← Previous Lesson
      </button>

      <button
        className="rounded-lg bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
      >
        Next Lesson →
      </button>
    </section>
  );
}