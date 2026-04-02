
import mongoose, { Schema } from "mongoose";

const apartmentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imgUrls:{
        type:[String],
        required:true
    },
    type:{
        type:String,
        enum:["bedsitter","1bedroom","singleroom"],
        required:true
    },
    category:{
        type:String,
        enum:["rentals","hostels"],
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Listings=mongoose.model("Listings",apartmentSchema)
export default Listings