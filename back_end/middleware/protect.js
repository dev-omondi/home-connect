
import asyncHandler from "express-async-handler";
import Users from "../model/userModel.js";
import jwt from "jsonwebtoken"

const protect=asyncHandler(async(req,res,next)=>{

    const token=req.cookies.jwt
    if (!token) {
       res.status(401)
       throw new Error("Unauthorised,no token was found") 
    }
    try {
        const decoded=jwt.verify(token,process.env.ACCESS_TOKEN)
        const user=await Users.findById(decoded.userId).select("-password")
        if(!user){
            res.status(404)
            throw new Error("User not found")
        }
        req.user=user
        next()
    } catch (error) {
        res.status(401)
        throw new Error("Unauthorised, invalid or expired token");
        
    }

})
const authorizeUser=(...allowedRoles)=>{
    return (req,res,next)=>{
        if (!req.user||!allowedRoles.includes(req.user.role)) {
            res.status(403)
            throw new Error("Forbidden,you not allowed to access this route")
        }
        next()
    }
}

export {protect,authorizeUser}