import { Router } from "express";
import * as userCtrl from "../../controllers/userControllers/userControllers.js"
export const userRouter = Router();

userRouter.post("/register",userCtrl.registerCtrl)
userRouter.post("/login", userCtrl.loginCtrl)