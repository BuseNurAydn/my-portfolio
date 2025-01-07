import Button from '../shared/Button'
import CvButton from '../shared/CvButton'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import profil from '../assets/images/png/profil.png'
import { motion } from 'framer-motion' //animasyon için //framer animation
import { GoDownload } from "react-icons/go";

const About = () => {

  const containerStyle = "xl:container xl:mx-auto flex flex-col md:flex-row items-center justify-between";

  return (
    <section id='about' className='dark:bg-gray800-color scroll-mt-16'>
      <div className={`${containerStyle} relative overflow-auto md:overflow-visible`}>
        <motion.div
          className="md:w-2/3 space-y-4 p-6 lg:p-0"
          animate={{ opacity: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

          <h2 className='font-semibold text-xl text-brand-color dark:text-white animate-bounce tracking-wider'>Frontend Developer</h2>
          <h1 className="font-bold lg:text-3xl md:text-lg text-xl text-cyan-color dark:text-cyan500-color ">Hello, my name is Buse Nur Aydın. I am a Computer Engineer.</h1>
          <p className='dark:text-gray400-color md:text-sm lg:text-base'>I just graduated from Çankırı Karatekin University, Department of Computer Engineering. I am a frontend developer who tries to maximize user experience and produce modern designs and scalable software solutions. I love learning new technologies and applying these technologies in my projects. I continue to improve myself by following innovations in the software world. I want to contribute by developing high-performance and scalable projects.</p>
          <div className="flex md:gap-x-8 gap-x-2">
            <Button href="https://www.linkedin.com/in/buse-nur-ayd%C4%B1n-a18967227/"><FaLinkedin /></Button>
            <Button href="https://github.com/BuseNurAydn"><FaGithub /></Button>
            <Button href="mailto:busenuraydin521@gmail.com"><SiGmail /></Button>
            <CvButton href="https://drive.google.com/file/d/1i1u3oLe9PywTR9OaHYRSURLPqetrxx5S/view?usp=sharing">
              Download CV
              <GoDownload className='w-6 h-6' />
            </CvButton>
          </div>
        </motion.div>

        <div className="md:w-1/3 w-96 flex items-center animate-pulse cursor-pointer justify-center relative bg-gradient-to-r hover:bg-gradient-to-l from-sky-color to-cyan500-color">

          {/* Profil Resmi */}
          <div className="z-10">
            <img
              src={profil}
              alt="profil"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default About;