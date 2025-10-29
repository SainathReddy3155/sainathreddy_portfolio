import React from 'react'
import { motion } from "framer-motion";
import { FaReact, FaPython, FaDocker, FaAws, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFlask, SiMongodb, SiMysql, SiPostgresql, SiJenkins } from "react-icons/si";

const skills = [
 
  { name: "React.js", icon: <FaReact className="text-sky-500" /> },
   { name: "JavaScript" , icon: <SiTypescript className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
 
];
function Skills() {
  return (
    <>
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-0 pb-120  mb-100"
    >
     <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true, amount: 0.3 }}
           >
             <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-black mt-12 achievements">
              Skills
             </h3>
    </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
        className="flex flex-wrap justify-center gap-3 text-md sm:text-lg text-gray-800 dark:text-white/80 max-w-5xl"
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center gap-2 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/10 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all"
          >
            {skill.icon && <span className="text-xl">{skill.icon}</span>}
            <span className='text-black text-sm'>{skill.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>

    </>
  )
}

export default Skills
