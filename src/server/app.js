import { PrismaClient } from "@prisma/client";
import express from "express"
import cors from "cors"



export const app = express()

app.use(cors({
     origin: '*'
 }));
 
export const prisma = new PrismaClient();

export const prismaConnect = () => {
     const connect = new PrismaClient()
     return connect
}

