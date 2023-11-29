import  Jwt  from "jsonwebtoken"


//esta funcion se encarga de generar el token si el usuario logra logearse, para poder realizar crud si es un usuario admin.
export const  genToken = async(email, password , rol) => {
    const token = Jwt.sign({email,password,rol},process.env.SECRET_KEY)
    return token
}


//esta funcion se encarga de decodificar el token y averiguar datos del usuario. userName , Password, email y asi obtener el rol . 
export const decodeToken = async (token) => {
    
    const tokenClean = token.slice(7)
    const decoded =  Jwt.verify(tokenClean,process.env.SECRET_KEY)
    const rol = decoded.email.rol
    return rol
    

    
}
