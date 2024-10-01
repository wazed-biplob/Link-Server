import { Router } from "express";
import { authControllers } from "./authControllers";

const router = Router();

router.post("/login", authControllers.login);

export const authRoutes = router;
