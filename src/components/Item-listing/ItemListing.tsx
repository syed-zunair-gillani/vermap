import React from 'react'
import ItemCard from './Item-card'

const ItemListing = ({data}:any) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5'>
        {
            data?.map((item:any,idx:number)=>(
              <ItemCard data={item} key={idx}/>
            ))
        }
    </div>
  )
}

export default ItemListing
