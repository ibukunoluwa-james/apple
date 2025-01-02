import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center '>
      <div className="rounded-full w-[10vw] h-10[vw]">
         Loading...
      </div>
    </div>
  )
}

export default Loader