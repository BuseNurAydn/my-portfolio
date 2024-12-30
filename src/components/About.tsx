import Button from '../shared/Button'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import profil from '../assets/images/png/profilFoto.png'
import { motion } from 'framer-motion' //animasyon için //framer animation



const About = () => {

  const containerStyle = "md:container md:mx-auto scroll-mt-16 flex flex-col md:flex-row items-center justify-between ";

  return (
    <section id='about' className={`${containerStyle} relative md:py-32 py-8 overflow-auto md:overflow-visible`}>
   <motion.div
       className="md:w-3/5 space-y-4 p-6 md:p-0"
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
      
        <h2 className='font-semibold text-xl text-brand-color animate-bounce'>Frontend Developer</h2> 
        <h1 className="font-bold text-3xl text-cyan-color ">Hello, my name is Buse Nur Aydın. I am a Computer Engineer.</h1>
        <p>I just graduated from Çankırı Karatekin University, Department of Computer Engineering. I am a frontend developer who tries to maximize user experience and produce modern designs and scalable software solutions. I love learning new technologies and applying these technologies in my projects. I continue to improve myself by following innovations in the software world. I want to contribute by developing high-performance and scalable projects.</p>
        <div className="flex gap-x-6">
          <Button href="https://www.linkedin.com/in/buse-nur-ayd%C4%B1n-a18967227/"><FaLinkedin /></Button>
          <Button href="https://github.com/BuseNurAydn"><FaGithub /></Button>
          <Button href="mailto:busenuraydin521@gmail.com"><SiGmail /></Button>
        </div> 
      </motion.div>

      <div className="md:w-2/5 flex items-center justify-center relative h-full">
      
       {/* Profil Resmi */}
        <div className="z-10 md:bg-gray-color md:p-20 ">
          <img
            src={profil}
            alt="Profile"
            className="relative"
          />
        </div>
      </div>
    </section>
  )
}
export default About;