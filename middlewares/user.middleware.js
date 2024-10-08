require('dotenv').config()
const jwt=require('jsonwebtoken')

exports.authenticateUser=(req,res,next)=>{
    try{
        const token=req.header('authorization').split(' ')[1]
        if(token===undefined){
            return res.status(498).json({access:false,mesage:"Invalid token"})
        }
        jwt.verify(token,process.env.secretKey,(err,data)=>{
            if(err) return res.status(401).json({message:"Unauthorized Token"})
            else next()
        })
    }
    catch(err){
        console.log(err)
        return res.status(401).json({message:"Unauthorized"})
    }
}