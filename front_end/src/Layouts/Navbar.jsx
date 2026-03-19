
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' bg-slate-200 shadow-md'>
    <div className='flex items-center justify-between max-w-6xl px-3 py-4 mx-auto'>
        <h2 className='text-green-400 font-bold'>KEJAConnect</h2>
        <section className='flex gap-4'>
             <Link>Home</Link>
            <Link>About</Link>
            <Link>Map</Link>
            <Link>Properties</Link>
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