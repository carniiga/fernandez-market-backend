import express  from "express";
import  { app, prismaConnect} from "./server/app.js";
import * as dotenv from "dotenv"
import { userRouter } from "./server/routes/user-auth/user.routes.js";
import { productRouter } from "./server/routes/products/products.routes.js";
//usamos dotenv para cargar variables de entorno
dotenv.config()

//seteamos el puerto donde queremos el servidor
const port = process.env.PORT || 3000
//nuestro server va a estar en JSON
app.use(express.json())
//seteamos las rutas que vamos a querer que use nuestra app
app.use("/", userRouter)
app.use("/", productRouter)
//pedimos que el servidor escuche en el puerto 3000 y que haga una conexion con prisma. 
app.listen(port ,() => {
    prismaConnect()
    console.log(`listening on port ${port}`)
    
    
})


