import Button from '../shared/Button'
import CvButton from '../shared/CvButton'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import profil from '../assets/images/png/profil.png'
import { motion } from 'framer-motion'
import { GoDownload } from "react-icons/go";

const About = () => {
  return (
    <section id='about' className='relative overflow-hidden bg-white dark:bg-gray800-color py-16 md:py-18'>
      <div className="absolute inset-0 z-0">
        {/* Noktalı Arka Plan */}
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]" 
             style={{ backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="xl:container xl:mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 px-6 lg:px-0">

        <motion.div
          className="md:w-3/5 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800">
            <span className='font-medium text-sm text-brand-color dark:text-cyan-400 tracking-[0.2em] uppercase'>
               Frontend Developer
            </span>
          </div>

          <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-slate-800 dark:text-white leading-tight">
            Hello, my name is <span className="text-cyan-600 dark:text-cyan500-color">Buse Nur Aydın</span>
          </h1>

          <p className='text-slate-600 dark:text-gray400-color text-lg md:text-xl max-w-3xl leading-relaxed font-light'>
            I am a <span className="font-semibold text-slate-800 dark:text-slate-200">Computer Engineer</span> specializing in developing high-performance web applications. I graduated from the Computer Engineering Department of Çankırı Karatekin University. I focus on creating scalable software solutions with modern, user-centric designs. I enjoy learning new technologies and applying them to my projects. I continuously improve myself by following innovations in the software world.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex gap-3">
              <Button href="https://www.linkedin.com/in/busenuraydin57/"><FaLinkedin /></Button>
              <Button href="https://github.com/BuseNurAydn"><FaGithub /></Button>
              <Button href="mailto:busenuraydin521@gmail.com"><SiGmail /></Button>
            </div>
            <div className="h-8 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2 hidden sm:block"></div>
            <CvButton href="https://drive.google.com/file/d/1MzHWijlHW2spRqifSOW9u0pdTonDwOG7/view?usp=drive_link">
              Download CV
              <GoDownload className='ml-2 w-5 h-5' />
            </CvButton>
          </div>
        </motion.div>

        {/* SAĞ TARAF*/}
        <motion.div 
          className="md:w-2/5 flex justify-center mt-16 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
          
          <div className="relative">
            {/* Resim Çerçevesi */}
            <div className="absolute -inset-4 border border-cyan-500/20 rounded-2xl rotate-3"></div>
            <div className="absolute -inset-4 border border-brand-color/20 rounded-2xl -rotate-3"></div>
            
            <img
              src={profil}
              alt="Buse Nur Aydın"
              className="relative z-10 w-full max-w-[320px] rounded-2xl  transition-all duration-500 shadow-2xl shadow-cyan-500/10"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
export default About;