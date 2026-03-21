
import React, { useState } from 'react'
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

const Registerpage = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Join and get releaved with KejaConnect</CardTitle>
          <CardDescription>Enter your details below to create an account</CardDescription>
          <CardAction>Sign Up</CardAction>
        </CardHeader>
        <CardContent>
          <form id='register'>
            <div>
            <Label>name</Label>
            <Input
              type={"text"}
              valu={name}
              onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Registerpage