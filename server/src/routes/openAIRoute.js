import express from 'express'
import { getAwnser } from '../controllers/openIAController.js'

const openAIRouter = express.Router()

openAIRouter.route('/').get(getAwnser)
  
export default openAIRouter 