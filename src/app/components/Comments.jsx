import React from 'react'

async function Comments({promise}) {

    const comments = await promise

  return (
    <div>
          <h2 className=' text-[1.6rem] font-semibold my-5 '>Comments</h2>
          <div>
            {
              comments.map((comment)=>(
                <div key={comment.id} className=' flex flex-col gap-8 '>
                  <h3 className=' text-base mb-2 '>{comment.name}</h3>
                </div>
              ))
            }
          </div>
        </div>
  )
}

export default Comments