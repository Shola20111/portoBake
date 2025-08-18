
'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import CommentSideCard from './CommentSideCard'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const datas = [
  {
    text1: "You all are wonderful and we are always thankful for all your help (and yummy treats). Always be one of our favorite places, wish there was a Porto’s closer to San Diego but happy to make the drive to Buena Park 😊",
    text2: 'San Diego, CA',
    name: '- Brandi Powell-Espiritu',
    image: '/assets/Five-Stars.svg',
  },

   {
    text1: "You all are wonderful and we are always thankful for all your help (and yummy treats). Always be one of our favorite places, wish there was a Porto’s closer to San Diego but happy to make the drive to Buena Park 😊",
    text2: 'San Diego, CA',
    name: '- Brandi Powell-Espiritu',
    image: '/assets/Five-Stars.svg',
  },
 {
    text1: "You all are wonderful and we are always thankful for all your help (and yummy treats). Always be one of our favorite places, wish there was a Porto’s closer to San Diego but happy to make the drive to Buena Park 😊",
    text2: 'San Diego, CA',
    name: '- Brandi Powell-Espiritu',
    image: '/assets/Five-Stars.svg',
  },
 {
    text1: "You all are wonderful and we are always thankful for all your help (and yummy treats). Always be one of our favorite places, wish there was a Porto’s closer to San Diego but happy to make the drive to Buena Park 😊",
    text2: 'San Diego, CA',
    name: '- Brandi Powell-Espiritu',
    image: '/assets/Five-Stars.svg',
  },
 {
    text1: "You all are wonderful and we are always thankful for all your help (and yummy treats). Always be one of our favorite places, wish there was a Porto’s closer to San Diego but happy to make the drive to Buena Park 😊",
    text2: 'San Diego, CA',
    name: '- Brandi Powell-Espiritu',
    image: '/assets/Five-Stars.svg',
  },
 {
    text1: "You all are wonderful and we are always thankful for all your help (and yummy treats). Always be one of our favorite places, wish there was a Porto’s closer to San Diego but happy to make the drive to Buena Park 😊",
    text2: 'San Diego, CA',
    name: '- Brandi Powell-Espiritu',
    image: '/assets/Five-Stars.svg',
  },
 {
    text1: "You all are wonderful and we are always thankful for all your help (and yummy treats). Always be one of our favorite places, wish there was a Porto’s closer to San Diego but happy to make the drive to Buena Park 😊",
    text2: '- San Diego, CA',
    name: 'Brandi Powell-Espiritu',
    image: '/assets/Five-Stars.svg',
  },


    

]


const CommentSide = () => {
//  const scrollRef = useRef(null)

//   const prev = ()=>{
//     scrollRef.current?.scrollTo({
//       left:(scrollRef.current?.scrollLeft || 0) - 410,
//       behavior: 'smooth'
//     })
//   }

//   const next = ()=>{
//     scrollRef.current?.scrollTo({
//       left:(scrollRef.current?.scrollLeft || 0) + 410,
//       behavior: 'smooth'
//     })
//   }

const scrollRef = useRef<HTMLDivElement | null>(null);

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 410,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 410,
        behavior: "smooth",
      });
    }
  };

  
  return (
    <section className='flex flex-col justify-center items-center w-full  bg-[#673B2B] h-[700px] relative'>
      <h1 className='text-[30px] md:text-[40px] text-[#fff] text-center' style={{fontFamily:'Bebas Neue, sans-serif'}} >
        WHAT OUR CUSTOMERS ARE SAYING:
      </h1> 

        <div className=" px-10 md:px-15 bg-[#673B2B] h-auto w-full flex justify-center items-center ">
      
      {/* Left Arrow */}
      <button
        onClick={() => prev()}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full  bg-white hover:bg-white transition"
      >
        <MdChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => next()}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white hover:bg-white transition"
      >
        <MdChevronRight size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex justify-center overflow-x-auto scrollbar-hide gap-4 scroll-smooth "
      >
        {datas.map((data, index) => (
          <div
            key={index}
            className="flex m-2 mb-0 w-full md:w-[500px] lg:w-1/3"
          >
            <CommentSideCard
              text1={data.text1}
              text2={data.text2}
              name={data.name}
              image={data.image}
            />
          </div>
        ))}
      </div>
    </div>
    </section>
    
  )
}

export default CommentSide

