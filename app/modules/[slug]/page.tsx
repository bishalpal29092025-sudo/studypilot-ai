import { notFound } from "next/navigation";

import { getLessonsByModule } from "@/lib/actions/lessons/get-lessons-by-module";
import { getModuleBySlug } from "@/lib/actions/modules/get-module-by-slug";

interface ModulePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ModulePage({
  params,
}: ModulePageProps) {
  const { slug } = await params;

  // -----------------------------
  // Get Module
  // -----------------------------
  const moduleData = await getModuleBySlug(slug);

  if (!moduleData) {
    notFound();
  }

  // -----------------------------
  // Get Lessons
  // -----------------------------
  const lessons = await getLessonsByModule(moduleData.id);

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-10">
      {/* Module Header */}
      <section>
        <h1 className="text-4xl font-bold">
          {moduleData.title}
        </h1>

        <p className="mt-3 text-muted-foreground">
          {moduleData.description}
        </p>
      </section>

      {/* Lessons */}
      <section className="rounded-2xl border p-6">
        <h2 className="mb-6 text-2xl font-semibold">
          Lessons
        </h2>

        <div className="space-y-4">
          {lessons.length === 0 ? (
            <p className="text-muted-foreground">
              No lessons available.
            </p>
          ) : (
            lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="rounded-xl border p-4 transition-colors hover:bg-accent"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">
                    {lesson.order}. {lesson.title}
                  </h3>

                  <span className="text-sm text-muted-foreground">
                    {lesson.estimatedMinutes} mins
                  </span>
                </div>

                {lesson.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {lesson.description}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}