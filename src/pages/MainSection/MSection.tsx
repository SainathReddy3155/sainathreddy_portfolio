import React from 'react'
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function MSection() {
  return (
    <>
    <section className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center md:pl-24 px-6 md:w-1/2 w-full text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-600 mb-3">
          👋 Hi, I’m <br/><span className="text-indigo-600">Sainath Reddy</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Full Stack Developer
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl mx-auto md:mx-0">
         I am a full-stack software developer . My expertise spans frontend and backend technologies, including HTML, CSS, JavaScript, 
         Python, SQL, and AWS. I also have hands-on experience with Selenium for automation testing.
          Currently, I am enhancing my skills by learning React Redux and Django to build more efficient and scalable applications.
           As I continue to grow in my career, I am actively seeking new
        opportunities where I can leverage my experience and newly acquired skills to contribute effectively to a dynamic team.
        </p>
        

        
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <motion.div
         whileHover={{ scale: 0.9 }}
        >
           
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md transition"
          >
            Get in Touch <ArrowRightAltIcon/>
          </a>
          </motion.div>
          <motion.div
         whileHover={{ scale: 0.9 }}
        >
          <a
            href="/Sainath_Resume_28052025.pdf"
            download
            className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-2 rounded-md transition"
          >
             <ArrowDownwardIcon/> Download CV
          </a>
          </motion.div>
        </div>
        

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-6">
          <a
            href="https://github.com/SainathReddy3155"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1 rounded-md bg-white border border-gray-200 shadow-md hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <GitHubIcon fontSize="large" className="text-gray-800 group-hover:text-black transition-colors duration-300"/>
          </a>
          <a
            href="https://www.linkedin.com/in/sai-nath-56a677191/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1 rounded-md bg-white border border-gray-200 shadow-md hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <LinkedInIcon fontSize="large" className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300"/>
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="md:w-1/2 w-full flex justify-center items-center md:pr-24 mb-10 md:mb-0"
      >
        <div className="relative">
          <img
            src='https://rupireddysainathreddy.netlify.app/IMG_4153.jpeg'
            // src="/public/IMG_4153.jpeg" 
            alt="Sainath Reddy"
            className="profileimg w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-gray-300"
          />
        </div>
      </motion.div>
    </section>
    </>
  )
}

export default MSection
