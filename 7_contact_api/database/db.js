import mongoose from "mongoose";


const connecToDB=async()=>{
    try{
          await mongoose.connect(process.env.DATABASE_URL)
          console.log("Connected to mogoDB")
    }catch(e){
        console.log(" mongoose connectivity error-->",e)
        process.exit(1)
    }
}

export default connecToDB