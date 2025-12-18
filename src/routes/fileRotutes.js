const express=require('express')
const filecontroller=require('../controller/fileController')
const upload=require('../middleware/uploadMiddleware')
const router=express.Router()
router.post('/upload',upload.single('file'),filecontroller)
module.exports=router