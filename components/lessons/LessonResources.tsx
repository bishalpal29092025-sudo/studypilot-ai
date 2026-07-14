interface LessonResourcesProps {
  resources: string[];
}

export default function LessonResources({
  resources,
}: LessonResourcesProps) {
  if (resources.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border p-6">
      <h2 className="mb-4 text-2xl font-semibold">
        Resources
      </h2>

      <ul className="space-y-3">
        {resources.map((resource) => (
          <li key={resource}>
            <a
              href={resource}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {resource}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}