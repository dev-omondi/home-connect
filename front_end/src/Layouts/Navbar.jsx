
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Menu,X} from "lucide-react"
import { Button } from '@/components/ui/button'

const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <nav className=' bg-slate-200 shadow-md'>
    <div className='flex items-center justify-between max-w-6xl px-3 py-4 mx-auto'>
        <h2 className='text-green-400 font-bold'>KEJAConnect</h2>
        <section>
            <div className='hidden md:flex gap-4'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Map</Link>
            <Link>Properties</Link>
            </div>
            <Button className={"md:hidden"}
            onClick={()=>setOpen(!open)}
            >
            {open?<Menu/ >:<X/>}
            </Button>
            {
            open&&(
               <div className='md:hidden flex flex-col gap-4'>
                 <Link>Home</Link>
                <Link>About</Link>
                <Link>Map</Link>
                <Link>Properties</Link>
               </div> 
            )
            }

        </section>
        <section className='flex gap-4'> 
            <Link>Login</Link>
            <Link>Register</Link>
        </section>
    </div>
    </nav>
   
  )
}

export default Navbar