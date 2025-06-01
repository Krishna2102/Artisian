import React from 'react'

const Addresses = () => {
  return (
    <div className='flex gap-14'>
    <div className='h-[300px] w-[300px] bg-gray-200 rounded-lg text-center'>
        <div className=' text-xl'>KRISHNA KUMAR</div>
      <div className='mt-7 ml-3 w-[260px]'>
        NITK, Mangaluru
        Surathkal, Karnataka 575025
        India
        Phone: 08847859244
      </div>

<div className='mt-28 space-x-6'>
<button type="button" className="bg-green-500 rounded-lg h-9 w-16">Edit </button>
<button type="button" className="bg-red-500 rounded-lg h-9 w-16">Delete </button>
</div>
    </div>
    <div className='h-[300px] w-[300px] bg-gray-200 rounded-lg text-center'>
   </div>
    </div>
  )
}

export default Addresses
