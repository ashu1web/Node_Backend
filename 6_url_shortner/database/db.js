import mongoose from "mongoose"

export const connecToDB=async()=>{
    try{
       await mongoose.connect(process.env.DATABASE_URL)
       console.log("Mongo db is connected!!!")
    }catch(e){
       console.log("Database error--->",e)
       process.exit(1)
    }
}
