
import rooApi from "./authRootApi";

const USER_URL="/api/user"
const baseApi=rooApi.injectEndpoints({
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/register`,
                method:"POST",
                body:data
            }),
            invalidatesTags:["Users"]
        }),
        login:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/login`,
                method:"POST",
                body:data
            }),
            invalidatesTags:["Users"]
        }),
        updateuser:builder.mutation({
            query:({id,...data})=>({
                url:`${USER_URL}/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["Users"]
        }),
        deleteUser:builder.mutation({
            query:({id})=>({
                url:`${USER_URL}/${id}`,
                method:"POST"
            }),
            invalidatesTags:["Users"]
        }),
        getUsers:builder.query({
            query:()=>`${USER_URL}`,
            providesTags:["Users"]
        }),
        logout:builder.mutation({
            query:()=>({
                url:`${USER_URL}/logout`,
                method:"POST"
            }),
            invalidatesTags:["Users"]
        })
    })
})

export const{useRegisterMutation,
    useDeleteUserMutation,
    useGetUsersQuery,
    useLoginMutation,
    useLogoutMutation,
    useUpdateuserMutation
}=baseApi