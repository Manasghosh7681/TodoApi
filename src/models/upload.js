const connection=require('../config/dbConfig')
const uploadFile=async (original_name, file_name, file_path, mime_type, file_size)=>{
    const sql = `
      INSERT INTO uploads 
      (original_name, file_name, file_path, mime_type, file_size)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [res]=await connection.promise().query(sql,[original_name, file_name, file_path, mime_type, file_size])
    return res;
}
module.exports=uploadFile;