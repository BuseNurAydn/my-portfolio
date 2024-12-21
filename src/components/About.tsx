import Button from '../shared/Button'
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import  profil from '../assets/images/png/profilFoto.png'
import { motion } from 'framer-motion' //animasyon için //framer animation


const About = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between relative h-screen'>
      
      <div className='flex-1 flex flex-col space-y-4 md:pl-20 m-6 md:m-0'>
        <span className="font-semibold text-xl text-cyan-500">Frontend Developer</span>
        <h1 className="font-bold text-3xl text-cyan-800 ">Hello, my name is Buse Nur Aydın. I am a Computer Engineer.</h1>
        <p>I am a frontend developer who tries to maximize user experience and produce modern designs and scalable software solutions. I love learning new technologies and applying these technologies in my projects. I continue to improve myself by following innovations in the software world. I want to contribute by developing high-performance and scalable projects.</p>
        <div className="flex gap-x-6">
          <Button href="https://www.linkedin.com/in/buse-nur-ayd%C4%B1n-a18967227/"><FaLinkedin /></Button>
          <Button href="https://github.com/BuseNurAydn"><FaGithub /></Button>
          <Button href="mailto:busenuraydin521@gmail.com"><SiGmail /></Button>
        </div>
      </div>
     
      <div className="flex-1 flex items-center justify-center relative h-full">
        {/* Arka Plan*/}
        <div className="absolute inset-0 bg-cover bg-aboutImage bg-no-repeat hidden md:block"></div>
        {/* Profil Resmi */}
        <div className="z-20">
          <img
            src={profil}
            alt="Profile"
            className="relative md:-translate-y-12"
          />
        </div>
      </div>

    </section>
  )
}
export default About;