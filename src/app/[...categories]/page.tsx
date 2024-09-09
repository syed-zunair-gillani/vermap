import Container from '@/components/ui/container'
import Image from 'next/image'
import React from 'react'

const CategoryPage = () => {
  return (
    <Container>
      <main className='relative flex justify-end'>
          <Image src="/images/1.png" width={700} height={480} alt='' className='w-full max-w-[80%] rounded-[12px] overflow-hidden object-cover h-[480px] my-4'/>
          <div className='p-6 px-8 box-shadow max-w-[420px] w-full absolute top-1/2 left-0 bg-white -translate-y-1/2 rounded-xl'>
            <h2 className='text-3xl font-bold'>Glamping Rentals</h2>
            <p className='text-gray-400 font-normal mt-1'>Fuss-free camping at its finest</p>
            <div className='rounded-lg border p-1.5 px-4 mt-4'>
              <label htmlFor="" className='uppercase text-xs'>location</label>
              <input type='text' value="United State" className='block outline-none border-none w-full mt-[-4px] text-gray-600'/>
            </div>
            <div  className='rounded-lg border p-1.5 px-4 mt-2 flex items-center'>
              <div>
                <label htmlFor="" className='uppercase text-xs'>Check In</label>
                <input type='text' value="Add Date" className='block outline-none border-none w-full mt-[-4px] text-gray-600'/>
              </div>
              <div className="pl-[1.5px] h-[30px] bg-gray-300 mx-6"/>
              <div className=''>
                <label htmlFor="" className='uppercase text-xs'>Check out</label>
                <input type='text' value="Add Date" className='block outline-none border-none w-full mt-[-4px] text-gray-600'/>
              </div>
            </div>
            <button className="bg-[#111] w-full text-white py-3 mt-3 rounded-lg">
                Search
              </button>
          </div>
      </main>
    </Container>
  )
}

export default CategoryPage