import {prisma} from "../../server/app.js"

//aca creamos el producto en la db .
export const createProd = async (product) => {
 const create = await prisma.product.create({data : product})
 return create
}

