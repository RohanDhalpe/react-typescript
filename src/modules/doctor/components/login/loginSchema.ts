import { string, object, InferType } from "yup";
export const emailSchema = string()
  .trim()
  .max(350, "Character exceeded")
  .email("Please enter a valid email address")
  .required("Email address is required");

export const loginSchema = object({
  email: emailSchema,
  password: string().required("password is requires"),
});

export type LoginFormData = InferType<typeof loginSchema>;
