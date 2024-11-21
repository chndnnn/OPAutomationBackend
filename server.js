import app from "./app.js";
import {dbConnection} from './db.js'

app.listen(3001,()=>{
    console.log("server started at port 3000")
    dbConnection()
})