'use client'
import Image from "next/image";
import BannerComp from "@/components/modules/bannerComp";
import CommentSide from "@/components/modules/CommentSide";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useRef, useState } from "react";


export default function Home() {
 



  return (
    
    <>
      <section className="w-full h-auto mt-[100px] flex flex-col absolute">
        
        
        <BannerComp />
        <CommentSide />

        
    
      </section>


      {/*overall background*/}
      <div className="">
          <Image src='/assets/background.png' width='500' height='1000' alt="Background" className="w-full h-full" />
      </div>    
    </>
    
    
  );
}
