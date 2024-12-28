import { Router } from "express";
import { userRoutes } from "./modules/Users/UserRoutes";
import { authRoutes } from "./modules/Auth/authRoutes";
import { postRoutes } from "./modules/Posts/Post.routes";

export const router = Router();

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/auth", authRoutes);
