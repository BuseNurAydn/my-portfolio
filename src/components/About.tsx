 import Button from '../shared/Button'
const About = () => {
  return (
    <div className='flex items-center justify-between relative h-screen'>
      <div className='flex-1 flex flex-col space-y-4 pl-20 '>
        <span className="font-semibold text-xl text-cyan-500">Frontend Developer</span>
        <h1 className="font-bold text-3xl text-cyan-800 ">Hello, my name is Buse Nur Aydın. I am a Computer Engineer.</h1>
        <p>I am a frontend developer who tries to maximize user experience and produce modern designs and scalable software solutions. I love learning new technologies and applying these technologies in my projects. I continue to improve myself by following innovations in the software world. I want to contribute by developing high-performance and scalable projects.</p>
        <div>
           <Button>a</Button>
           <Button>b</Button>
           <Button>c</Button>
        </div>
      </div>

      <div className="flex-1 h-full bg-cover bg-aboutImage bg-no-repeat ">
       {/* İçerik */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-black">
          Arka Plan Üzerine Profil
        </h1>
      </div>
      </div>
    </div>
  )
}
export default About;