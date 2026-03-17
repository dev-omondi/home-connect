
import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { notFound ,errorHandler} from "./middleware/errorHandler.js";
import connectDb from "./config/dbConnect.js";
import userRouter from "./routes/userRoute.js";
dotenv.config()

const app=express()
const port =process.env.PORT ||4000
//body-parse middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/api/user",userRouter)

//database connection
connectDb()

//error middlewares
app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>{
    console.log("Server is running on port ",port)
})
