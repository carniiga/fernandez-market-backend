import bcryptjs from "bcryptjs"

//esta funcion se encarga de encriptar el password para que sea dificil decifrarlo. 
export const passwordHash =  async(password) => {
    const salt = bcryptjs.genSaltSync(10)
    const hashedPassword = await  bcryptjs.hash(password,salt)
    return hashedPassword
}
//esta funcion se encarga de verificar si la contraseña ingresada es la misma  de la que esta guardada en la db. Pero la contraseña de la db esta  hasheada, es decir una contraseña codificada para que no sea facil decifrarla.Si es verdadera este usuario se podrá logear, y si no no va a poder.
export const passwordDecode = async(passwordInput , password) =>    {
    const verifyPass =  await bcryptjs.compare(passwordInput , password)
    return verifyPass
    
}
