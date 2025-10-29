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
function App() {

  return (
    // <div className="bg-[#f9fafb] min-h-screen">
    //   <div className="bg-[#f1f6ff] min-h-screen"> 
    //     <Header />
    //     <MSection />
    //     <About />
    //      <h1>Hello Vite + React!</h1> 
    //    </div>
    //  </div>
    <div className=" min-h-screen">
      <div className=" min-h-screen"> 
        <Header />
        <MSection />
        <About className="aboutsection mb-6"/>
        <Achievements />
        <TechStack />
        <Certfication/>
        <Projects />
       </div>
     </div>
   
  )
}

export default App
