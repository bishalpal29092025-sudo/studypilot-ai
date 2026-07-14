import { notFound } from "next/navigation";

import LessonHero from "@/components/lessons/LessonHero";
import LessonObjectives from "@/components/lessons/LessonObjectives";
import LessonContent from "@/components/lessons/LessonContent";
import LessonResources from "@/components/lessons/LessonResources";
import LessonNavigation from "@/components/lessons/LessonNavigation";

import { getLessonBySlug } from "@/lib/actions/lessons/get-lesson-by-slug";

interface LessonPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { slug } = await params;

  const lesson =
    await getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-10">
      <LessonHero lesson={lesson} />

      <LessonObjectives
        objectives={lesson.objectives}
      />

      <LessonContent
        content={lesson.content}
      />

      <LessonResources
        resources={lesson.resources}
      />

      <LessonNavigation />
    </main>
  );
}