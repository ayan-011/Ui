import React from 'react'

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


          <div className="images p-10 w-[70vw] flex flex-col gap-20 text-lg font-semibold font-rethink">

<div className="image1 flex flex-col gap-2">
  <span>image 1</span>
<img src="https://picsum.photos/id/1015/1600/900" alt="" className='' />
</div>

<div className="image2 flex flex-col gap-2">
  <span>image 2</span>
<img src="https://picsum.photos/id/1015/1600/900" alt="" className='' />
</div>

<div className="image3 flex flex-col gap-2">
  <span>image 3</span>
<img src="https://picsum.photos/id/1015/1600/900" alt="" className='' />
</div>


<div className="grids gap-2 flex flex-col">
  <span>Grid Images</span>

<div className="  grid grid-cols-3 grid-rows-2 gap-4 w-full">

    <img
    src="https://picsum.photos/500/300?random=1"
    alt=""
    className="w-full h-full object-cover"
  />
   <img
    src="https://picsum.photos/500/300?random=2"
    alt=""
    className="w-full h-full object-cover"
  />

  <img
    src="https://picsum.photos/500/300?random=3"
    alt=""
    className="w-full h-full object-cover"
  />

  <img
    src="https://picsum.photos/500/300?random=4"
    alt=""
    className="w-full h-full object-cover"
  />

  <img
    src="https://picsum.photos/500/300?random=5"
    alt=""
    className="w-full h-full object-cover"
  />

  <img
    src="https://picsum.photos/500/300?random=6"
    alt=""
    className="w-full h-full object-cover"
  />


</div>
</div>

<div className="image4 flex flex-col gap-2">
  <span>image 4</span>
<img src="https://picsum.photos/id/1015/1600/900" alt="" className='' />
</div>
          </div>

      </div>

    </div>
  )
}

export default Point3