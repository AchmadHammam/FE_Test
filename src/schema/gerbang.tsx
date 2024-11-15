import { z } from "zod";

export const GerbangValidation = z.object({
  ruas: z.string().min(1, { message: "Ruas required" }),
  gerbang: z.string().min(1, { message: "Gerbang required" }),
});

export type GerbangType = z.infer<typeof GerbangValidation>;
