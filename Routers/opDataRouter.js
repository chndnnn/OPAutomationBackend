import express from "express"
import { getAllData, insertDatatoDb } from "../Controllers/opDataController.js"

const router = express.Router()

router.route('/opData').get(getAllData)
router.route('/insertInvoiceDetails').post(insertDatatoDb)

export default router