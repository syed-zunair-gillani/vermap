import React from 'react'

const Container = ({className, children}:any) => {
  return (
    <div className={`3xl:container mx-auto px-3 xl:px-20 ${className}`}>{children}</div>
  )
}

export default Container