import IconList from '@/components/list/icon-list'
import React from 'react'

const Features = ({items, lowgap}:any) => {
  return (
    <ul className='py-10 flex flex-col gap-4'>
        {
            items?.map((item:any,idx:number)=>(
                <IconList item={item} key={idx} lowgap={lowgap}/>
            ))
        }
    </ul>
  )
}

export default Features


