import { z } from "zod";

export const LoginValidation = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginType = z.infer<typeof LoginValidation>;
