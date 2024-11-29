import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";
import httpStatus from "http-status";

export const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(409).json({
    success: false,
    message: err.message,
    error: err,
  });
});

app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API not found!",
    error: "API not found.",
  });
});
