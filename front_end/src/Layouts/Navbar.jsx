
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Menu,X} from "lucide-react"
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCredentils } from '@/slices/authSlice'
import { useLogoutMutation } from '@/slices/baseUserApi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    const [open,setOpen]=useState(false)

    const navigate=useNavigate()
    const [logout,{isLoading}]=useLogoutMutation()
    const dispatch=useDispatch()
    const userInfo=useSelector((state)=>state.auth.userInfo)

    const getInitials=(name)=>name?name.charAt(0).toUpperCase():"U"

    const handleLogout=async()=>{
        console.log("Logout clicked")

                try {
                  await logout().unwrap()
                  dispatch(clearCredentils())
                  navigate("/")
                  console.log("log out successfully")
                } catch (error) {
                  console.log(error?.data?.message)
                }
              }

  return (
    <nav className=' bg-slate-200 sticky top-0 left-0 w-full shadow-md '>
    <div className='flex items-center justify-between max-w-6xl px-3 py-4 mx-auto '>
        <h2 className='text-green-400 font-bold'>KEJAConnect</h2>
        <section>
            <div className='hidden md:flex gap-5 font-semibold text-green-500'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Map</Link>
            <Link>Properties</Link>
            <Link>Dashboard</Link>
            </div>
            <Button className={"md:hidden"}
            onClick={()=>setOpen(!open)}
            >
            {open?<X size={60}/>:<Menu size={60}/>}
            </Button>
            {
            open&&(
               <div className='md:hidden font-semibold fixed left-0 h-screen w-full bg-slate-600/50 backdrop-blur-2xl flex items-center justify-center flex-col gap-6 '>
                 <Link>Home</Link>
                <Link>About</Link>
                <Link>Map</Link>
                <Link>Properties</Link>
                <Link>Dashboard</Link>
               </div> 
            )
            }

        </section>
        <section className='flex gap-4'> 
           {userInfo?(
            <div className='p-3'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="">
                    <Avatar>
                     {
                      userInfo?.img?(
                        <AvatarImage src={userInfo.img} alt={userInfo.name}/>
                      ):(
                        <AvatarFallback className={"text-green-600 font-bold"} >
                          {
                            getInitials(userInfo.name)
                          }
                        </AvatarFallback>
                      )
                     }
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className={"mr-4 w-20 flex justify-center rounded"}>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel className={"text-green-600 font-semibold"}>My Account</DropdownMenuLabel>
                      <DropdownMenuItem asChild className={"text-green-400 font-semibold cursor-pointer"}>
                        <Link to={"/profile"}>Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className={"text-green-400 font-semibold cursor-pointer"}>
                         <Link to={"/settings"}>Settings</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <button
                        type='button'
                        className={"text-green-400 font-semibold cursor-pointer"}
                      onClick={handleLogout} 
                        >
                          Logout
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
           ):(
            <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
            </>
           )}
        </section>
    </div>
    </nav>
   
  )
}

export default Navbar