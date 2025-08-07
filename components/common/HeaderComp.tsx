'use client';
import { useState, useRef, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { Bebas_Neue } from 'next/font/google';




const HeaderComp = () => {

  
// const [showCloseButton, setShowCloseButton] = useState(false)
// const handleShowCloseButton = ()=>{
//   setShowCloseButton(!showCloseButton)
// }

const [showNav, setShowNav] = useState(false)
const handleShowNav = ()=>{
  setShowNav(!showNav)
}



  return (
    <header className='flex justify-between items-center w-[100%] h-[100px] mx-auto fixed z-50 px-[5%] bg-[#fff] '>
      <div className="w-[75%] lg:w-[30%] h-[90%] flex items-center ">
        <div className="w-[full] h-[60px] flex">
          <Image src='/assets/porto-logo.png' width='120' height='70' alt="Porto Logo" className="" />
        </div>
        <div className="ml-5 w-full">
          <h1 className="text-[40px] md:text-[20px] lg:text-[35px] text-[#662F1D] font-normal leading-[22px] tracking-wide uppercase " style={{fontFamily:'Bebas Neue, sans-serif'}}>Porto's Bake at Home</h1>
        </div>
      </div>
      <div className="w-[25%]lg:w-[70%] flex justify-end items-center gap-5 pr-5 ">
        <ul className="hidden lg:flex gap-[30px]  items-center tracking-[3] text-[20px] text-[#3d4246]" style={{fontFamily:'Montserrat, HelveticaNeue, Helvetica Neue, sans-serif'}}>
         
            <li><Link href='/menu'>Menu</Link></li>
          
         
            <li><Link href='/shop'>Shop</Link></li>
          
         
            <li><Link href='/rewards'>Rewards</Link></li>
          
         
            <li><Link href='/help'>Help</Link></li>
          
         
            <li><Link href='/corperate-orders'>Corporate Orders</Link></li>
          
        </ul>

        
          <button onClick={()=>handleShowNav()} className='w-12 h-12 block lg:hidden'>
          {showNav? <MdClose className='w-10 h-10' /> : <RxHamburgerMenu className='w-10 h-10 ' /> }
          </button>
        
          
        
         
          
        { 
          showNav?  <ul className="border flex-col w-[100%] lg:hidden h-[100vh] bg-white  items-center tracking-[3] leading-[250%] text-[30px] text-[#3d4246] font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif absolute top-[100px] left-0 justify-between text-left px-10 gap-30 ">
            
          
            <li><Link href='/menu'>Menu</Link></li>
          
         
            <li><Link href='/shop'>Shop</Link></li>
          
         
            <li><Link href='/rewards'>Rewards</Link></li>
          
         
            <li><Link href='/help'>Help</Link></li>
          
         
            <li><Link href='/corperate-orders'>Corporate Orders</Link></li>
          
        </ul> : ''
        } 
        <div className="w-7">
          <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-cart" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path></svg>
        </div>

      </div>
    </header>
  )
}

export default HeaderComp