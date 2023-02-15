import React from 'react'

export default function RoundedContainer({children, className}) {
    return (
        <div className={className + ' px-6 py-4 rounded-[25px] backdrop-blur-md bg-[rgba(38,38,38,0.75)] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.5)]'}>
          {children}
      </div>
  )
}
