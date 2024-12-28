import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";
import httpStatus from "http-status";
import mongoose from "mongoose";
import config from "./app/config";

const app: Application = express();

app.use(express.json());
const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "DELETE", "UPDATE"],
  })
);

app.use("/api/v1/db/db-status", (req: Request, res) => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 2) {
    res.json({ status: "pending", message: "Connecting to Database..." });
  } else if (connectionState === 1) {
    res.json({
      status: "success",
      message: "Successfully connected.",
    });
  } else {
    res.json({ status: "error", message: "Database is not connected" });
  }
});

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

async function main() {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => console.log("MongoDB connected."));
    app.listen(config.port, () => {
      console.log(`app is running at ${config.port}`);
    });
  } catch (e) {
    console.log(`Error : `, e);
  }
}

main();

export default app;
