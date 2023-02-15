import React from 'react'

export default function ProjectList({children, maxWidth = '1200px'}) {
  return (
    <div id="project-list-container" className='flex justify-center w-full'>
      <div className={`flex justify-around flex-wrap w-full gap-2 max-w-[${maxWidth}]`}>
            {children}
        </div>
    </div>
  )
}
