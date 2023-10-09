import { Router } from "express";
import * as productCtrl from "../../controllers/productControllers/productControllers.js"
import { userMiddleWare } from "../../../logic/userMiddleware/userMiddleware.js";

export const  productRouter = Router();
productRouter.get("/products", productCtrl.getAllProdsCtrl)
productRouter.get("/product/:productId" , productCtrl.getProductById)
productRouter.use(userMiddleWare)
productRouter.post("/product/create", productCtrl.createProdCtrl)

productRouter.put("/product/update/:id", productCtrl.updateProductCtrl)
productRouter.delete("/delete/:productId", productCtrl.deleteProductCtrl)
