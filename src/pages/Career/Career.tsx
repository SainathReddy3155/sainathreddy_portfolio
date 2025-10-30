import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Work,
  School,
  Cloud,
  DeveloperMode,
  Storage,
} from "@mui/icons-material";

const experiences = [
  {
    label: "Python Developer — Experian (Remote)",
    date: "Oct 2024 – Present",
    description:
      "Built and maintained REST APIs using Django and DRF for fintech applications. Migrated legacy Flask services to Django improving performance by 30%. Implemented AWS (S3, EC2, RDS) for scalable deployments and automated ETL pipelines using Apache Airflow processing 10M+ monthly records.",
    icon: <Work fontSize='large' color='success' />,
  },
  {
    label: "Software Engineer — Ford (Michigan)",
    date: "Sep 2023 – Sep 2024",
    description:
      "Developed full-stack apps using React.js (Redux, Tailwind) & Flask APIs. Optimized database queries reducing page load time by 45%. Implemented JWT-based authentication and CI/CD pipelines with GitHub Actions. Managed Dockerized deployments for scalability.",
    icon: <Cloud fontSize='large' color='primary' />,
  },
  {
    label: "Software Application Developer — Multiplier Solutions (India)",
    date: "Oct 2021 – Jun 2023",
    description:
      "Led healthcare data automation projects improving acquisition efficiency by 30%. Built analytics dashboards with Python, Power BI, and Highcharts.js. Developed Dialogflow chatbot for client communication and automated healthcare data processing pipelines.",
    icon: <DeveloperMode fontSize='large' color='secondary' />,
  },
  {
    label: "Software Developer — ESK Technologies (India)",
    date: "Sep 2019 – Jun 2021",
    description:
      "Engineered backend services using Django, HTML, AJAX, and JavaScript. Enhanced UI responsiveness and ensured 100% uptime through optimized database migrations. Delivered scalable backend systems with cross-functional teams.",
    icon: <Storage fontSize='large' color='action' />,
  },
];

const education = [
  {
    label: "Master’s in Information Systems",
    date: "Aug 2023 – Dec 2024",
    description:
      "Specialized in Full Stack Development, Cloud Computing, and Data Engineering with a GPA of 3.8 / 4.",
    icon: <School fontSize='large' color='secondary' />,
  },
  {
    label: "Bachelor of Technology — JNTU, Hyderabad",
    date: "Sep 2017 – May 2021",
    description:
      "Focused on Software Engineering, Database Systems, and Algorithms with a GPA of 3 / 4.",
    icon: <School fontSize='large' color='primary' />,
  },
];

const MotionCard = motion(Card);

const Career = () => {
  return (
    <section
      id="career"
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-0 pb-0 mb-100"
    >
    <Box
      id='career'
      sx={{
        minHeight: "100vh",
        pt: 10,   // keep top padding
        pb: 4,    // reduce bottom padding
        px: { xs: 3, md: 10 },

      }}
    >
     <motion.div
             initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.3 }}
           >
           <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-black-100 justify-content:center display:flex align-items:center career" >Career</h1>
           </motion.div>

      {/* EXPERIENCE SECTION */}
      <Typography
        variant='h5'
        sx={{
          mb: 4,
          fontWeight: 600,
          textAlign: "left",
          color: "text.secondary",
        }}
      >
        Professional Experience
      </Typography>

      <Stepper orientation='vertical' sx={{ mb: 8 }}>
        {experiences.map((exp, index) => (
          <Step key={index} active>
            <StepLabel
              StepIconComponent={() => (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {exp.icon}
                </motion.div>
              )}
            >
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                {exp.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <MotionCard
                elevation={6}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  my: 2,
                  p: 2,
                  ":hover": {
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    transform: "translateY(-5px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant='subtitle2'
                    color='text.secondary'
                    sx={{ mb: 1 }}
                  >
                    {exp.date}
                  </Typography>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{ textAlign: "left" }}
                    className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {/* EDUCATION SECTION */}
      <Typography
        variant='h5'
        sx={{
          mb: 4,
          mt: 8,
          fontWeight: 600,
          textAlign: "left",
          color: "text.secondary",
        }}
      >
        Education
      </Typography>

      <Stepper orientation='vertical'>
        {education.map((edu, index) => (
          <Step key={index} active>
            <StepLabel
              StepIconComponent={() => (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {edu.icon}
                </motion.div>
              )}
            >
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                {edu.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <MotionCard
                elevation={6}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  my: 2,
                  p: 2,
                  ":hover": {
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    transform: "translateY(-5px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant='subtitle2'
                    color='text.secondary'
                    sx={{ mb: 1 }}
                  >
                    {edu.date}
                  </Typography>
                  <Typography
                    variant='body1'
                    color='text.secondary'
                    sx={{ textAlign: "left" }}
                  >
                    {edu.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {/* Closing Summary */}
      <Paper
        elevation={3}
        sx={{
          mt: 6,
          p: 3,
          textAlign: "center",
          borderRadius: "16px",
          backgroundColor: "white",
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          🚀 Continuous Growth & Innovation
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Combining strong backend expertise with frontend precision to deliver
          data-driven, scalable, and modern applications using Python, Django,
          React, and AWS.
        </Typography>
      </Paper>
    </Box>
    </section>
  );
};

export default Career;
