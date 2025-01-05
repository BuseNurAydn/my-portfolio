import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import IconBar from '../assets/icons/IconBar.svg'; //heroicons
import { BiSolidMoon, BiSolidSun  } from 'react-icons/bi';


const Navbar = ({ text }: { text: string }) => {
  const Link = 'text-lg hover:text-blue-color dark:hover:text-cyan500-color transition duration-200 ';
  const containerStyle = 'xl:container xl:mx-auto flex items-center justify-between';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Local storage'dan tema durumunu 
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);        // !false = true
  }
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  
  const letters = text.split("").map(char => char === " " ? "\u00A0" : char); // Boşlukları &nbsp; ile değiştiriyoruz

  return (
    <nav className="py-6 shadow-xl bg-white sticky top-0 z-20 px-6 md:px-4 dark:bg-gray900-color dark:text-white">
      <div className={`${containerStyle}`}>
        <div style={{ display: 'flex' }}>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -14 }} // Başlangıçta harf görünmüyor ve soldan
              animate={{ opacity: 1, x: 0 }}   // Son durumda
              transition={{
                delay: index * 0.1, // Her harf için gecikmeli animasyon
                duration: 0.1,      // Animasyon süresi
              }}
              className="font-bold text-xl text-cyan-color dark:text-cyan400-color"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        {/*Desktop Menü */}
        <div>
          <ul className="md:flex hidden space-x-6">
            <li><a href="#about" className={`${Link}`}>About</a></li>
            <li><a href="#skills" className={`${Link}`}>Skills</a></li>
            <li><a href="#experiences" className={`${Link}`}>Experiences</a></li>
            <li><a href="#projects" className={`${Link}`}>Projects</a></li>
          </ul>
        </div>
       
        {/* Dark Mode ve Mobil Menü */}
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-2xl cursor-pointer">
            {isDarkMode ? <BiSolidSun /> : <BiSolidMoon />}
          </button>
          <img src={IconBar} alt="Icon Bar" className="h-6 w-6 cursor-pointer md:hidden dark:bg-white" onClick={toggleMenu} />
        </div>
      </div>

       {/*Mobile menü */}
       {isMenuOpen ? (
            <ul className="flex-col md:hidden space-y-4 mt-4">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experiences">Experiences</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          ) : null}

    </nav>
  )
}

export default Navbar;
