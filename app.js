import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import { getAllData } from "./Controllers/opDataController.js";
import opDataRouter from './Routers/opDataRouter.js'

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

app.use('/opData/v1',opDataRouter );

export default app