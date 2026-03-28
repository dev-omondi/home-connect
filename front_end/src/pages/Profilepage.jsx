
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'

const Profilepage = () => {
    const fileRef=useRef(null)
    const userInfo=useSelector((state)=>state.auth.userInfo)
  return (
    <div className='w-full mt-10'>
        <h1 className='font-bold text-3xl text-center'>Profile</h1>
        <form className='max-w-lg mx-auto flex flex-col gap-3'>
          <input type="file" ref={fileRef} hidden accept='image/*'/>
        <img src={userInfo.img} alt={userInfo.name} className='mt-3 rounded-full h-28 w-28 object-cover self-center bg-amber-200 cursor-pointer'
        onClick={()=>fileRef.current.click()} />
        <input type="text"
        placeholder='name'
        className='bg-slate-200 p-2 border-0 rounded-xl'
          />
          <input type="email"
          className='bg-slate-200 p-2 border-0 rounded-xl'
           />
           <button className='bg-slate-500 text-background p-2 rounded-xl'>UPDATE</button>

           <Button className={"p-3"}>List Property</Button>
           <div>

           </div>
        </form>
    </div>
  )
}

export default Profilepage