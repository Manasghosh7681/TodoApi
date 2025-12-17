const {createTodos,fetchTodo,updateTodo,deleteTodo}=require('../models/todo.model')

const createTodo=(data)=>{
    return createTodos(data)
}
const getTodo=()=>{
    return fetchTodo()
}
const updateTodos=(name,work,email)=>{
    return updateTodo(name,work,email)
}
const deleteTodos=(email)=>{
    return deleteTodo(email)
}
module.exports={createTodo,getTodo,updateTodos,deleteTodos}