import React from 'react'
import BoldButtonComp from '../common/boldButtonComp'
import { VscArrowDown } from "react-icons/vsc";
import Image from 'next/image';

const bannerComp = () => {
  return (
    <div className="grid grid-cols-2 h-[680px]">
        
        <div className=' bg-[#FFF0CC] flex flex-col items-center justify-center gap-10 p-20'>
          <div>
            <h1 className='uppercase text-5xl tracking-wide font-extrabold leading-[150%] text-center font-Bebas Neue, sans-serif  '>
              Welcome to Porto's Nationwide Shipping
            </h1>
          </div>
          <div>
            <p className='font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif text-[25px] tracking-wider text-center'>
              Turn any occasion into a celebration with our easy-to-bake pastries or award-winning cakes - LA's best bakery delivered to you, perfect for gifting near or far!
            </p>
          </div>
          <div className='relative '>
            <BoldButtonComp text='SEE THE MENU' size='bg-[#381209] pl-[40px] pr-[60px] py-3 text-white rounded-full text-extrabold font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif text-[25px]' />
            <div className='absolute right-[20px] top-[0] '>
              <VscArrowDown  className=' w-[20px] h-[60px] text-white cursor-pointer '/>
            </div>
          </div>
        </div>

        <div className='w-full relative'>
          <Image src='/assets/herodesk.jpg' width='500' height='500' alt='Hero Desk' className='h-full w-full' />

          <div className=' bg-[#ffffff] w-[65%] h-[70%] absolute top-[15%] bottom-[15%] right-[15%] left-[15%] flex flex-col items-center justify-center gap-10 p-20'>
            <div>
              <h1 className='uppercase text-2xl tracking-wide font-extrabold leading-[150%] text-center font-Bebas Neue, sans-serif  '>
                Welcome to Porto's Nationwide Shipping
              </h1>
            </div>
            <div>
              <p className='font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif text-[20px] tracking-wider text-center'>
                Turn any occasion into a celebration with our easy-to-bake pastries or award-winning cakes - LA's best bakery delivered to you, perfect for gifting near or far!
              </p>
            </div>
            <div className=''>
              <BoldButtonComp text='SEE THE MENU' size='bg-[#381209] pl-[60px] pr-[60px] py-3 text-white rounded-full text-extrabold font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif text-[25px]' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default bannerComp