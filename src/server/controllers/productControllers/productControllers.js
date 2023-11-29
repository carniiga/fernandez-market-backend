
import {prisma} from "../../app.js";
import { createProd} from "../../../logic/products/createProd.js";
import { updateProd } from "../../../logic/products/updateProd.js";
import { productDelete } from "../../../logic/products/deleteProd.js";


//este controller trae todos los productos de la db
export const getAllProdsCtrl = async (req ,res) => {
    const getAllProdcts = await prisma.product.findMany()
    res.send(getAllProdcts)
};
//este controller trae el producto por id  mediante el params.
export const getProductById = async(req , res) => {
    const {productId}= req.params;
    // se busca en la db el producto por id que sea igual al id ingresado por el params
    const productFoundId = await prisma.product.findUnique({
        where: {
            id : productId
        },
    })
    res.send(productFoundId).status(200)
};
//este controller se encarga de crear el producto en la db. 
export const createProdCtrl = async (req , res) => {
    const product = req.body;
    const create = await createProd(product)
    res.send(create)
};
//este controller se encarga de actualizar el producto . 
export const updateProductCtrl = async(req, res) => {
    //para actualizar el producto se necesita el id del producto y  lo que queramos actualizar de ese producto.
    const {id}= req.params;
    const productInput= req.body;
    //llamamos a updateProduct que se encarga de actualizar el producto mediante prisma. le pasamos  lo que queremos actualizar del producto  y el id.
    
    const productUpdate = await updateProd(productInput , id )
     res.send(productUpdate).status(200)
     //enviamos el producto actualizado
};

//este controller se encarga de eliminar el producto de la db. necesitamos el id del producto para borrarlo. Se lo pasamos por params
export const deleteProductCtrl = async (req , res ) => {  
    const {productId} = req.params
    //  llamados a productDelete que se encarga de buscar el producto en la db y lo elimina.Si no lo encuentra es por que ya ha sido eliminado previamente.
    const productToDelete = await productDelete(productId)
    
    if(productToDelete){
        res.status(200).send("el Producto ha sido eliminado correctamente.")
    }else{
        res.status(400).send("el producto posiblemente ya ha sido eliminado.")
    }
}