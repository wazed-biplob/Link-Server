import { Router } from "express";
import { postRoutes } from "./modules/Posts/Post.routes";
import { userRoutes } from "./modules/Users/UserRoutes";

export const router = Router();

router.use("/user", userRoutes);
router.use("/post", postRoutes);
