import express  from "express";
import  { app } from "./server/app.js";
import * as dotenv from "dotenv"

import { userRouter } from "./server/routes/user-auth/user.routes.js";
import { productRouter } from "./server/routes/products/products.routes.js";

dotenv.config()

app.use(express.json())
app.use("/", userRouter)
app.use("/", productRouter)
app.listen(process.env.PORT ,() => {
    console.log(`listening on port ${process.env.PORT}`)
    
    
})


