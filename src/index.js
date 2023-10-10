import express  from "express";
import  { port ,  app, prismaConnect } from "./server/app.js";

import { userRouter } from "./server/routes/user-auth/user.routes.js";
import { productRouter } from "./server/routes/products/products.routes.js";

app.use(express.json())
app.use("/", userRouter)
app.use("/", productRouter)
app.listen(port ,() => {
    prismaConnect()
    console.log(`listening on port ${port}`)
    
    
})


