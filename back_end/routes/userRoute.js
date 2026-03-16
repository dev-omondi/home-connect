
import express from "express"
import { registerUser,
         loginUser,
    logoutUser,
    updateUser,
    deleteUser,
    updateRole,
    getUsers
 } from "../controllers/userController"
 import { protect,authorizeUser } from "../middleware/protect"
 const router=express.Router()

 router.route("/register").post(registerUser)
 router.route("/login").post(loginUser)
 router.route("/logout").post(logoutUser)
 router.route("/:id").put(protect,updateUser)

 export default router
