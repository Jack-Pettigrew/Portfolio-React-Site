// styles
import "./ProjectList.css";

import React from 'react'

export default function ProjectList(props) {
  return (
        <div className='project-list'>
            {props.children}
        </div>
  )
}
