const connection=require('../config/dbConfig')
const findUser=async(email)=>{
    console.log(email)
    const sql='SELECT * FROM students WHERE email=?'
    const [response]=await connection.promise().query(sql,[email])
    console.log(response)
    return response[0]
}
module.exports=findUser;
