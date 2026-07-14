"use server";

import { moduleService } from "@/lib/services/module.service";

export async function getModuleBySlug(slug: string) {
  return moduleService.getModuleBySlug(slug);
}