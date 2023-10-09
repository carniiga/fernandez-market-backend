import { decodeToken } from "../users/token/userToken.js";



export const userMiddleWare = async(req ,res, next) => {
    const token = req.headers.authorization;
    const verifyRol = await decodeToken(token)
    if(verifyRol === "admin"){
        next()
    }else{
        res.send("usted no está autorizado para realizar esta accion.").status(400)
    }

}