import {prismaConnect} from "../../server/app.js"

export const updateProd = async (product , id ) => {

    const productUpdate = await prismaConnect().product.update({
        where : {id : id},
        data  : product
    })
   return productUpdate
}

