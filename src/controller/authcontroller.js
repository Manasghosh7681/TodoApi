const bcrypt = require('bcryptjs')
const { Response, generateAccesToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } = require('../utils/common')
const authservice = require('../Services/authService')
const login = async(req, res, next) => {
    try {
        const { email, pass } = req.body
        
        const user=await authservice(email)
        console.log(user,"user")
        if(!user ){
           return res.status(401).json({
                success:false,
                message:'User not found'
            })
        }
        const isValidPassword=true
        // const isValidPassword=await bcrypt.compare(pass,user.password)
        console.log("password",isValidPassword)
        if(!isValidPassword){
           return res.status(401).json({
                success:false,
                message:'Invalid password'
            })
        }
        const payload={email,pass}
        // console.log(payload,"payload")
        const authtoken=generateAccesToken(payload)
        const refreshtoken=generateRefreshToken(payload)
         Response(res, 200, 'Login successful', {
            authtoken,
            refreshtoken
        })
    } catch (err) {
        next(err)
    }
}

const refreshToken=async(req,res,next)=>{
    try{
        const refreshtoken=req.body()
        if(!refreshtoken){
             return res.status(401).json({
                success:false,
                message:'Refresh token required'
            })
        }
        const decode=verifyRefreshToken(refreshToken)
        const newToken=generateAccesToken({email:decode.email})
        Response(res,201,'Token refreshed',{
            accessToken:newToken
        })
    }catch(err){
        next(err)
    }
}

module.exports={login,refreshToken}