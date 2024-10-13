import RoomSlug from '@/components/templates/RoomSlug'
import React from 'react'
import { fetchApiInstance } from '@/utils/fetchApiInstance';

async function getData(params:any) {
  const res = await fetchApiInstance({
    endpoint: "hotel/?slug=example-hotel",
  });
  return res[0]
}

const RoomsSlug = async({params}:any) => {
  const data = await getData(params?.slug)
  
  return (
    <RoomSlug data={data}/>
  )
}

export default RoomsSlug