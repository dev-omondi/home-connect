
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import{useNavigate} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux'
import { useLoginMutation } from '@/slices/baseUserApi'
import { setCredentials } from '@/slices/authSlice'

const Loginpage = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const userInfo=useSelector((state)=>state.auth.userInfo)
  const [login,{isLoading}]=useLoginMutation()

  useEffect(()=>{
    if (userInfo) {
      navigate("/")
    }
  },[userInfo,navigate])

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res=await login({email,password}).unwrap()
      dispatch(setCredentials({...res}))
      navigate("/")
    } catch (err) {
      console.log(err?.data?.message||err.error)
    }
  }
  return (
    <div className='w-full max-w-2xl mx-auto mt-8 '>
      <Card className={"w-full rounded shadow-lg ring-0" }>
      <CardHeader>
        <CardTitle >get into your kejaConnect accout and enjoy our services</CardTitle>
        <CardDescription>Enter your details below to login</CardDescription>
        <CardAction>Sign In</CardAction>
      </CardHeader>
      <CardContent>
        <form className='flex flex-col gap-y-4' id='login' onSubmit={handleSubmit}>
          <div >
            <Label>email</Label>
            <Input
            type={"email"}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label>password</Label>
            <Input
            type={"password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
        type="submit"
        form="login"
        className={"mx-auto py-2 px-3 rounded hover:bg-green-700 cursor-pointer transition-all duration-200"}
        >Sign In</Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Loginpage