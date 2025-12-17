const connection = require('../config/dbConfig')

const createTodos = async (data) => {
    const { name, email, work, createTime } = data
    const sql = 'INSERT INTO todo (name,email,work) VALUES (?,?,?)'
    const res = await connection.promise().query(sql, [name, email, work])
    return `InsertID ${res[0].insertId}`;
}

const fetchTodo=async ()=>{
    const sql='SELECT * FROM todo'
    const result=await connection.promise().query(sql)
    return result[0];
    
}

const updateTodo=async(name,work,email)=>{
    const sql='UPDATE todo  SET name=?,work=? WHERE email=? '
    const result=await connection.promise().query(sql,[name,work,email])
    return result[0]
}
const deleteTodo=async(email)=>{
    const sql='DELETE FROM todo WHERE email=?'
    const res=await connection.promise().query(sql,[email])
    console.log(res)
    return res[0]
}

module.exports={createTodos,fetchTodo,updateTodo,deleteTodo};