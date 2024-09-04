import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'

function page() {
  return (
    <div>
        <div className=' p-16 flex flex-col gap-5 '>
        <Link href={'/blogs/1'}>Blog1</Link>
        <Link href={'/blogs/2'} >Blog2</Link>
    </div>
    <Button />
    </div>
  )
}

export default page