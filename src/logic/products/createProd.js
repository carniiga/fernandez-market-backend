import {prismaConnect} from "../../server/app.js"


export const createProd = async (product) => {
 const create = await prismaConnect().product.create({data : product})
 return create
}

