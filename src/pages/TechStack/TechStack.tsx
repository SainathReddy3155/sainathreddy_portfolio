import React from 'react'
import { motion } from "framer-motion";

import {
  SiReact,
  SiJavascript,
  SiPython,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiAmazon,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
function TechStack() {
  return (
    <>
    <div className="mt-12">
              <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
  <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-6 text-center techstack">
    Tech Stack
  </h2>
  </motion.div>
    
 

  <div className="flex flex-wrap justify-center gap-8">
    {[SiReact, SiPython, SiJavascript, SiFlask, SiAmazon, SiMysql, SiPostgresql,SiDocker]
      .map((Icon, i) => (
        <motion.div
       initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
      >
        <div
          key={i}
          className="flex flex-col items-center text-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105 w-28"
        >
          <Icon size={40} className="mb-2 icons" />
        </div>
        </motion.div>
      ))}
  </div>
  
</div>
    </>
  )
}

export default TechStack
