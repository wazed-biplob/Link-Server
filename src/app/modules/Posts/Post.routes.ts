import { Router } from "express";
import { postController } from "./Post.conroller";

const router = Router();

router.post("/create-post", postController.createPost);

export const postRoutes = router;
