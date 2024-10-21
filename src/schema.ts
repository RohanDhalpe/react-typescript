import { string, object, InferType } from "yup";

export const DoctorSchema = object({
  fullName: string()
    .trim()
    .max(350, "Name character exceed")
    .required("Name is required"),
  profileUrl: string().required("profile URL is required"),
  email: string()
    .trim()
    .max(350, "Email character exceed")
    .required("Email is required"),
  password: string()
    .max(15, "Password must be less than or equal to 15 chars")
    .min(4, "Password must be greater than 4 chars")
    .required("password must required"),
  country: string()
    .trim()
    .max(350, "Country character exceed")
    .required("Country is required"),
  mobileNumber: string()
    .required("Mobile number is required")
    .transform((_, val) => (Number.isNaN(val) ? undefined : val)),
});

export type PatientContactDetailsFormData = InferType<typeof DoctorSchema>;
