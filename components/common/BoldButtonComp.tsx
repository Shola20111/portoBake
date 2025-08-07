import React from 'react'

type boldButtonCompProps = {
    text:string;
    size:string;
}

export default function boldButtonComp({ text, size }:boldButtonCompProps) {
  return (
    <div>
        <button className={`${size} cursor-pointer bg-[#381209] hover:opacity-80 uppercase font-extrabold`} style={{fontFamily:'Montserrat, HelveticaNeue, Helvetica Neue, sans-serif'}}>
            {text}
        </button>
    </div>
  )
}
