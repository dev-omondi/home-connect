
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery=fetchBaseQuery({baseUrl:""})

const rooApi=createApi({
    baseQuery,
    tagTypes:["Users"],
    endpoints:(builder)=>({})
})
export default rooApi