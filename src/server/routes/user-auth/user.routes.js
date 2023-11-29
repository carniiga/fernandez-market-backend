import { Router } from "express";
import * as userCtrl from "../../controllers/userControllers/userControllers.js"
export const userRouter = Router();

// aca estan todas los endpoints de nuestra app, metodo GET , PUT , DELETE
userRouter.post("/register",userCtrl.registerCtrl)
userRouter.post("/login", userCtrl.loginCtrl)
userRouter.post("/deleteUser/:id", userCtrl.userDeleteCtrl)
userRouter.post("/forgot-password-sendEmail", userCtrl.forgotPassSendEmailCtrl)
userRouter.post("/restore-pass/:userId",userCtrl.restorePassCtrl)