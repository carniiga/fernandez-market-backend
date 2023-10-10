
import {prisma} from "../../server/app.js";
import { passwordDecode } from "./hash/PasswordHash.js";
import { genToken } from "./token/userToken.js";


export const findUserAndLogin = async(email,password) => {
    const userFound = await prisma.user.findUnique({
        where : {email : email}
    })
   
    if(userFound){
        const compare = await passwordDecode(password , userFound.password)
        const rol = userFound.rol;
        if(compare){
           return {email,password , rol}
        }
    }else if(!userFound){
        return false
    }
}