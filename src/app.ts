import fastify from "fastify";
import { PrismaClient } from "generated/prisma/index.js";

export const app = fastify();

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    name: "Laerte Cordeiro",
    email: "cordeiro.laerte@gmail.com",
  },
});
