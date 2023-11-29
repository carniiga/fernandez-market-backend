import {prisma} from "../../server/app.js"
//esta funcion se encarga de actualizar el producto.
//para actualizar el producto se pide el id , y lo que querramos actualizar del producto. 
export const updateProd = async (product , id ) => {
    //se actualiza el producto si la id ingresada es igual al producto en la db. y le pasamos la data que queremos actualizar del producto.
    const productUpdate = await prisma.product.update({
        where : {id : id},
        data  : product
    })
   return productUpdate
}

