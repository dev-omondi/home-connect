
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const Listingpage = () => {
  return (
    <div className='max-w-4xl mx-auto '>
      <h1 className='font-bold text-center text-green-400 mt-6'>List Your Property</h1>
        <form className='mt-6 flex flex-col gap-3 sm:flex flex-wrap '>
         <div>
          <Input
          type="text"
          placeHolder="Apartment Name"
          className="rounded mb-3"
          />
          <Input 
          type={"text"}
          placeHolder="Location"
          className="rounded mb-3"

          />
          <Textarea
          placeHolder="Apartment Description"
          className="rounded mb-3"
          />
         </div>
         <div className='flex gap-4 w-full'>
          <section>
            <select className='rounded p-2 border shadow-md'>
            <option value="" disabled>Select Category</option>
            <option value="rentals">Rentals</option>
            <option value="Hostels">Hostels</option>
          </select>
          <select className='rounded p-2 border shadow-md'>
            <option value="" disabled>Select Type</option>
            <option value="bedsitter">BedSitter</option>
            <option value="1bedroom">1 BedRoom</option>
            <option value="singleroom">Single Room</option>
          </select>
          </section>
          <section>
            <Input
            type={"number"}
            placeHolder="Price"
            className={"rounded mb-3"}
            />
            <Input
            type={"text"}
            placeHolder="Add Images(The first image will beused as  cover photo)"
            />
          </section>
         
         </div>
          <Button className={"w-30"}>List Property</Button>
        </form>
    </div>
  )
}

export default Listingpage