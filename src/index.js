import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Mongoose from 'mongoose'
import * as ApiGiver from './api-giver'

const PORT = process.env.PORT || 3000
const DB_URL = 'mongodb+srv://admin:admin@cluster0-yovce.mongodb.net/svp-api?retryWrites=true&w=majority'
const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => res.json('OK'))
server.get('/giver', ApiGiver.getAll)
server.get('/giver/:id', ApiGiver.getOne)
server.patch('/giver/:id', ApiGiver.update)
server.delete('/giver/:id', ApiGiver.remove)
server.post('/giver', ApiGiver.validateData, ApiGiver.save)
server.put('/giver/:id', ApiGiver.validateData, ApiGiver.update)

server.listen(PORT, () => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`)

  Mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }).then(() => {
    console.log('Mongo connected.')
  }).catch((reason) => {
    console.log('Mongo not connected: ', reason)
  })
})