const express=require('express')
const router=express.Router();
const {createTodos,getTodos,updateTodo,deleteTodo}=require('../controller/todocontroller')
const authMiddleware=require('../middleware/authmiddleware')

const {validation,updateValidation}=require('../middleware/middleware')
router.post('/createTodo', authMiddleware, validation,createTodos)
router.get('/getTodo',authMiddleware,getTodos)
router.put('/update',authMiddleware,updateValidation,updateTodo)
router.delete('/delete',authMiddleware,updateValidation,deleteTodo)


module.exports=router