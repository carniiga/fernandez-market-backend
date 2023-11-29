import {prisma} from "../../server/app.js";
import { passwordHash } from "./hash/PasswordHash.js";



//esta funcion se encarga de registrar el usuario en la db.
export const registerUser = async(user) => {
    const {userName , email ,password} = user
    //se hashea la contraseña ingresada para que sea dificil de decifrar. 
    const passwordHased = await passwordHash(password) 
    //Antes de crear el usuario se verifica que ese usuario no exista en la db. si no existe se puede registrar. Si se encuentra se le pide que inicie sesión
    const userRegisterDb = await prisma.user.findUnique({
        where : {email : email},
    })
    //si no existe en la db, se puede crear el usuario en la db
    if(!userRegisterDb){
        await prisma.user.create({
            data : {userName , email , password : passwordHased, rol : userRol(email)}
        })
        return true
        
    }else if (userRegisterDb){
        return false
    }
}
//esta funcion se encarga de brindar un rol al usuario. Si el usuario no tiene el email que se especifica abajo, todos son usuario comun, Menos los 2 email que se especifica tienen usuario admin para poder realizar el crud.
const userRol =  (email) => {
    let rolUser;
    if(email == "fernandezagustin98@hotmail.com" && "silviofernandez@gmail.com" ){
    rolUser = "admin"
    }else {
        rolUser = "user"
    }
    return rolUser
}