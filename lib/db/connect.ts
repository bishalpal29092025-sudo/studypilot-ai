import mongoose from "mongoose";

import { env } from "@/config/env";

export interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached =
  global.mongooseCache ??
  {
    conn: null,
    promise: null,
  };

global.mongooseCache = cached;

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(env.MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;

    if (process.env.NODE_ENV === "development") {
      console.log("✅ MongoDB connected");
    }

    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}