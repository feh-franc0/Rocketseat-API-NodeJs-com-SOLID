import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Fernando Franco',
    email: 'fernando@prisma.com.br',
  },
})

// ORM - Object Relational Mapper
