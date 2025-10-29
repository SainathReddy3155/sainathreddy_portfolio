import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header/Header'
import MSection from './pages/MainSection/MSection'
import About from './pages/AboutMe/About'
import Achievements from './pages/Achievements/Achievements'
import TechStack from './pages/TechStack/TechStack'
import Certfication from './pages/Certifications/Certfication'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Career from './pages/Career/Career'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'
function App() {

  return (
    <div className=" min-h-screen">
      <div className=" min-h-screen"> 
        <Header />
        <MSection />
        <About className="aboutsection mb-6"/>
        <Achievements />
        <TechStack />
        <Certfication/>
        <Projects />
        <Skills />
        <div className='-mt-220'>
        <Career />
        </div>
        <div className='-mt-100'>
        <Contact />
        </div>
         <div className='-mt-10'>
        <Footer />
        </div>
       </div>
     </div>
   
  )
}

export default App
