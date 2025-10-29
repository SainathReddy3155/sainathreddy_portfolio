import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#career" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-gray-800 fixed top-0 left-1/2 transform -translate-x-1/2 w-fit z-50 shadow-lg flex justify-center"
      >
        <div className="px-8 py-2 flex justify-center items-center rounded-[25px] mt-2 shadow-md" style={{background: '#f1f6ff'}}>
          {/* Desktop Menu Centered */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className={`navlinks relative font-medium transition-colors duration-300 px-4 py-1 rounded-full 
                  ${activeIdx === idx ? 'bg-indigo-100 text-indigo-600 shadow-md' : 'text-gray-500'}
                  group hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-md`}
                onClick={e => {
                  e.preventDefault();
                  setActiveIdx(idx);
                  const sectionId = item.href.replace('#', '');
                  const section = document.getElementById(sectionId);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 rounded-full bg-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Header
