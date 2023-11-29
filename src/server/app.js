import { PrismaClient } from "@prisma/client";
import express from "express"
import cors from "cors"



export const app = express()

//seteamos para que otro host pueda acceder al servidor. 
app.use(cors({
     origin: '*'
 }));
 
//iniciamos un prismaClient para poder realizar un crud 
export const prisma = new PrismaClient();

export const prismaConnect = () => {
     const connect = new PrismaClient()
     return connect
}

