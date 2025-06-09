const Book=require('../models/Book')

const getallBooks=async(req,res)=>{
   try{
        const allBooks=await Book.find({})
        
        if(allBooks){
            res.status(201).json({
                success:true,
                message:"All books retrieved",
                data:allBooks
            })
        }else{
            res.status(400).json({
                success:false,
                message:"Not getting any book"
            })
        }
   }catch(e){
            console.log("Error while getting all books",e.message)
            res.status(500).json({
              success:false,
              message:"Something went wrong while getting all books",
              error:e.message,
            })
   }

}

const getsingleBook=async(req,res)=>{
      try{
          const {id}=req.params
          const singleBook = await Book.findById(id);

           if(singleBook){
            res.status(201).json({
                success:true,
                message:"Single book retrieved",
                data:singleBook,
            })
        }else{
            res.status(400).json({
                success:false,
                message:"Not getting single book"
            })
        }
      }catch(e){
            console.log("Error while getting single book",e.message)
            res.status(500).json({
              success:false,
              message:"Something went wrong while getting single book",
              error:e.message,
            })
      }
}

const addBook=async(req,res)=>{
   try{
        const newBookData=req.body
        const newBookCreated=await Book.create(newBookData)

        if(newBookCreated){
            res.status(201).json({
                success:true,
                message:'Book added',
                data:newBookCreated,
            })
        }else{
            res.status(400).json({
                success:false,
                message:'Book not added'
            })
        }
   }catch(e){
          console.log("Error in adding book",e.message)
          res.status(500).json({
              success:false,
              message:"Something went wrong while adding book",
              error:e.message,
          })
   }
}

const updateBook=async(req,res)=>{
       try{
       const updatedbookData=req.body
       const getcurrentbookID=req.params.id
       const updateBook = await Book.findByIdAndUpdate(getcurrentbookID,updatedbookData,{
         new:true,
       }); 

        if(updateBook){
            res.status(201).json({
                success:true,
                message:"book updated",
                data:updateBook,
            })
        }else{
            res.status(400).json({
                success:false,
                message:"Book not updated"
            })
        }
     }catch(e){
            console.log("Error while updating book",e.message)
            res.status(500).json({
              success:false,
              message:"Something went wrong while updating book",
              error:e.message,
            })
     }
}


const deleteBook=async(req,res)=>{
     try{
       const {id}=req.params
       const deletedBook = await Book.findByIdAndDelete(id); 

        if(deletedBook){
            res.status(201).json({
                success:true,
                message:"book deleted",
                data:deleteBook
            })
        }else{
            res.status(400).json({
                success:false,
                message:"Book not deleted"
            })
        }
     }catch(e){
            console.log("Error while deleting book",e.message)
            res.status(500).json({
              success:false,
              message:"Something went wrong while deleting book",
              error:e.message,
            })
     }
}

module.exports={getallBooks,getsingleBook,updateBook,deleteBook,addBook}