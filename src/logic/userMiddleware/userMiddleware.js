import { decodeToken } from "../users/token/userToken.js";

//esta funcion es un middleware para comprobar que el usuario logeado sea el admin, para poder habilitarlo a que pueda realizar el crud. 

export const userMiddleWare = async(req ,res, next) => {
    //le pasamos el token por el header para verificar que usuario es, si es admin o usuario comun.
    const token = req.headers.authorization;
    // llamamos a la funcion decodeToken para decodificar el token y averiguar que usuario es, si admin o usuario comun.
    const verifyRol = await decodeToken(token)
    //si el rol del usuario es admin, puede realizar el crud. si no no se lo deja avanzar.
    if(verifyRol === "admin"){
        next()
    }else{
        res.send("usted no está autorizado para realizar esta accion.").status(400)
    }

}