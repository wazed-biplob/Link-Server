import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";
export const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.json({
    error: error,
  });
});
