
import listingBaseApi from "./listingBaseApi";

const LISTING_URL="/api/listing"
const listingRoot=listingBaseApi.injectEndpoints({
    endpoints:(builder)=>({
        createListing:builder.mutation({
            query:(data)=>({
                url:`${LISTING_URL}`,
                method:"POST",
                body:data
            }),
            invalidatesTags:["Listing"]
        })
    })
})
const {useCreateListingMutation}=listingRoot