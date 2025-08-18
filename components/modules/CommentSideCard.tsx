import Image from 'next/image'
import React from 'react'

interface CommentSideCardProps {
  text1: string
  text2: string
  name: string
  image: string 
}

const CommentSideCard = ({ text1, text2, name, image }:CommentSideCardProps) => {
  return (
    <div className="p-5 bg-white flex flex-col gap-10 rounded-md shadow-md w-[380px] h-[350px]"  style={{fontFamily:'Montserrat, HelveticaNeue, Helvetica Neue, sans-serif'}}>      
      <p className="text-[18px] w-[100%] text-black ">{text1}</p>
      <div className='flex gap-10 items-start'>
        <div className="flex items-center space-x-2 mt-4">
          <Image src={image} alt="rating" width={100} height={20} /> 
        </div>
        <div className='flex flex-col '>
          <p className="font-bold mt-2 text-[#000000]">{name}</p>
          <p className="text-xs text-gray-500 pl-[11px]">{text2}</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default CommentSideCard