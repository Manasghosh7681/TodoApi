const login=require('../models/authmodel')
const authService=(email)=>{
    return login(email)
}
module.exports=authService;