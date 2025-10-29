import React from 'react'
import { motion } from "framer-motion";
import { FaCode, FaDatabase} from "react-icons/fa";

function Certfication() {
  return (
    <>
     <div className="mt-12">
              <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
  <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-6 text-center certification">
    Certifications & Awards
  </h2>
  </motion.div>
    
 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 mb-20">
            {/* Achievement 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <FaCode className="text-sky-500 rounded-full bg-primary-500" size={50} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-600">
                Python Developer Certification
              </h4>
              <p className="text-gray-700 dark:text-black-300 text-base">
                 HackerRank (2022)
              </p>
            </motion.div>
    
            {/* certification 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <FaDatabase className="text-gray-800 dark:text-gray-200" size={50} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-600">
                SQL Certification
              </h4>
              <p className="text-gray-700 dark:text-black-300 text-base">
                HackerRank (2024)
              </p>
            </motion.div>
    
            {/* certification 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <FaDatabase className="text-sky-500" size={50} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-600">
                DBMS Certification
                </h4>
              <p className="text-gray-700 dark:text-black-300 text-base">
                NPTEL (2023)
              </p>
            </motion.div>
          </div>
  
</div>
    </>
  )
}

export default Certfication
