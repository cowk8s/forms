import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EMAIL_AUTH_DISABLED: z.enum(["1", "0"]).optional()
  },

  client: {

  },
  runtimeEnv: {
    EMAIL_AUTH_DISABLED: process.env.EMAIL_AUTH_DISABLED
  }
})