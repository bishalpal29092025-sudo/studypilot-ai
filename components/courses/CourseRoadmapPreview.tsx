import type { ModuleDto } from "@/types/module";
import Link from "next/link";

interface CourseRoadmapPreviewProps {
  modules: ModuleDto[];
}

export default function CourseRoadmapPreview({ modules }: CourseRoadmapPreviewProps) {
  return (
    <section className="rounded-2xl border p-8">
      <h2 className="mb-6 text-2xl font-semibold">Learning Roadmap</h2>

      <div className="space-y-4">
        {modules.map((module) => (
          <Link
            key={module.id}
            href={`/modules/${module.slug}`}
            className="hover:bg-accent flex items-center gap-4 rounded-xl border p-4 transition-colors"
          >
            <div className="bg-primary text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full font-semibold">
              {module.order}
            </div>

            <div>
              <h3 className="font-semibold">{module.title}</h3>

              <p className="text-muted-foreground text-sm">{module.estimatedMinutes} mins</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
