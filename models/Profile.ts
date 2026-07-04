import { Schema, model, models, Types } from "mongoose";

import { LEARNING_STYLES, STUDY_LEVELS } from "@/constants/profile";

import type { LearningStyle, StudyLevel } from "@/constants/profile";

/**
 * User profile model.
 *
 * Stores learning preferences and profile information.
 * Authentication data is stored in the User model.
 */

export interface IProfile {
  user: Types.ObjectId;
  name: string;
  avatar: string | null;
  bio: string | null;
  learningStyle: LearningStyle;
  studyLevel: StudyLevel;
  dailyStudyHours: number;
  targetExam: string | null;
  examDate: Date | null;
  timezone: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema = new Schema<IProfile>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    avatar: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
      trim: true,
      maxlength: 500,
    },
    learningStyle: {
      type: String,
      enum: LEARNING_STYLES,
      default: LEARNING_STYLES[0],
    },
    studyLevel: {
      type: String,
      enum: STUDY_LEVELS,
      default: STUDY_LEVELS[0],
    },
    dailyStudyHours: {
      type: Number,
      required: true,
      min: 1,
      max: 24,
    },
    targetExam: {
      type: String,
      default: null,
      trim: true,
    },
    examDate: {
      type: Date,
      default: null,
    },
    timezone: {
      type: String,
      default: "Asia/Kolkata",
      trim: true,
    },
    language: {
      type: String,
      default: "en",
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
    versionKey: false, // Disable the __v field
  },
);

// One User can have only one profile, so we create a unique index on the user field
ProfileSchema.index(
  { user: 1 },
  {
    unique: true,
    name: "unique_user_profile",
  },
);

const PROFILE_MODEL_NAME = "Profile";

const Profile = models[PROFILE_MODEL_NAME] ?? model<IProfile>(PROFILE_MODEL_NAME, ProfileSchema);
export default Profile;
