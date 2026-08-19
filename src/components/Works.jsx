import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from "framer-motion"
import {styles} from "../styles"
import { github } from '../assets'
import { projects } from '../constants'
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  return (
   
    <motion.div
    variants={fadeIn("up","spring",0.5 * index,0.75)} 
 
    >

     <Tilt options={{max:45,scale:1,speed:450}} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' >
<div
className='relative w-full h-[230px]'
>
<img src={image} alt={name} className='w-full h-full object-contain rounded-2xl '  />
<div className='absolute inset-0 flex justify-end m-3 card-img_hover' >
<div onClick={() => window.open(source_code_link,"_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' >
<img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />

</div>
</div>
</div>
<div className='mt-5 ' >
<h3 className='text-white font-bold text-[24px]' >{name}</h3>
<p className='mt-2 text-secondary text-[14px]' >{description}</p>
</div>

<div className='mt-4 flex flex-wrap gap-2' >
{tags.map((tag) => (
  <p key={tag.name} className={`text-[14px] ${tag.color}`} >#{tag.name} </p>
))}

</div>
    </Tilt>
    </motion.div>

  )
}


const Works = () => {


  return (
    <>
<motion.div variants={textVariant()} >
  <p className={styles.sectionSubText} >My work</p>
  <h2 className={styles.sectionHeadText} >Projects.</h2>
</motion.div>
<div className='w-full flex' >
<motion.p variants={fadeIn("","",0.1,1)} 
className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' >
Full Stack Engineer| Delivering Scalable, User-Centric Solutions | 5+ Years of Experience <br /><br />

I am a versatile Full Stack Developer with over 5 years of experience designing and delivering web and mobile applications that are intuitive, scalable, and performance-driven. Proficient in leveraging modern technologies like React.js, Next.js, Node.js, and MongoDB, I excel at crafting seamless user experiences and robust backend systems and experienced in dealing with Generative AI. <br /><br />

My journey includes successfully managing diverse projects across corporate and freelance roles, utilizing tools such as GitLab CI/CD, Docker, and AWS to optimize workflows and ensure efficient delivery. I also have hands-on experience in mobile development with React Native and Flutter, enabling me to create cross-platform applications with ease.<br /><br />
</motion.p>
</div>
<div className='mt-20 flex flex-wrap gap-7' >
{projects.map((project,idx) => (
  <ProjectCard key={idx} index={idx} {...project} />
))}
</div>
    </>
  )
}

export default SectionWrapper(Works,"about")