import { Router } from "express";
import { authControllers } from "./authControllers";
import { validateRequest } from "../../middlewares/validateRequest";
import { authValidations } from "./authValidation";

const router = Router();

router.post(
  "/login",
  // validateRequest(authValidations.loginValidationSchema),
  authControllers.login
);

export const authRoutes = router;
