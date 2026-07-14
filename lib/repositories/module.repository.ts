import { connectToDatabase } from "@/lib/db/connect";

import Module from "@/models/Module";

export class ModuleRepository {
  /**
   * Get all modules for a roadmap.
   */
  async findByRoadmap(roadmapId: string) {
    await connectToDatabase();

    return Module.find({
      roadmap: roadmapId,
    })
      .sort({
        order: 1,
      })
      .lean();
  }

  /**
   * Find module by slug.
   */
  async findBySlug(slug: string) {
    await connectToDatabase();

    return Module.findOne({
      slug,
    }).lean();
  }
}

export const moduleRepository = new ModuleRepository();