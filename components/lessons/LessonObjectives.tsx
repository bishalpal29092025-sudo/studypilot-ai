interface LessonObjectivesProps {
  objectives: string[];
}

export default function LessonObjectives({
  objectives,
}: LessonObjectivesProps) {
  if (objectives.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border p-6">
      <h2 className="mb-4 text-2xl font-semibold">
        Learning Objectives
      </h2>

      <ul className="list-disc space-y-2 pl-5">
        {objectives.map((objective) => (
          <li key={objective}>
            {objective}
          </li>
        ))}
      </ul>
    </section>
  );
}