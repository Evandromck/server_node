import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient() //conexão com PrismaClient 

app.get('/users', async () => { //adicionar o async para utilizar o await posteriomente 
  const users = await prisma.user.findMany()// uma const users para recerber a variavel prisma ja adicionado o PrismaClient e definir a busca todos os user do banco "user findMany"
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('✔🎉HTTP server running on http://localhoste:3333')
  })
