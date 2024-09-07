"use client"
import React, { useContext, useState } from 'react'
import ItemCard from './Item-card'

const ItemListing = ({data}:any) => {
  
  return (
    <div id="listing" className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mt-4'>
        {
            data?.map((item:any,idx:number)=>(
              <ItemCard data={item} key={idx}/>
            ))
        }
    </div>
  )
}

export default ItemListing
