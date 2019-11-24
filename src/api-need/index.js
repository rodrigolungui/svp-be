import NeedSchema from './schema'
import { model } from 'mongoose'

const Need = model('Need', NeedSchema, 'needs')

const save = async (req, res) => {
  const need = new Need({ ...req.body })

  const result = await need.save()
  res.status(200).send(result)
}

const update = async (req, res) => {
  const { id } = req.params
  const data = req.body

  const result = await Need.findOneAndUpdate({ _id: id }, data).exec()
  res.json(result)
}

const remove = async (req, res) => {
  const { id } = req.params

  const result = await Need.findOneAndRemove({ _id: id }).exec()
  res.json(result)
}

const getOne = async (req, res) => {
  const { id } = req.params
  const result = await Need.findById(id).exec()
  res.json(result)
}

const getAll = async (req, res) => {
  const data = await Need.find().exec()
  res.json(data)
}

export {
  getAll,
  getOne,
  save,
  update,
  remove
}
