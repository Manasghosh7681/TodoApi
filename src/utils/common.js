const jwt=require('jsonwebtoken')
const Response=(res,status,message,data)=>{
    res.status(status).json({
        success:true,
        message:message,
        data:data
    })
}

const generateAccesToken=(payload)=>{
    return(
        jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn:'900s'
        })
    )
}

const generateRefreshToken=(payload)=>{
    return(
        jwt.sign(payload,process.env.REFRESH_TOKEN,{
            expiresIn:'15d'
        })
    )
}

const verifyAccessToken=(token)=>{
    return(
        jwt.verify(token,process.env.SECRET_KEY)
    )
}

const verifyRefreshToken=(token)=>{
    return(
        jwt.verify(token,process.env.REFRESH_TOKEN)
    )
}

module.exports={Response,generateAccesToken,generateRefreshToken,verifyAccessToken,verifyRefreshToken}