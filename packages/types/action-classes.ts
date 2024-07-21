import { z } from "zod";

export const ZActionClass = z.object({
  id: z.string().cuid2(),
  name: z.string().trim().min(1),
  description: z.string().nullable(),
  key: z.string().trim().min(1).nullable(),
})