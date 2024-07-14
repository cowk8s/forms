import { z } from "zod";

export const ZAccountInput = z.object({
  userId: z.string(),
  type: z.string()
});
