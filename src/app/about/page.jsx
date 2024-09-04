import React from 'react'
import Img from "../../../public/Img.png"
import Image from 'next/image'

function page() {
  return (
    <div className=' py-16 '>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam possimus est, dicta obcaecati ipsa facilis sit, totam at iste molestiae quasi tenetur ullam saepe fuga nemo. Iure, sequi quam.0</p>

      <div className=' w-[30rem] mt-6 '>
      <Image src={Img} alt='img' quality={100} placeholder='blur' /> 
      </div>

    </div>
  )
}

export default page