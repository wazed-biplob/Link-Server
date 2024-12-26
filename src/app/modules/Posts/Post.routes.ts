import { Router } from "express";
import { postController } from "./Post.controller";

const router = Router();

router.post("/create-post", postController.createPost);
router.post("/update-post/:postId", postController.updatePost);
router.get("/post-wall/:userId", postController.getPosts);
router.get("/post-wall", postController.getAllPost);
router.get("/get-post/:postId", postController.getPost);
export const postRoutes = router;
