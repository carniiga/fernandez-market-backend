import { PrismaClient } from "@prisma/client";
import express from "express"


export const port = 3000;

export const app = express()

const prisma  = new PrismaClient()

export default prisma

