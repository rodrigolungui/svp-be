import { Schema } from 'mongoose'

const GiverSchema = new Schema({
  createdAt: Date,
  name: String,
  document: String,
  birthday: String
})

export default GiverSchema