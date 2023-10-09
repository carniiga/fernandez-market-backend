import prisma from "../../server/app.js";
import { passwordHash } from "./hash/PasswordHash.js";




export const registerUser = async(user) => {
    const {userName , email ,password} = user
    const passwordHased = await passwordHash(password) 
    const userRegisterDb = await prisma.user.findUnique({
        where : {email : email},
    })
    if(!userRegisterDb){
        await prisma.user.create({
            data : {userName , email , password : passwordHased, rol : userRol(email)}
        })
        return true
        
    }else if (userRegisterDb){
        return false
    }
}

const userRol =  (email) => {
    let rolUser;
    if(email == "fernandezagustin98@hotmail.com" && "silviofernandez@gmail.com" ){
    rolUser = "admin"
    }else {
        rolUser = "user"
    }
    return rolUser
}