import { Schema, model, models } from "mongoose";
import type { CourseLevel } from "@/types/course";
import { COURSE_LEVELS } from "@/types/course";

export interface ICourse {
  title: string;
  slug: string;
  description: string;
  category: string;
  level: CourseLevel;

  thumbnail: string | null;

  estimatedHours: number;

  tags: string[];

  published: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 1000,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: String,
      enum: COURSE_LEVELS,
      default: "beginner",
    },

    thumbnail: {
      type: String,
      default: null,
    },

    estimatedHours: {
      type: Number,
      default: 0,
      min: 0,
    },

    tags: {
      type: [String],
      default: [],
    },

    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

CourseSchema.index({ slug: 1 }, { unique: true });

const MODEL_NAME = "Course";

const Course = models[MODEL_NAME] ?? model<ICourse>(MODEL_NAME, CourseSchema);

export default Course;
