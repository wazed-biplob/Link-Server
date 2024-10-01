import { Request, Response } from "express";
import { catchAsync } from "../../utils/functions";
import { postServices } from "./Post.services";

const createPost = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await postServices.createPost(req.body);
  res.json({
    success: true,
    message: "New post created successfully",
    data: result,
  });
});

export const postController = {
  createPost,
};
