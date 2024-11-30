"use client"
import React from 'react'
import ItemCard from './Item-card'

const ItemListing = ({listing}:any) => {
  return (
    <div id="listing" className='grid grid-cols-2 mt-6 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5'>
        {
          listing?.length > 0 ?
          listing?.map((item:any,idx:number)=>(
            <ItemCard data={item} key={idx}/>
          )) : 
          <p>OO0PS! Data Not Found.</p>
        }
    </div>
  )
}

export default ItemListing
