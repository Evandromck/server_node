import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('✔🎉HTTP server running on http://localhoste:3333')
  })