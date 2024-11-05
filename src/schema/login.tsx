import { z } from "zod";

export const LoginValidation = z.object({
  username: z.string().min(1, { message: "Username required" }),
  password: z.string().min(1, { message: "Password required" }),
});

export type LoginType = z.infer<typeof LoginValidation>;
