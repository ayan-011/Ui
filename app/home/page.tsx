import React from 'react'
import Changeimg from '../changeimg/changeimg'

const Home = () => {
  return (
  <div className="w-full h-[125vh] sm:h-[120vh] bg-white relative ">
 
   {/* Blur Mirror Overlay */}
  <div
    className="
      over
      absolute top-0 left-0
      w-full h-[70vh]
      z-20
      bg-white/10
      backdrop-blur-xl
      border border-white/10
      shadow-[inset_0_1px_20px_rgba(255,255,255,0.15)]
      items-center flex px-10  justify-center  
    "
  >
    <span className='text-[9vw] font-rethink flex'>Undo!</span>
  </div>

  {/* Image section */}
  <div className="h-[70vh] bg-green-900 overflow-hidden relative z-10">
    <Changeimg />
  </div>

  
  <div className="content  home-content shrink-0 p-0 sm:p-10 ">

    <div className="flex flex-col sm:flex-row gap-9 justify-between bg-  font-rethink min-w-[10vw]  " >
      <h1 className="heading  text-4xl sm:text-[4vw] font-semibold leading-[70px] text-black">Brand  Heading</h1>

      <div className="text-[16px] gap-3 flex flex-col w-full   font-semibold sm:text-[17px] text-black/60">
      <span> This guide defines the visual language, design style, and principles that shape a clear and consistent brand experience, no matter the team or area of expertise.

 
        
        </span>

        <span>oribus possimus ipsa nam voluptas excepturi dolore molestiae neque. Qui nostrum architecto iure consequatur ipsum molestiae dignissimos saepe deserunt dolorem ad porro fugit animi alias ea eos ullam, sunt beatae consequuntur vero aperiam ab blanditiis. Placeat, architecto!</span>

        <span> ea, obcaecati deserunt placeat vel expedita quae delectus ducimus nemo? In corporis eum dolorem eos deleniti sapiente, fuga labore. Rem?</span>

      </div>
    </div>

  </div>
</div>
  )
}

export default Home