"use client"
import RoomSlug from '@/components/templates/RoomSlug'
import React from 'react'
import { listingItems } from '../../../../public/data'
import { fetchApiInstance } from '@/utils/fetchApiInstance';

async function getData(params:any) {
  const res = await fetchApiInstance({
    endpoint: "hotel/?slug=example-hotel",
  });
  return res[0]
}

const RoomsSlug = async({params}:any) => {
  // const data = listingItems?.find((item:any)=>item.slug === params?.slug)
  const data = await getData(params?.slug)
  
  return (
    <RoomSlug data={data}/>
  )
}

export default RoomsSlug