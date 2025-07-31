import React from 'react'

type boldButtonCompProps = {
    text:string;
    size:string;
}

export default function boldButtonComp({ text, size }:boldButtonCompProps) {
  return (
    <div>
        <button className={`${size}`}>
            {text}
        </button>
    </div>
  )
}
