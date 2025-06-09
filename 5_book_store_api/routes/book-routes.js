const express=require("express")
const {getallBooks,getsingleBook,updateBook,addBook,deleteBook}=require('../controllers/book-controller')
const router=express.Router()

//creating routes 
router.get('/get',getallBooks)
router.get('/get/:id',getsingleBook)
router.post('/add',addBook)
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook)

module.exports=router