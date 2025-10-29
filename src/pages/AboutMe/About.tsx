import React from 'react'
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
function About() {
  return (
    <>

    
         <motion.div
        initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      >
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-black-100 justify-content:center display:flex align-items:center aboutme" >About Me</h1>
      </motion.div>

<section className="cardbg w-full min-h-[4vh] flex flex-col items-center justify-center bg-white border-3 border-sky-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-16 mx-auto text-center">
  <p className="text-lg text-gray-700 dark:text-black-500 max-w-3xl leading-relaxed">
    Hello! I'm <span className="font-semibold text-sky-600">Sainath Reddy</span>, a passionate Full Stack Developer with over 5 years of experience in building dynamic and responsive web applications. I specialize in React.js for front-end development and Python for back-end services. My expertise also includes Python frameworks, allowing me to create robust and scalable solutions.
  </p>

  <p className="text-lg text-gray-700 dark:text-black-500 max-w-3xl leading-relaxed mt-6">
    Throughout my career, I've had the opportunity to work on diverse projects, ranging from small business websites to large-scale enterprise applications. I thrive in collaborative environments and enjoy mentoring junior developers to help them grow their skills.
  </p>

  {/* <p className="text-lg text-gray-700 dark:text-black-500 max-w-3xl leading-relaxed mt-6">
    When I'm not coding, I love exploring new technologies, contributing to open-source projects, and staying updated with the latest industry trends. I'm always eager to take on new challenges and contribute to innovative projects that make a difference.
  </p> */}
</section>

 
    </>
  )
}

export default About
