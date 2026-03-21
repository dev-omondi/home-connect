
import React, { useState,useEffect } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { useRegisterMutation } from '@/slices/baseUserApi'
import { setCredentials } from '@/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

const Registerpage = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const userInfor=useSelector((state)=>state.auth.userInfor)
  const [register,{isLoading}]=useRegisterMutation()

  useEffect(()=>{
    if (userInfor) {
      navigate("/")
    }
  },[userInfor,navigate])

  const hundeSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await register({name,email,password}).unwrap()
      dispatch(setCredentials({...res}))
      console.log("User created successfully")
    } catch (err) {
      console.log(err?.data?.message||err.error)
    }
  }
  return (
    <div className='w-full max-w-2xl mx-auto mt-8 px-2'>
      <Card  className="w-full bg-green-100 rounded mx-4 shadow-xl ring-0">
        <CardHeader>
          <CardTitle>Join and get releaved with KejaConnect</CardTitle>
          <CardDescription>Enter your details below to create an account</CardDescription>
          <CardAction>Sign Up</CardAction>
        </CardHeader>
        <CardContent>
          <form id='register' className='flex flex-col gap-y-3 '
          onSubmit={hundeSubmit}
          >
            <div className='flex flex-col gap-2'>
            <Label>name</Label>
            <Input
            className={"focus:ring-0 focus-border-0"}
              type={"text"}
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            </div>
            <div className='flex flex-col gap-2 '>
              <Label>email</Label>
              <Input
              className={"outline-none focus:outline-none"}
                type={"email"}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <Label>password</Label>
              <Input
              className={"outline-none focus:outline-none"}
              type={"password"}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
         <Button className={"mx-auto rounded py-2 px-3 hover:cursor-pointer bg-green-400 transition duration-200"}>Sign Up</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Registerpage