import React from 'react'

function page({params}) {

    const {id} = params


  return (
    <div  className=' p-16'  >blog page is {id}</div>
  )
}

export default page