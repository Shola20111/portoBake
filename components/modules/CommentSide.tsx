
'use client' // Must be at the very top

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

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 680 ? 510 : 540
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className='flex flex-col justify-center items-center w-full gap-10 bg-[#673B2B] h-[700px]'>
      <h1 className='text-[40px] text-[#fff]' style={{fontFamily:'Bebas Neue, sans-serif'}} >
        WHAT OUR CUSTOMERS ARE SAYING:
      </h1> 

        <div className=" px-25 flex justify-center items-center relative ">
      
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white transition"
      >
        <MdChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white/70 rounded-full hover:bg-white transition"
      >
        <MdChevronRight size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex justify-center overflow-x-auto scrollbar-hide scroll-smooth "
      >
        {datas.map((data, index) => (
          <div
            key={index}
            className="flex m-2 md-0 w-full md:w-1/2 lg:w-1/3"
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
