import { Request, Response } from "express";

import { userServices } from "./UserServices";

const getAllUser = async (req: Request, res: Response) => {
  const result = await userServices.getAllUser();
  res.json({
    success: true,
    message: "All Users retrieved successfully",
    data: result,
  });
};

const createUser = async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await userServices.createUser(req.body);
  res.json({
    success: true,
    message: "New user created successfully",
    data: result,
  });
};

export const userController = {
  getAllUser,
  createUser,
};
