
const About = () => {
  return (
    <div className='flex items-center justify-between relative'>
      <div className='pl-20'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iure velit aperiam enim eaque culpa debitis sapiente temporibus? Dolorum magnam eius officia provident nesciunt corrupti fuga voluptate labore saepe autem?</p>
      </div>

      <div className="h-screen bg-cover bg-aboutImage bg-no-repeat w-full">
       {/* İçerik */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-black">
          Arka Plan Üzerine Resim
        </h1>
      </div>
      </div>
    </div>
  )
}

export default About;