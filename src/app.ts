import express, { Application, Request, Response } from "express";

export const app: Application = express();

const port: number = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send(`The server is running at port ${port}`);
});
