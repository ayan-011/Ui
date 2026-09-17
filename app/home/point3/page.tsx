import React from 'react'
import Images from './component/Images'

const Point3 = () => {
  return (
    <div className='w-full h-fit bg-white overflow-hidden border-b-1  border-black/10'>
        <div className="flex flex-col text-black home-content shrink-0      ">

          <div className=" flex w-[70vw]  justify-between p-10  ">


        <h1 className="heading text-[4vw]  font-rethink font-semibold"> <span className='text-orange-500'>03</span> Point 3</h1>
    
        <div className="text w-110 font-semibold text-black/60 text-[17px] font-rethink leading-6">
           <span >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ipsam velit animi consequatur maxime modi molestias totam, saepe praesentium recusandae odit 
            <br /> <br />expedita dicta, ea vero. Ullam, dolor tempora eos natus unde velit explicabo libero cupiditate consequuntur amet fugit modi neque impedit culpa quae. Doloremque provident expedita deleniti porro unde eos maiores consequatur sunt esse? Cum temporibus itaque voluptatem ducimus cumque maxime 
            <br /><br />est deserunt nisi assumenda esse. Nobis provident quidem expedita corrupti reprehenderit quaerat vel assumenda tempore molestiae alias nulla, est eaque vero ipsam obcaecati saepe. In excepturi officiis officia.
           </span>
        </div>
          </div>


        <Images/>

      </div>

    </div>
  )
}

export default Point3