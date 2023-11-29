import { Router } from "express";
import * as productCtrl from "../../controllers/productControllers/productControllers.js"
import { userMiddleWare } from "../../../logic/userMiddleware/userMiddleware.js";

// aca estan todos los endpoints de nuestra app, metodo GET , PUT , DELETE
export const  productRouter = Router();
productRouter.get("/products", productCtrl.getAllProdsCtrl)
productRouter.get("/product/:productId" , productCtrl.getProductById)
//aplicamos un middleware para verificar que solo el usuario admin pueden borrar , crear o modificar un producto. 
productRouter.use(userMiddleWare)
productRouter.post("/product/create", productCtrl.createProdCtrl)

productRouter.put("/product/update/:id", productCtrl.updateProductCtrl)
productRouter.delete("/delete/:productId", productCtrl.deleteProductCtrl)
