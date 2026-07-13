import Course from "@/models/Course";
import Roadmap from "@/models/Roadmap";
import Module from "@/models/Module";
import Lesson from "@/models/Lesson";
import Progress from "@/models/Progress";

import { logger } from "./logger";

/**
 * Clears seed data in dependency order.
 */
export async function resetDatabase() {
  logger.section("Reset Database");

  await Progress.deleteMany({});
  logger.success("Progress cleared.");

  await Lesson.deleteMany({});
  logger.success("Lessons cleared.");

  await Module.deleteMany({});
  logger.success("Modules cleared.");

  await Roadmap.deleteMany({});
  logger.success("Roadmaps cleared.");

  await Course.deleteMany({});
  logger.success("Courses cleared.");
}