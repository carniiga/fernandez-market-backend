import {prisma} from "../../server/app.js"


// esta funcion se encarga de borrar el producto en la db. para borrar el producto necesitamos el id del producto. 
export const productDelete = async(id) => {
    // primero verificamos el producto se encuentra en la db. si se encuentra  lo borramos. 
    const deleteProd = await prisma.product.findUnique({
        where :{id : id}
    })
    if(deleteProd){
        await prisma.product.delete({
            where : {id :id}
        })
        return true
    }else{
        return false
    }
}