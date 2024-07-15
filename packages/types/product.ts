import { z } from "zod";

export const ZProductConfigChannel = z.enum(["link", "app", "website"]).nullable();

export const ZProductConfig = z.object({
  channel: ZProductConfigChannel
})

export type TProductConfig = z.infer<typeof ZProductConfig>;

export const ZProduct = z.object({
  id: z.string().cuid2(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().trim().min(1, { message: "Product name cannot be empty" }),
})

export type TProduct = z.infer<typeof ZProduct>;