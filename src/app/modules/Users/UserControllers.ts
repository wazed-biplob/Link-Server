import { Request, Response } from "express";
import { userServices } from "./UserServices";
import { catchAsync } from "../../utils/functions";

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.getAllUser();
  res.json({
    success: true,
    message: "All Users retrieved successfully",
    data: result,
  });
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUser(req.body);
  res.json({
    success: true,
    message: "New user created successfully",
    data: result,
  });
});

const postProfilePicture = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.postProfilePicture(req.body);
  res.json({
    success: true,
    message: "New user created successfully",
    data: result,
  });
});

export const userController = {
  getAllUser,
  createUser,
  postProfilePicture,
};
