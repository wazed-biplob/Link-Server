import { Router } from "express";
import { userController } from "./UserControllers";

const router = Router();

router.get("/all-users", userController.getAllUser);

router.post("/create-user", userController.createUser);

export const userRoutes = router;
