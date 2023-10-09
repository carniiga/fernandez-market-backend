import prisma from "../../server/app.js"


export const createProd = async (product) => {
 const create = await prisma.product.create({data : product})
 return create
}

