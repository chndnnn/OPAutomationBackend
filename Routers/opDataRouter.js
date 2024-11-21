import express from "express"
import { getAllData } from "../Controllers/opDataController.js"

const router = express.Router()

router.route('/opData').get(getAllData)

export default router