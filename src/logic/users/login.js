
import {prisma} from "../../server/app.js";
import { passwordDecode } from "./hash/PasswordHash.js";

//esta funcion se encarga de buscar el usuario en la db y logearlo si la informacion ingresada es correcta
export const findUserAndLogin = async(email,password) => {
    //se busca en la db el usuario por email.
    const userFound = await prisma.user.findUnique({
        where : {email : email}
    })
   // si se encuentra se verifica las contraseñas, la ingresada y la que está en la db hasheada.
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