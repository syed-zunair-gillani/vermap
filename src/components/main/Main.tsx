import React from 'react'
import MapComponent from "./MapComponent"
import MainFilter from '../header/MainFilter'
const Main = () => {
  return (
    <main className='relative'>
        <MapComponent/>
        <div className='absolute bottom-14 z-[1000] w-full '>
        <MainFilter/>
        </div>
    </main>
  )
}

export default Main