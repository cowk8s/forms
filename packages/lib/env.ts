import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EMAIL_AUTH_DISABLED: z.enum(["1", "0"]).optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    GOOGLE_SHEETS_CLIENT_ID: z.string().optional(),
    GOOGLE_SHEETS_CLIENT_SECRET: z.string().optional(),
    GOOGLE_SHEETS_REDIRECT_URL: z.string().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    REDIS_HTTP_URL: z.string().optional(),
  },

  client: {

  },
  runtimeEnv: {
    EMAIL_AUTH_DISABLED: process.env.EMAIL_AUTH_DISABLED,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_SHEETS_CLIENT_ID: process.env.GOOGLE_SHEETS_CLIENT_ID,
    GOOGLE_SHEETS_CLIENT_SECRET: process.env.GOOGLE_SHEETS_CLIENT_SECRET,
    GOOGLE_SHEETS_REDIRECT_URL: process.env.GOOGLE_SHEETS_REDIRECT_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    REDIS_HTTP_URL: process.env.REDIS_HTTP_URL,
  }
})