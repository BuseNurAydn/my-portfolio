import Htext from "../shared/Htext";
import { projects } from "../utils/projectsData";
import { SlActionRedo } from "react-icons/sl";

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id="projects" className="px-4 md:px-0 bg-zinc-color pb-8">
      <div className="pt-6 md:container md:mx-auto ">
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
                <h2 className="font-semibold text-xl text-brand-color">{project.title}</h2>
                <p className=" text-gray-color">{project.description}</p>
                <a href={project.link}  target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 underline underline-offset-4 hover:text-brand-color transistion duration-500 ">
                  <span>Github Link</span>
                  <SlActionRedo />
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