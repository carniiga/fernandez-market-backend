import express  from "express";
import prisma, { port , app } from "./server/app.js";
import { userRouter } from "./server/routes/user-auth/user.routes.js";
import { productRouter } from "./server/routes/products/products.routes.js";

app.use(express.json())
app.use("/", userRouter)
app.use("/", productRouter)
app.listen(port ,() => {
    prisma.$connect()
    console.log(`listening on port ${port}`)
    
    
})


