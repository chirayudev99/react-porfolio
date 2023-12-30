import React from 'react'
import {BallCanvas} from "./canvas"
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { Tooltip, TooltipGroup } from '../utils/tooltip'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' > 
    {technologies.map((tech,idx) => (
      <TooltipGroup>
      <div className='w-28 h-28' key={tech.name} >
      <Tooltip content="Hello!">
<BallCanvas icon={tech.icon} idx={idx} />
</Tooltip>
      </div>
      </TooltipGroup>
    ))}

    </div>
  )
}

export default SectionWrapper(Tech,"tech")