import { mapRoadmap } from "@/lib/mappers/roadmap.mapper";
import { roadmapRepository } from "@/lib/repositories/roadmap.repository";

export class RoadmapService {
  async getRoadmapByCourse(courseId: string) {
    const roadmapDocument =
      await roadmapRepository.findByCourse(courseId);

    if (!roadmapDocument) {
      return null;
    }

    return mapRoadmap(roadmapDocument);
  }

  async getRoadmapById(id: string) {
    const roadmapDocument =
      await roadmapRepository.findById(id);

    if (!roadmapDocument) {
      return null;
    }

    return mapRoadmap(roadmapDocument);
  }
}

export const roadmapService =
  new RoadmapService();