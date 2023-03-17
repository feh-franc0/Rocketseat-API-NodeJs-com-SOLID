import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})

// prisma.user.create({
//   data: {
//     name: 'Fernando Franco',
//     email: 'fernando@prisma.com.br',
//   },
// })
