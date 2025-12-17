const mysql=require('mysql2')
//mysql2 connect
require('dotenv').config()
const connection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
connection.connect((err)=>{
    if(err){console.log(`database connection failed : ${err.message}`)}
    else{console.log('Database connected')}
})

module.exports=connection