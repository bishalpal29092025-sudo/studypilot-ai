import mongoose from "mongoose";

import { connectToDatabase } from "@/lib/db/connect";

import Course from "@/models/Course";
import Roadmap from "@/models/Roadmap";
import Module from "@/models/Module";
import Lesson from "@/models/Lesson";

import { courses } from "./data/courses";
import { roadmaps } from "./data/roadmaps";
import { modules } from "./data/modules";
import { lessons } from "./data/lessons";

import { logger } from "./helpers/logger";
import { resetDatabase } from "./helpers/reset-db";


async function seed() {
  try {
    logger.section("StudyPilot AI Database Seeder");

    logger.info("Connecting to MongoDB...");
    await connectToDatabase();
    logger.success("MongoDB connected.");

    await resetDatabase();

    // ==========================
    // Create Course
    // ==========================

    logger.section("Creating Course");

    const createdCourse = await Course.create(courses[0]);

    logger.success(`Course created: ${createdCourse.title}`);

    // ==========================
    // Create Roadmap
    // ==========================

    logger.section("Creating Roadmap");

    const createdRoadmap = await Roadmap.create({
      ...roadmaps[0],
      course: createdCourse._id,

      // Temporary user until we redesign the Roadmap model.
      user: new mongoose.Types.ObjectId(),

      progress: 0,
      currentModule: 0,
      completed: false,
    });

    logger.success(`Roadmap created: ${createdRoadmap.title}`);

    // ==========================
    // Create Modules
    // ==========================

    logger.section("Creating Modules");

    const moduleMap = new Map<string, mongoose.Types.ObjectId>();

    for (const moduleData of modules) {
      const createdModule = await Module.create({
        ...moduleData,
        roadmap: createdRoadmap._id,
      });

      moduleMap.set(
        createdModule.slug,
        createdModule._id as mongoose.Types.ObjectId,
      );

      logger.success(createdModule.title);
    }

    // ==========================
    // Create Lessons
    // ==========================

    logger.section("Creating Lessons");

    for (const lesson of lessons) {
      const moduleId = moduleMap.get(lesson.moduleSlug);

      if (!moduleId) {
        logger.warning(
          `Module "${lesson.moduleSlug}" not found. Skipping lesson "${lesson.title}".`,
        );
        continue;
      }

      await Lesson.create({
        module: moduleId,

        title: lesson.title,
        slug: lesson.slug,

        description: lesson.description,

        content: lesson.content,

        summary: lesson.summary,

        objectives: lesson.objectives,

        resources: lesson.resources,

        order: lesson.order,

        estimatedMinutes: lesson.estimatedMinutes,

        difficulty: lesson.difficulty,

        videoUrl: lesson.videoUrl,

        aiGenerated: lesson.aiGenerated,

        status: lesson.status,
      });

      logger.success(lesson.title);
    }

    // ==========================
    // Finished
    // ==========================

    logger.section("Seed Completed");

    logger.success("StudyPilot AI database seeded successfully.");

    process.exit(0);
  } catch (error) {
    logger.error("Database seeding failed.");

    console.error(error);

    process.exit(1);
  }
}

seed();