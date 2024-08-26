import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <figure className='max-w-[270px] w-full'>
        <Link href="/">
            <Image src="/logo.png" width={118} height={64} alt="vermap"/>
        </Link>
    </figure>
  )
}

export default Logo