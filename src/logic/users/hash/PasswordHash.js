import bcryptjs from "bcryptjs"

export const passwordHash =  async(password) => {
    const salt = bcryptjs.genSaltSync(10)
    const hashedPassword = await  bcryptjs.hash(password,salt)
    return hashedPassword
}
export const passwordDecode = async(passwordInput , password) =>    {
    const verifyPass =  await bcryptjs.compare(passwordInput , password)
    return verifyPass
    
}
