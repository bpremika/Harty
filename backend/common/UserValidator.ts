import { object, string, number, date, InferType, array, bool } from "yup";

export const userSchema = object({
  username: string().required(),
  email: string().required(),
  password: string().required().min(6),
});

export const loginSchema = object({
  username: string().required(),
  password: string().required().min(6),
});
