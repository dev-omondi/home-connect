
import express from "express"
import { createListing } from "../controllers/listingController.js"

const router=express.Router()

router.route("/").post(createListing)

export default router