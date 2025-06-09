const mongoose=require("mongoose")

const BookSchema=new mongoose.Schema({
     title:{
        type:"String",
        required:[true,"Book should have a title"],
        trim:true,
        maxLength:[100,"Book title should not be more than 100 characters"]
     },
     author:{
        type:"String",
        required:[true,"Author name is required"],
        trim:true,
     },
     year:{
        type:Number,
        required:[true,"Publication yeaar is required"],
        min:[1000,"Year must be more than 1000 years"],
        max:[new Date().getFullYear(),'Year cannot be in the future'],
     },
     createdAt:{
        type:Date,
        default:Date().now
     },
})

module.exports=mongoose.model("Book",BookSchema)