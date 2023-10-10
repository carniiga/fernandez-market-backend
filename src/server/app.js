import {  PrismaClient } from "@prisma/client";
import express from "express"


export const port = 3000;

export const app = express()


export const prismaConnect = () => {
    const connect = new PrismaClient();
    return connect
}

