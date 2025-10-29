import React from 'react'
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaChartLine,FaTrophy,FaGithub ,FaAward,FaUsers} from "react-icons/fa";

function Achievements() {
  return (
    <>
       <div>
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-black mt-12 achievements">
          Key Achievements
        </h3>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20 mb-20">
        {/* Achievement 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaCode className="text-sky-500" size={50} />
          </div>
          <h4 className="text-xl font-semibold mb-3 text-gray-600">
            Optimized Performance
          </h4>
          <p className="text-gray-700 dark:text-black-300 text-base">
             Reduced page-load time by 45% through React and Flask optimization, improving UX and SEO ranking.
          </p>
        </motion.div>

        {/* Achievement 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaCloud className="text-gray-800 dark:text-gray-200" size={50} />
          </div>
          <h4 className="text-xl font-semibold mb-3 text-gray-600">
            Cloud Integration
          </h4>
          <p className="text-gray-700 dark:text-black-300 text-base">
            Deployed Flask and ETL pipelines on AWS (S3, EC2, RDS) to handle records monthly with zero downtime.
          </p>
        </motion.div>

        {/* Achievement 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaChartLine className="text-yellow-500" size={50} />
          </div>
          <h4 className="text-xl font-semibold mb-3 text-gray-600">
            Automation & Analytics
          </h4>
          <p className="text-gray-700 dark:text-black-300 text-base">
            Automated reporting and data workflows with Airflow & Pandas, improving operational efficiency by 35%.
          </p>
        </motion.div>

        {/* Achievement 4 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex justify-center mb-4">
            <FaUsers className="text-gray-800 dark:text-sky-200" size={50} />
          </div>
          <h4 className="text-xl font-semibold mb-3 text-gray-600">
            1M Data Collection
          </h4>
          <p className="text-gray-700 dark:text-black-300 text-base">
            Collaborated with top healthcare companies to gather data on over 1M doctors from various web sources, resulting in a 30% improvement in data acquisition efficiency.
          </p>
        </motion.div>

      </div>
    </div>
    </>
  )
}

export default Achievements
