import express  from "express";
import  { app } from "./server/app.js";
import * as dotenv from "dotenv"
import { prismaConnect } from "./server/app.js";
import { userRouter } from "./server/routes/user-auth/user.routes.js";
import { productRouter } from "./server/routes/products/products.routes.js";

dotenv.config()

app.use(express.json())
app.use("/", userRouter)
app.use("/", productRouter)
app.listen(process.env.PORT ,() => {
    prismaConnect()
    console.log(`listening on port ${process.env.PORT}`)
    
    
})


