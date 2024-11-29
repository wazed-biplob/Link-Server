import { Router } from "express";
import { postController } from "./Post.controller";

const router = Router();

router.post("/create-post", postController.createPost);
router.get("/post-wall", postController.getPost);

export const postRoutes = router;
