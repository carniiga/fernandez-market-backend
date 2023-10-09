import { findUserAndLogin } from "../../../logic/users/login.js";
import { registerUser } from "../../../logic/users/register.js";
import { genToken } from "../../../logic/users/token/userToken.js";

export const registerCtrl = async (req , res) => {
   const user = req.body;
   const userToRegister = await registerUser(user)
   if(userToRegister){
      res.status(200).send("usuario creado exitosamente")
   }else{
      res.status(400).send("este usuario ya ha sido creado , inicie sesion.")
   }
}
export const loginCtrl = async (req , res) => {
   const {email , password}= req.body
   const findUser = await findUserAndLogin(email,password)
   if(!findUser){
      res.status(400).send("usuario y contraseña incorrectos")
   }else{
      const token = await genToken(findUser)
      
      res.send({token : token })
   }
   
}