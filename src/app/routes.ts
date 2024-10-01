import { Router } from "express";
import { postRoutes } from "./modules/Posts/Post.routes";
import { userRoutes } from "./modules/Users/UserRoutes";
import { authRoutes } from "./modules/Auth/authRoutes";

export const router = Router();

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/auth", authRoutes);
