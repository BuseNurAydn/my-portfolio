import { useState } from 'react';
import { motion } from 'framer-motion'
import IconBar from '../assets/icons/IconBar.svg'; //heroicons
import IconDownload from '../assets/icons/IconDownload.svg';

const Navbar = ({ text }: { text: string }) => {
  const Link = 'text-lg hover:text-blue-900 transition duration-200 '
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);        // !false = true
  }

  const letters = text.split("").map(char => char === " " ? "\u00A0" : char); // Boşlukları &nbsp; ile değiştiriyoruz

  return (
    <nav className="px-6 py-4 shadow-xl bg-white sticky top-0 z-20">
      <div className='flex items-center md:justify-around justify-between'>
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
              className="font-bold text-xl text-blue-900"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <ul className="md:flex hidden space-x-6">
          <li><a href="#about" className={`${Link}`}>About</a></li>
          <li><a href="#skills" className={`${Link}`}>Skills</a></li>
          <li><a href="#experiences" className={`${Link}`}>Experiences</a></li>
          <li><a href="#projects" className={`${Link}`}>Projects</a></li>
        </ul>
        <div className='md:flex hidden border-2 border-dashed px-2 py-1 rounded-lg'>
          <img src={IconDownload} className={`${Link} h-5 w-5 mr-2`} />
          <a href="https://drive.google.com/file/d/1dx4eZtaG2lGLCyFPb0uDxHf_OD67GNTJ/view?usp=drive_link
                "target="_blank">Download CV</a>
          </div>
        <div className='md:hidden'> 
             <img src={IconBar} alt="Icon Bar" className="h-8 w-8" onClick={toggleMenu} />
        </div>
      </div>
      {/*Mobile menü */}
      {isMenuOpen ? (
          <ul className="flex-col md:hidden space-y-4 mt-4">
            <li><a href="#about">About</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
      ):null}
    </nav>
    

  )
}

export default Navbar;
