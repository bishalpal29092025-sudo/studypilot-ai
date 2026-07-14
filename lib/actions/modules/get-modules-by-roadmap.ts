"use server";

import { moduleService } from "@/lib/services/module.service";

export async function getModulesByRoadmap(
  roadmapId: string,
) {
  return moduleService.getModulesByRoadmap(
    roadmapId,
  );
}
