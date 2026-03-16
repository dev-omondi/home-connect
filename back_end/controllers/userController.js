
import asyncHandler from "express-async-handler";
import Users from "../model/userModel.js";
import generateToken from "../config/generateToken.js";

//@description-----------------------------------register the user
//@api-----------------------------------------------POST/api/user/register
//@access-------------------------------------------------public
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body

    if(!name||!email||!password){
        res.status(400)
        throw new Error("All the fields are mandatory"); 
    }
    const userExists=await Users.findOne({email})
    if(userExists){
        res.status(409)
        throw new Error("User already exist,kindly use another email or login");
    }
    const user=await Users.create({
        name,
        email,
        password,
        role:"user"
    })
    generateToken(res,user._id)
    res.status(201).json({
        name:user.name,
        email:user.email,
        role:user.role,
        _id:user._id
    })

})

//@descriiption---------------------------------login the user
//@api--------------------------------------------POST/api/user/login
//@access-----------------------------------------public
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if (!email||!password) {
        res.status(401)
        throw new Error("All the fields are mandatory")
    }
    const user=await Users.findOne(email)
    if (!user) {
        res.status(404)
        throw new Error("User not found")
    }
    const passwordMatch=await user.matchPassword(password)
    if (!passwordMatch) {
        res.status(402)
        throw new Error("Credentials dont match,confirm and try again")
    }
    generateToken(res,user._id)
    res.status(200).json({
        name:user.name,
        email:user.email,
        role:user.role,
        _id:user._id
    })
})

//@description-----------------------------------------logout user
//@api-------------------------------------------------POST/api/user/logout
//access------------------------------------------------public
const logoutUser=asyncHandler(async(req,res)=>{
    res.cookie("jwt","",{
        httpOnly:true,
        secure:process.env.NODE_ENV!=="production",
        sameSite:"strict",
        expires:new Date(0)
    })
    res.status(200).json({
        message:"You have been logged out"
    })
})

//@description---------------------------------------------update user details
//@api-------------------------------------------------------PUT/api/user/:id
//access------------------------------------------------------private
const updateUser=asyncHandler(async(req,res)=>{
    const user=await Users.findById(req.user._id)
    if(!user){
        res.status(404)
        throw new Error("User not found");
    }
    user.name=req.body.name||user.name
    user.email=req.body.email||user.email
    if(req.body.password){
        user.password=req.body.password
    }
    const updatedUser=await user.save()
    res.status(200).json({
        name:updatedUser.name,
        email:updatedUser.email,
        role:updatedUser.role,
        _id:updatedUser._id
    })
})