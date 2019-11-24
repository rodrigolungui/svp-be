import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Mongoose from 'mongoose'
import * as ApiGiver from './api-giver'
import * as ApiNeed from './api-need'
import * as Reports from './reports'

const PORT = process.env.PORT || 3000
const DB_URL = 'mongodb+srv://admin:admin@cluster0-yovce.mongodb.net/svp-api?retryWrites=true&w=majority'
const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.get('/', (req, res) => res.json('OK'))

// Giver routes
server.get('/giver', ApiGiver.getAll)
server.get('/giver/:id', ApiGiver.getOne)
server.patch('/giver/:id', ApiGiver.update)
server.delete('/giver/:id', ApiGiver.remove)
server.post('/giver', ApiGiver.validateData, ApiGiver.save)
server.put('/giver/:id', ApiGiver.validateData, ApiGiver.update)

// Need routes
server.get('/need', ApiNeed.getAll)
server.get('/need/:id', ApiNeed.getOne)
server.patch('/need/:id', ApiNeed.update)
server.put('/need/:id', ApiNeed.update)
server.delete('/need/:id', ApiNeed.remove)
server.post('/need', ApiNeed.save)

// Reports
server.get('/reports/openned', Reports.getOpennedNeeds)

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