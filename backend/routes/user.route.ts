import { Router } from "express";
import { register } from "ts-node";
import {
  createUser,
  login,
  logout,
  userBio,
} from "../controllers/user.controller";

export const userRouter = Router();
userRouter.post("/login", login);
userRouter.post("/register", createUser);
userRouter.post("/logout", logout);
userRouter.get("/me", userBio);
