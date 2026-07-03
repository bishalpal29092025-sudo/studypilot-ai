import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  NEXT_PUBLIC_APP_NAME: z.string(),

  NEXT_PUBLIC_APP_URL: z.string().url(),

  MONGODB_URI: z.string(),

  AUTH_SECRET: z.string(),

  AUTH_URL: z.string().url(),

  AI_PROVIDER: z.enum(["openai", "anthropic", "grok"]),

  OPENAI_API_KEY: z.string().optional(),

  ANTHROPIC_API_KEY: z.string().optional(),

  GROK_API_KEY: z.string().optional(),

  OPENAI_MODEL: z.string().optional(),

  ANTHROPIC_MODEL: z.string().optional(),

  GROK_MODEL: z.string().optional(),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,

  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,

  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

  MONGODB_URI: process.env.MONGODB_URI,

  AUTH_SECRET: process.env.AUTH_SECRET,

  AUTH_URL: process.env.AUTH_URL,

  AI_PROVIDER: process.env.AI_PROVIDER,

  OPENAI_API_KEY: process.env.OPENAI_API_KEY,

  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,

  GROK_API_KEY: process.env.GROK_API_KEY,

  OPENAI_MODEL: process.env.OPENAI_MODEL,

  ANTHROPIC_MODEL: process.env.ANTHROPIC_MODEL,

  GROK_MODEL: process.env.GROK_MODEL,
});
