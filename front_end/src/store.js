
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/slices/authSlice.js"
import rooApi from "./slices/authRootApi";

const store=configureStore({
    reducer:{
        auth:authReducer,
        [rooApi.reducerPath]:rooApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(rooApi.middleware),
    devTools:true
})
export default store