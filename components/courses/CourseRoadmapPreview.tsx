import type { ModuleDto } from "@/types/module";

interface CourseRoadmapPreviewProps {
  modules: ModuleDto[];
}

export default function CourseRoadmapPreview({
  modules,
}: CourseRoadmapPreviewProps) {
  return (
    <section className="rounded-2xl border p-8">
      <h2 className="mb-6 text-2xl font-semibold">
        Learning Roadmap
      </h2>

      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className="flex items-center gap-4 rounded-xl border p-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
              {module.order}
            </div>

            <div>
              <h3 className="font-semibold">
                {module.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {module.estimatedMinutes} mins
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}