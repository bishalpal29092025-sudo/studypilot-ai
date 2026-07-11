"use server";

import { signUpSchema } from "@/lib/validations/auth";
import { connectToDatabase } from "@/lib/db/connect";
import { hashPassword } from "@/lib/auth/password";
import Profile from "@/models/Profile";
import User from "@/models/User";

/**
 * Register a new user.
 */
export async function signUp(data: unknown) {
  const validatedFields = signUpSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  await connectToDatabase();

  const existingUser = await User.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists.",
    };
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Create user
  const user = await User.create({
    email: email.toLowerCase(),
    password: hashedPassword,
    provider: "credentials",
    role: "student",
    emailVerified: false,
  });

  await Profile.create({
    user: user._id,
    name,

    avatar: null,
    bio: null,

    learningStyle: "visual",
    studyLevel: "beginner",

    dailyStudyHours: 1,

    targetExam: null,
    examDate: null,

    timezone: "Asia/Kolkata",
    language: "en",
  });

  return {
    success: true,
    message: "User created successfully.",
    userId: user._id.toString(),
  };
}
