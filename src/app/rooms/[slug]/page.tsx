"use client"
import { items } from '@/components/templates/Landing'
import RoomSlug from '@/components/templates/RoomSlug'
import React from 'react'


const RoomsSlug = async({params}:any) => {
  const data = items?.find((item:any)=>item.slug === params?.slug)
  return (
    <RoomSlug data={data}/>
  )
}

export default RoomsSlug