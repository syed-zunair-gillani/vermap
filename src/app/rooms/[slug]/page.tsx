"use client"
import RoomSlug from '@/components/templates/RoomSlug'
import React from 'react'
import { listingItems } from '../../../../public/data'


const RoomsSlug = async({params}:any) => {
  const data = listingItems?.find((item:any)=>item.slug === params?.slug)
  return (
    <RoomSlug data={data}/>
  )
}

export default RoomsSlug