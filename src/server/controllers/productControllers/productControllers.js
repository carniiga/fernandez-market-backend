
import prisma from "../../app.js";
import { createProd} from "../../../logic/products/createProd.js";
import { updateProd } from "../../../logic/products/updateProd.js";
import { productDelete } from "../../../logic/products/deleteProd.js";

export const getAllProdsCtrl = async (req ,res) => {
    const getAllProdcts = await prisma.product.findMany()
    res.send(getAllProdcts)
};
export const getProductById = async(req , res) => {
    const {productId}= req.params;
  
    const productFoundId = await prisma.product.findUnique({
        where: {
            id : productId
        },
    })
    res.status(200).send(productFoundId)
};
export const createProdCtrl = async (req , res) => {
    const product = req.body;
    const create = await createProd(product)
    res.send(create)
};

export const updateProductCtrl = async(req, res) => {
    const {id}= req.params;
    const productInput= req.body;
    if(productInput.price) {
       const priceFixed =  await updateProd(productInput , id)
       res.status(200).send(priceFixed)
        return
    }
    const productUpdate = await updateProd(productInput , id )
    res.status(200).send(productUpdate)
};

export const deleteProductCtrl = async (req , res ) => {  
    const {productId} = req.params
    const productToDelete = await productDelete(productId)
    if(productToDelete){
        res.status(200).send("el Producto ha sido eliminado correctamente.")
    }else{
        res.status(400).send("el producto posiblemente ya ha sido eliminado.")
    }
}