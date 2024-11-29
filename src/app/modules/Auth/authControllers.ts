import { Request, Response } from "express";
import { catchAsync } from "../../utils/functions";
import { authServices } from "./authServices";

const login = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body);
  const result = await authServices.login(req.body);
  res.json({
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});

export const authControllers = {
  login,
};
