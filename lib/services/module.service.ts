import { mapModule } from "@/lib/mappers/module.mapper";
import { moduleRepository } from "@/lib/repositories/module.repository";

export class ModuleService {
  async getModulesByRoadmap(roadmapId: string) {
    const modules = await moduleRepository.findByRoadmap(roadmapId);

    return modules.map(mapModule);
  }

  async getModuleBySlug(slug: string) {
    const moduleDocument = await moduleRepository.findBySlug(slug);

    if (!moduleDocument) {
      return null;
    }

    return mapModule(moduleDocument);
  }
}

export const moduleService = new ModuleService();
