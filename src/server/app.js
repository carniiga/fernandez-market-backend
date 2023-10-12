import { PrismaClient } from "@prisma/client";
import express from "express"




export const app = express()


export const prisma = new PrismaClient();

export const prismaConnect = () => {
     const connect = PrismaClient = new PrismaClient()
     return connect
}

