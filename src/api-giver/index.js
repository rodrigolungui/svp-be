import GiverSchema from './schema'
import { model } from 'mongoose'

const Giver = model('Giver', GiverSchema, 'givers')

const save = async (req, res) => {
  const giver = new Giver({ ...req.body })

  const result = await giver.save()
  res.status(200).send(result)
}

const update = async (req, res) => {
  const { id } = req.params
  const data = req.body

  const result = await Giver.findOneAndUpdate({ _id: id }, data).exec()
  res.json(result)
}

const remove = async (req, res) => {
  const { id } = req.params

  const result = await Giver.findOneAndRemove({ _id: id }).exec()
  res.json(result)
}

const getOne = async (req, res) => {
  const { id } = req.params
  const result = await Giver.findById(id).exec()
  res.json(result)
}

const getAll = async (req, res) => {
  const data = await Giver.find().exec()
  res.json(data)
}

const validateData = (req, res, next) => {
  const { name, document, birthday } = req.body
  const isValidName = name && typeof name === 'string'
  const isValidDocument = document && typeof document === 'string'
  const isValidBirthday = birthday && typeof birthday === 'string'

  if (isValidName && isValidDocument && isValidBirthday) {
    next()
    return
  }

  res.status(500).send('Invalid data');
}

export {
  getAll,
  getOne,
  save,
  update,
  remove,
  validateData
}