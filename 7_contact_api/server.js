import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import connecToDB from './database/db.js'
import userRouter from './routes/user.js'
import contactRouter from './routes/contact.js'

const app=express()
const PORT=process.env.PORT

connecToDB()

//TO parse json and url data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes
app.use('/api/users',userRouter)
app.use('/api/contact',contactRouter)

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
})