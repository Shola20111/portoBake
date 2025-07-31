'use client';
import React from 'react'

import Image from "next/image";
import Link from "next/link";

const HeaderComp = () => {
  return (
    <section className='flex justify-start items-center w-full h-[100px] border mx-auto fixed z-50 px-[5%] bg-[#fff] '>
      <div className="w-[30%] h-[90%] border flex items-center ">
        <div className="w-[95px] h-[70px] flex">
          <Image src='/assets/porto-logo.png' width='95' height='70' alt="Porto Logo" className="" />
        </div>
        <div className="ml-5">
          <h1 className="text-[2rem] text-[#662F1D] font-bold font-Bebas Neue, sans-serif leading-[22px] tracking-tight ">Porto's Bake at Home</h1>
        </div>
      </div>
      <div className="w-[70%] flex justify-end items-center gap-5 pr-5  ">
        <div className="flex gap-[30px] items-center tracking-[3] text-[20px] text-[#3d4246] font-Montserrat, HelveticaNeue, Helvetica Neue, sans-serif">
          <ol>
            <li><Link href='/menu'>Menu</Link></li>
          </ol>
          <ol>
            <li><Link href='/shop'>Shop</Link></li>
          </ol>
          <ol>
            <li><Link href='/rewards'>Rewards</Link></li>
          </ol>
          <ol>
            <li><Link href='/help'>Help</Link></li>
          </ol>
          <ol>
            <li><Link href='/corperate-orders'>Corporate Orders</Link></li>
          </ol>
        </div>
        <div className="w-7">
          <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-cart" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path></svg>
        </div>

      </div>
    </section>
  )
}

export default HeaderComp