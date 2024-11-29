import { Request, Response } from "express";
import { catchAsync } from "../../utils/functions";
import { postServices } from "./Post.services";

const createPost = catchAsync(async (req: Request, res: Response) => {
  const result = await postServices.createPost(req.body);
  res.json({
    success: true,
    message: "New post created successfully",
    data: result,
  });
});

const getPost = catchAsync(async (req: Request, res: Response) => {
  const result = await postServices.getPost();
  res.json({
    success: true,
    message: "New post retrieved successfully",
    data: result,
  });
});

export const postController = {
  createPost,
  getPost,
};