import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from "framer-motion"
import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.5 * index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
<div 
options={{max:45,scale:1,speed:450}} 
className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
>
<img src={icon} alt={title} className='w-16 h-16 object-contain' />
<h3 className='text-center text-white text-[20px] font-bold' >
{title}
</h3>
</div>
    </motion.div>
    </Tilt>

  )
}


const About = () => {


  return (
    <>
<motion.div variants={textVariant()} >
  <p className={styles.sectionSubText} >Introduction</p>
  <h2 className={styles.sectionHeadText} >Overview.</h2>
</motion.div>
<motion.p variants={fadeIn("","",0.1,1)} 
className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' >
Full Stack Engineer | Building Scalable Web & AI-Powered Products
<br /><br />

With 6+ years of experience building production-ready web applications, SaaS platforms, and AI-powered products, I specialize in React.js, Next.js, Node.js, and TypeScript, with a strong focus on performance, scalability, and clean architecture.
<br /><br />

From turning ideas into MVPs to optimizing and scaling existing products, I enjoy solving complex problems and building software that actually delivers business value. I’ve worked across healthcare, fintech, education, e-commerce, and GenAI — collaborating with startups, enterprises, and international clients.
<br /><br />

I thrive on exploring new technologies and applying them to solve real-world problems. Let’s connect and discuss how I can contribute to your next big idea!<br /><br />
</motion.p>
<div className='mt-20 flex flex-wrap gap-10  ' >
{services.map((service,idx) => (
  <ServiceCard key={service.title} index={idx} {...service} />
))}
</div>
    </>
  )
}

export default SectionWrapper(About,"about")