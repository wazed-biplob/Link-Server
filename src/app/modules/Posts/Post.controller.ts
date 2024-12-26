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
  const { postId } = req.params;
  const result = await postServices.getPost(postId);
  res.json({
    success: true,
    message: "Post retrieved succesfully",
    data: result,
  });
});

const updatePost = catchAsync(async (req: Request, res: Response) => {
  const { postId } = req.params;
  const result = await postServices.updatePost(postId, req?.body);
  res.json({
    success: true,
    message: "Post updated succesfully",
    data: result,
  });
});

const getPosts = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const result = await postServices.getPosts(userId);
  if (result.length === 0) {
    res.json({
      success: false,
      message: "No Posts",
    });
  } else {
    res.json({
      success: true,
      message: "New posts retrieved successfully",
      data: result,
    });
  }
});

const getAllPost = catchAsync(async (req: Request, res: Response) => {
  const result = await postServices.getAllPost();
  if (result.length === 0) {
    res.json({
      success: false,
      message: "No Posts",
    });
  } else {
    res.json({
      success: true,
      message: "All posts retrieved successfully",
      data: result,
    });
  }
});

export const postController = {
  createPost,
  getPosts,
  getAllPost,
  getPost,
  updatePost,
};
