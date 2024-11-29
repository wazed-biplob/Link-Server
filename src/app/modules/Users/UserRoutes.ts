import { Router } from "express";
import { userController } from "./UserControllers";

const router = Router();

router.get("/all-users", userController.getAllUser);

router.post("/create-user", userController.createUser);
router.patch("/post-profile-picture", userController.postProfilePicture);

export const userRoutes = router;
