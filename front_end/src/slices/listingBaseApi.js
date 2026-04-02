
import{createApi,fetchBaseQuery}from "@reduxjs/toolkit/query/react"

const baseQuery=fetchBaseQuery({
    baseUrl:"",
    credentials:"include"
})
const listingBaseApi=createApi({
    baseQuery,
    tagTypes:["Listing"],
    endpoints:(builder)=>({})
})
export default listingBaseApi