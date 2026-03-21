
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Menu,X} from "lucide-react"
import { Button } from '@/components/ui/button'

const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <nav className=' bg-slate-200 fixed top-0 left-0 w-full shadow-md '>
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
            <Link to={"/login"}>Login</Link>
            <Link>Register</Link>
        </section>
    </div>
    </nav>
   
  )
}

export default Navbar