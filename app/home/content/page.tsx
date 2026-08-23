import React from 'react'

const Content = () => {
  return (
    <div className=' w-full h-screen bg-white overflow-hidden border-b-1 border-t-1 border-black/10'>
      
      <div className="">
        <h1 className="content text-[20vw] -mt-35 -ml-10 font-bold font-rethink">Content</h1>

        <div className="titles p-10 flex flex-col gap-3 home-content shrink-0">
          <h1 className='font-rethink font-semibold text-black/40 text-4xl'>01- <span className='text-black'>Point 1</span> </h1>
          <h1 className='font-rethink font-semibold text-black/40 text-4xl'>02- <span className='text-black'>Point 2</span> </h1>
          <h1 className='font-rethink font-semibold text-black/40 text-4xl'>03- <span className='text-black'>Point 3</span> </h1>
          <h1 className='font-rethink font-semibold text-black/40 text-4xl'>04- <span className='text-black'>Point 4</span> </h1>
          <h1 className='font-rethink font-semibold text-black/40 text-4xl'>05- <span className='text-black'>Point 5</span> </h1>
        </div>
      </div>
    </div>
  )
}

export default Content