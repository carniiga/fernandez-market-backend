import {prismaConnect} from "../../server/app.js"

export const productDelete = async(id) => {
    const deleteProd = await prismaConnect().product.findUnique({
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