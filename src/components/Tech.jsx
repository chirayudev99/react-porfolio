import React from 'react'
import {BallCanvas} from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import Tooltip from '../utils/tooltip'



const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' > 
    {technologies.map((tech,idx) => (
     
      <div className='w-28 h-28 text-center' key={tech.name} >
<BallCanvas icon={tech.icon} idx={idx} />
<p>{tech.name}</p>
      </div>
     
    ))}

    </div>
  )
}

export default SectionWrapper(Tech,"tech")