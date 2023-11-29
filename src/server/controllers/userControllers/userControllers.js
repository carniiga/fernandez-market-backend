import { findUserAndLogin } from "../../../logic/users/login.js";
import { registerUser } from "../../../logic/users/register.js";
import { genToken } from "../../../logic/users/token/userToken.js";
import { prisma } from "../../app.js";
import { transporter } from "../../../logic/users/userSendEmail.js";
import { passwordHash } from "../../../logic/users/hash/PasswordHash.js";
//este controlador , se encarga de registrar al usuario en la db 
export const registerCtrl = async (req , res) => {
   const user = req.body;
   //registerUser se encarga de cargar el usuario con prisma. 
   const userToRegister = await registerUser(user)
   //si se registra, mandamos un mensaje que se creo exitosamente. Si no lo registra es por que este usuario ya habria sido creado. 
   if(userToRegister){
      res.status(200).send("usuario creado exitosamente")
   }else{
      res.status(400).send("este usuario ya ha sido creado , inicie sesion.")
   }
}
//este controlador se encarga de logear al usuario y brindar un token para que el frontend sea utilizado para realizar el crud si es usuario admin. 
export const loginCtrl = async (req , res) => {
   const {email , password}= req.body
   //verificamos que el usuario se encuentre en la db y que la password haya  sido la  registrada.Si es asi,nos brinda el token para realizar el crud 
   const findUser = await findUserAndLogin(email,password)
   if(!findUser){
      res.status(400).send("usuario y contraseña incorrectos")
   }else{
      const token = await genToken(findUser)
      
      res.send({token : token })
   }
   
}
// este controller se encarga de eliminar el usuario si es que se desea. 
export const userDeleteCtrl = async (req , res) => {
   const {id} = req.params;
   const userFind = await prisma.user.findMany({
      where : {id : id}
   })

   if(!userFind.length){
      res.send("este usuario no se encuentra").status(200)
   }
   else if(userFind){
      await  prisma.user.delete({
         where : {id : id}
      })
      res.send("usuario eliminado con exito").status(200)
   }
  
  
}

//este controller se encarga de buscar en la db el email en la db y mandar un email con una direccion url (en este caso local) para actualizar la contraseña. mediante el url se envia el id del usuario que se va a observar en el email deseado.
export const forgotPassSendEmailCtrl = async (req , res) => {
   const {email} = req.body
   const findEmail = await  prisma.user.findFirst({
      where : {email : email}
   })

   try {
      const send = await transporter.sendMail({
         from: '"forgot-password👻" <carniigafernandez@gmail.com>', // sender address
         to: email, // list of receivers
         subject: "recuperar contraseña ", // Subject line
         html: `<p>hola! vimos que perdiste la contraseña y queres recuperar la cuenta .Ingresá  acá para recuperar la contraseña.  localhost:3000/restore-pass/${findEmail?.id}</p>`, // html body
      })
      res.send(`email enviado a ${email}`)
   } catch (error) {
      return res.send(error)
   }
}

// este controller se encarga de actualizar la contraseña y hashearla para que sea dificil de decifrar. 
export const restorePassCtrl = async(req , res) => {
   const {userId} = req.params;
   const {password} = req.body;
   //se llama a la funcion passwordHass para hashear la contraseña.
   const passwordHashed = await passwordHash(password);
   //se guarda el valor en una constante 
   const newPassword = passwordHashed;
   // en la db actualizamos la contraseña  ya hasheada
   const updatePass = await prisma.user.updateMany({
      where : {id : userId},
      data : {password : newPassword}
   })
   res.send("contraseña actualizada exitosamente, por favor inicie sesión")
}