import React from 'react'
import { motion } from "framer-motion";
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaCloud, FaRobot,FaReact } from "react-icons/fa";
import { SiFlask, SiJquery, SiDialogflow, SiAwsamplify } from "react-icons/si";
// import { SiHighcharts } from 'react-icons/si';
import { MdOutlineWeb } from "react-icons/md";
function Projects() {
  return (
    <>
     <div id="projects" className="py-20 pb-10">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-black projects">
          Projects
        </h3>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
        {/* Project 1 - Web Scraping */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div className="h-40 bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 flex items-center justify-center gap-3">
            <MdOutlineWeb className="text-white text-3xl" />
            <h4 className="text-2xl font-bold text-white">Web Scraping App</h4>
          </div>
          <div className="p-6 text-center">
            <p className="text-black dark:text-gray mb-6 text-sm">
              Flask-based web scraping app with admin/user login that extracts live data from Twitter, LinkedIn, YouTube,
              GMB, and doctor sites. Hosted on AWS EC2 with RDS SQL.
            </p>

            <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800">
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaHtml5 className="text-orange-500" /> HTML
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaCss3Alt className="text-blue-500" /> CSS
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaJs className="text-yellow-500" /> JS
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaPython className="text-green-600" /> Python
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <SiFlask className="text-gray-600" /> Flask
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaDatabase className="text-indigo-500" /> SQL
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <SiAwsamplify className="text-yellow-600" /> AWS
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Project 2 - HR Ticket */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div className="h-40 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 flex items-center justify-center gap-3">
            <FaCloud className="text-white text-3xl" />
            <h4 className="text-2xl font-bold text-white">HR Ticket System</h4>
          </div>
          <div className="p-6 text-center">
            <p className="text-black dark:text-gray mb-6 text-sm">
              Streamlined HR–employee communication, processing 300+ monthly tickets with real-time notifications and a
              95% accuracy rate.
            </p>

            <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800">
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaHtml5 className="text-orange-500" /> HTML
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaJs className="text-yellow-500" /> JS
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <SiJquery className="text-blue-700" /> jQuery
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <SiFlask className="text-gray-600" /> Flask
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaDatabase className="text-indigo-500" /> SQL
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Project 3 - Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div className="h-40 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 flex items-center justify-center gap-3">
            <FaDatabase className="text-white text-3xl" />
            <h4 className="text-2xl font-bold text-white">Analytics Dashboard</h4>
          </div>
          <div className="p-6 text-center">
            <p className="text-black dark:text-gray mb-6 text-sm">
              Visualized HR metrics using Flask APIs and Highcharts.js. Delivered real-time performance insights and analytics dashboards.
            </p>

            <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800">
              {/* <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:bg-white/10 dark:text-white/80">
                <SiHighcharts className="text-blue-600" /> Highcharts.js
              </li> */}
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaJs className="text-yellow-500" /> JS
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <SiFlask className="text-gray-600" /> Flask
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaDatabase className="text-indigo-500" /> SQL
              </li>
               <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <FaReact className="text-indigo-500" /> React
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Project 4 - Dialogflow Chatbot */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className=" rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <div className="h-40 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center gap-3">
            <FaRobot className="text-white text-3xl" />
            <h4 className="text-2xl font-bold text-white">Dialogflow Chatbot</h4>
          </div>
          <div className="p-6 text-center">
            <p className="text-black dark:text-gray mb-6 text-sm">
              Built chatbot using Google Dialogflow and Flask, integrated with WhatsApp via third-party APIs for customer interaction automation.
            </p>

            <ul className="flex flex-wrap justify-center gap-2 text-xs text-gray-800">
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <SiDialogflow className="text-orange-500" /> Dialogflow
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1  dark:text-gray/100">
                <FaPython className="text-green-600" /> Python
              </li>
              <li className="flex items-center gap-1 bg-white border border-black rounded-lg px-3 py-1 dark:text-gray/100">
                <SiFlask className="text-gray-600" /> Flask
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>

    </>
  )
}

export default Projects
