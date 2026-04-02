
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/slices/authSlice.js"
import rooApi from "./slices/authRootApi";
import listingBaseApi from "./slices/listingBaseApi";
const store=configureStore({
    reducer:{
        auth:authReducer,
        [rooApi.reducerPath]:rooApi.reducer,
        [listingBaseApi.reducerPath]:listingBaseApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(rooApi.middleware)
    .concat(listingBaseApi.middleware),
    devTools:true
})
export default store