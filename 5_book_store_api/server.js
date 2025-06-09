require("dotenv").config()
const express=require("express")
const connecToDB=require("./database/db")
const bookRoutes=require('./routes/book-routes')

const app=express()
const PORT=process.env.PORT || 3000

//connect to database
connecToDB()

//middleware ->express.json()
app.use(express.json())


//creating routes
app.use('/api/books',bookRoutes)


app.listen(PORT,()=>{
     console.log(`Server is running at PORT ${PORT}`)
})