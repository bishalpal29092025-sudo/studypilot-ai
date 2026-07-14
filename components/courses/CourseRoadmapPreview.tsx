const roadmap = [
  "Python Fundamentals",
  "Mathematics for AI",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Retrieval-Augmented Generation",
  "LangChain & LangGraph",
  "Deployment",
];

export default function CourseRoadmapPreview() {
  return (
    <section className="rounded-2xl border p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Learning Roadmap
      </h2>

      <div className="space-y-4">
        {roadmap.map((module, index) => (
          <div
            key={module}
            className="flex items-center gap-4 rounded-lg border p-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
              {index + 1}
            </div>

            <p className="font-medium">
              {module}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}