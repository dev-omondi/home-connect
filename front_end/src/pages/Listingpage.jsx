
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import app from '@/firebase'
import {getStorage,ref,getDownloadURL,uploadBytesResumable} from "firebase/storage"
import { useState } from 'react'

const Listingpage = () => {
  const[files,setFiles]=useState([])
  const[formData,setFormData]=useState({
    imgUrl:[],
    price:"",
    name:"",
    location:"",
    description:"",
    type:"",
    categotry:"",
    
  })
  const[imgError,setImgError]=useState(null)

  const storeFile=(file)=>{
    return new Promise((resolve,reject)=>{
      const storage=getStorage(app)
      const filePath=new Date().getTime()+file.name
      const storageRef=ref(storage,filePath)
      const uploadTask=uploadBytesResumable(storageRef,file)

      uploadTask.on("state_changed",
        (snapshot)=>{
          const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
          console.log(`The Upload is ${progress}% done`)
        },
        (error)=>{
          console.log(error)
          reject(error)
        },
        async()=>{
          try {
            const downloadUrl=await getDownloadURL(uploadTask.snapshot.ref)
            resolve(downloadUrl)
          } catch (error) {
            reject(error)
          }
        }
      )
    })
  }
  const handleImageUpload=()=>{
    const promises=[]
    const maxSize=2*1024*1024
    const totalFiles=files.length+formData.imgUrl.length
    setImgError(null)
    if (files.length===0) {
      setImgError("Select atleast 1 image")
      return
    } else if(totalFiles>6){
      setImgError("You can only upload upto 6 images")
      return
    }else{
      for(let file of files){
        if(file.size>maxSize){
          setImgError("Every file size should be less than 2mbs")
          return
        }
        promises.push(storeFile(file))
      }
      Promise.all(promises).then((urls)=>{
        setFormData((prev)=>({
          ...prev,
          imgUrl:[...(prev.imgUrl||[]),...urls]
        }))
      }).catch((error)=>{
        console.log(error)
        setImgError("Upload Failed try again")
      })
    }
    
  }

  const deleteImage=(index)=>{
    setFormData({
      ...formData,
      imgUrl:formData.imgUrl.filter((_,i)=>i!==index)
    })
  }
   const handleInputChange=(e)=>{
  const {name,value,checked,type}=e.target
  setFormData((prev)=>({
    ...prev,
    [name]:type==="checkbox"?checked:type==="number"?Number(value):value
  }))
 }
  return (
    <div className='max-w-4xl mx-auto '>
      <h1 className='font-bold text-center text-green-400 mt-6'>List Your Property</h1>
        <form className='mt-6 flex flex-col gap-6 sm:flex-row  '>
         <div>
          <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Apartment Name"
          className="rounded mb-3"
          />
          <Input 
          type={"text"}
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="Location"
          className="rounded mb-3"

          />
          <Textarea
          placeholder="Apartment Description"
          name="description"
          value={formData.description}
          type="text"
          onChange={handleInputChange}
          className="rounded mb-3"
          />
           <section className='flex flex-row gap-6 justify-center sm:justify-between p-3'>
            <select className='rounded p-2 border shadow-md'
            name="categotry"
            value={formData.categotry}
            onChange={handleInputChange}
            >
            <option value="" disabled>Select Category</option>
            <option value="rentals">Rentals</option>
            <option value="Hostels">Hostels</option>
          </select>
          <select className='rounded p-1 border shadow-md'
          name='type'
          value={formData.type}
          onChange={handleInputChange}
          >
            <option value="" disabled>Select Type</option>
            <option value="bedsitter">BedSitter</option>
            <option value="1bedroom">1 BedRoom</option>
            <option value="singleroom">Single Room</option>
          </select>
          </section>
           <Input
            type={"number"}
            min={10}
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className={"rounded mb-3 text-center"}
            />
         </div>  
         <div className='flex flex-col gap-3 w-full'>
          <section className='w-full flex item gap-4 items-end'>
            <div>
            <p>Images:The first image will be used as cover</p>
            <Input
            type={"file"}
            mutiple
            onChange={handleImageUpload}
            placeholder="Add Images"
            />
            </div>
            <button className='px-3 py-2 rounded bg-green-300 hover:bg-green-500 cursor-pointer hover:transition-all duration-200 text-sm'>Upload</button>
          </section>
            {
              formData.imgUrl.length>0&&
             formData.imgUrl.map((url,index)=>(
              <div className='flex items-center gap-6'key={index}>
                <img src={url} alt={`Uploaded-${index}`} 
                className='h-6 w-6 object-cover rounded shadow-2xl '
                />
                <button className='bg-gray-50 cursor-pointer capitalize text-red-400 hover:text-red-600 transition-colors duration-200'
                type='button'
                onClick={()=>deleteImage(index)}
                >Delete</button>
              </div>
             ))
            }
          <Button className={"w-40 cursor-pointer rounded"}>List Property</Button>
         </div>
           
        </form>
    </div>
  )
}

export default Listingpage