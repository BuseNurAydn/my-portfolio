import Htext from "../shared/Htext";
import { projects } from "../utils/projectsData";
import { HiOutlineArrowRight } from "react-icons/hi";



const Projects = () => {
  
  const containerStyle = 'xl:container xl:mx-auto';
  

  return (
    <section id="projects" className=' bg-zinc-color pb-8 dark:bg-gray900-color scroll-mt-14'>
      <div className={`${containerStyle} px-4 md:px-8 lg:px-0 pt-6 `} >
        <Htext>Projects</Htext>

        <div className="">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row py-4 gap-6 items-center border-b border-graytwo-color last:border-none">
              <div className="md:w-2/5">
              <a href={project.image} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt="" className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 ease-in  cursor-pointer" />
                </a>
              </div>

              <div className="md:w-3/5 flex flex-col space-y-6 relative ">
                <h2 className="font-semibold text-xl xl:text-xl 2xl:text-2xl text-brand-color">{project.title}</h2>
                <p className=" text-gray-color dark:text-gray400-color text-base xl:text-lg 2xl:text-xl ">{project.description}</p>
                <a href={project.link}  target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-brand-color transistion duration-500 dark:text-cyan400-color ">
                  <span className="text-base xl:text-base 2xl:text-xl ">Github Link</span>
                  <HiOutlineArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  )
}

export default Projects;