import express from "express"
import { deleteAllDataFromDb, getAllData, insertDatatoDb } from "../Controllers/opDataController.js"

const router = express.Router()

router.route('/opData').get(getAllData)
router.route('/insertInvoiceDetails').post(insertDatatoDb)
router.route('/DeleteInvoiceDetails').post(deleteAllDataFromDb)



export default router