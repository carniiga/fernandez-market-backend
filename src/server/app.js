import { PrismaClient } from "@prisma/client";
import express from "express"




export const app = express()

let prismaClient;
export const prisma = new PrismaClient();

export const prismaConnect = () => {
    prismaClient = new PrismaClient
}

