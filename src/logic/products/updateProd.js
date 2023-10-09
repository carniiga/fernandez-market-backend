import prisma from "../../server/app.js"

export const updateProd = async (product , id ) => {

    const productUpdate = await prisma.product.update({
        where : {id : id},
        data  : product
    })
   return productUpdate
}

