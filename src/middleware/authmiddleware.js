const jwt=require('jsonwebtoken');
const { verifyAccessToken } = require('../utils/common');

const authmiddleware=(req,res,next)=>{
    const authheader=req.headers.authorization;
    if(!authheader || !authheader.startsWith('Bearer')){
        return(
            res.status(401).json({
                success:false,
                message:'Authorization header missing'
            })
        )
    }
    const token=authheader.split(' ')[1]
    try{
        const decode=verifyAccessToken(token)
        req.user=decode
        next()

    }catch(err){
        res.status(401).json({
            success:false,
            message:err.message
        })
    }
}


module.exports=authmiddleware;