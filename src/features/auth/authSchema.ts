import { z } from "zod";

export const loginSchema = z.object({
   email: z
      .email({ error: "Please enter a valid email address" })
      .refine((val) => val.length >= 4, { error: "Email is required" }),
   password: z.string().min(6, { error: "Password must be at least 6 characters" }),
});

export const SignupSchema = z.object({
   name: z.string().min(2, { error: "Name is required" }),
   email: z
      .email({ error: "Please enter a valid email address" })
      .refine((val) => val.length >= 4, { error: "Email is required" }),
   password: z.string().min(6, { error: "Password must be at least 6 characters" }),
});


// We don't write the interface manually. We let Zod infer it.
// This ensures your Type and your Rules are ALWAYS in sync.
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof SignupSchema>;