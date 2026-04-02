
import asyncHandler from "express-async-handler"
import Listings from "../model/listingModel.js"

//@description....................................create or add listing
//@api---------------------------------------------POST/api/apartment
//@access-----------------------------------------private

const createListing=asyncHandler(async(req ,res)=>{
    const {name,location,description,type,category,price,imgUrls}=req.body

    if (!name||!location||!description||!type||!category||!price||!imgUrls) {
        res.status(400)
        throw new Error("all the fields are mandatory");
        
    }
    const apartmentExist=await Listings.findOne({name,location})
    if (apartmentExist) {
        res.status(409)
        throw new  Error("Apartment with this name already exist")
    }
    const apartment=await Listings.create({
        name,location,
        description,type,category,
        price,imgUrls,
        owner:req.user._id
    })
    res.status(201)
    .json(apartment)
})

export {createListing}