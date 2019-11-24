import { Schema } from 'mongoose'

const NeedSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: String,
    enum: ['cancelled', 'pending', 'supplied'],
    default: 'pending'
  }
}, {
  timestamps: true
})

export default NeedSchema