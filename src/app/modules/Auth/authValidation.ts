import { z } from "zod";

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email must be provided!" }),
    password: z.string({ required_error: "Password must be provided!" }),
  }),
});

export const authValidations = {
  loginValidationSchema,
};
