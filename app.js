import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import { getAllData } from "./Controllers/opDataController.js";
import opDataRouter from './Routers/opDataRouter.js'
import authRouter from './Routers/authrouter.js'

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increase JSON payload limit
app.use(express.urlencoded({ limit: "50mb", extended: true })); // For form-encoded data
app.use(bodyParser.json());
app.use(express.json())

app.use('/opData/v1',opDataRouter,authRouter );

export default app