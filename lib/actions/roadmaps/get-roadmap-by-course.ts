"use server";

import { roadmapService } from "@/lib/services/roadmap.service";

export async function getRoadmapByCourse(
  courseId: string,
) {
  return roadmapService.getRoadmapByCourse(
    courseId,
  );
}