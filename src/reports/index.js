import NeedSchema from '../api-need/schema'
import { model } from 'mongoose'

const Need = model('Need', NeedSchema, 'needs')

const getOpennedNeeds = async (req, res) => {
	const result = await Need.find({
		status: {
			$eq: 'pending'
		}
	}).exec()

	res.json(result)
}

export {
	getOpennedNeeds
}