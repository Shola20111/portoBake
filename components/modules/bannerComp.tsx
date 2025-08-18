import React from 'react'
import BoldButtonComp from '../common/BoldButtonComp'
import { VscArrowDown } from "react-icons/vsc";
import Image from 'next/image';

const bannerComp = () => {
  return (
    <section className="flex flex-col-reverse md:w-full md:grid grid-cols-2 h-auto md:h-[680px] ">
        
        <div className=' bg-[#FFF0CC] flex flex-col items-center justify-center h-full  gap-10 p-20'>
          <div>
            <h1 className='uppercase text-[#673B2B] text-[40px] md:text-[70px] leading-[95%] font-medium text-center ' style={{fontFamily:'Bebas Neue, sans-serif'}}>
              Welcome to Porto&apos;s Nationwide Shipping
            </h1>
          </div>
          <div>
            <p className=' text-[1rem] md:text-[1.4rem] text-center text-[#673B2B]' style={{fontFamily:'Montserrat, HelveticaNeue, Helvetica Neue, sans-serif'}}>
              Turn any occasion into a celebration with our easy-to-bake pastries or award-winning cakes - LA&apos;s best bakery delivered to you, perfect for gifting near or far!
            </p>
          </div>
          <div className='relative '>
            <BoldButtonComp text='SEE THE MENU' size='bg-[#381209] pl-[40px] pr-[60px] py-2 md:py-3 text-white rounded-full text-extrabold font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif text-[15px] md:text-[20px]' />
            <div className='absolute right-[20px] top-[0] '>
              <VscArrowDown  className=' w-[20px] h-[60px] text-white cursor-pointer '/>
            </div>
          </div>
        </div>

        <div className='w-full max-h-[680px] relative'>
          <div className='h-full w-full'>
            <Image src='/assets/Spinach-Feta-Hero-Mob.png' width='500' height='500' alt='Hero Desk' className='h-full w-full object-center' />
          </div>
          

          <div className=' bg-[#ffffff] opacity-90 w-[75%] md:w-[65%] h-auto absolute top-[15%] bottom-[15%] right-[15%] left-[15%] flex flex-col items-center justify-center gap-[5%] p-10 md:p-15 '>
            <div>
              <h1 className='w-[100%] md:w-[80%] mx-auto uppercase text-[35px] md:max-text-[3.5rem] leading-[100%] text-center text-[#673B2B]' style={{fontFamily:'Bebas Neue, sans-serif'}}>
                Spinach Feta Empanada is Here!
              </h1>
            </div>
            <div>
              <p className='font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif text-[#673B2B] text-[15px] md:text-[18px] text-center' style={{fontFamily:'Montserrat, HelveticaNeue, Helvetica Neue, sans-serif'}}>
                Back for <big className='font-bold'>a limited time!</big> Our flakiest, cheesiest favorite is here. Buttery, golden pastry filled with warm, melty spinach and cheese. It&apos;s the snack you&apos;ve been craving.
              </p>
            </div>
            <div className=''>
              <BoldButtonComp text='Order Now' size='bg-[#381209] pl-[30px] pr-[30px] py-2 md:py-3 text-white rounded-full text-extrabold font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif text-[15px] md:text-[20px]' />
            </div>
          </div>
        </div>
      </section>
  )
}

export default bannerComp