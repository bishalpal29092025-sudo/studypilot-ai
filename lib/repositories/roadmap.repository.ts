import { connectToDatabase } from "@/lib/db/connect";

import Roadmap from "@/models/Roadmap";

export class RoadmapRepository {
  /**
   * Find roadmap by course ID.
   */
  async findByCourse(courseId: string) {
    await connectToDatabase();

    return Roadmap.findOne({
      course: courseId,
    }).lean();
  }

  /**
   * Find roadmap by ID.
   */
  async findById(id: string) {
    await connectToDatabase();

    return Roadmap.findById(id).lean();
  }
}

export const roadmapRepository = new RoadmapRepository();