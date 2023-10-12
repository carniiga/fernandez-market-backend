import  Jwt  from "jsonwebtoken"

export const  genToken = async(email, password , rol) => {
    const token = Jwt.sign({email,password,rol},process.env.SECRET_KEY)
    return token
}

export const decodeToken = async (token) => {
    
    const tokenClean = token.slice(7)
    const decoded =  Jwt.verify(tokenClean,process.env.SECRET_KEY)
    const rol = decoded.email.rol
    return rol
    
    
    
}
