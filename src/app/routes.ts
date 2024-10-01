import { Router } from "express";
import { UserRoutes } from "./modules/Users/UserRoutes";

export const router = Router();

router.use("/", UserRoutes);
