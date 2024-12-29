import Htext from "../shared/Htext";
import { projects } from "../utils/projectsData";
import { SlActionRedo } from "react-icons/sl";

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id="projects" className="px-4 md:px-0 bg-zinc-100 pb-8">
      <div className="pt-6 md:container md:mx-auto ">
        <Htext>Projects</Htext>

        <div className="">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row py-4 gap-4 items-center border-b border-gray-300 last:border-none">
              <div className="md:w-2/5">
                <img src={project.image} alt="" className="rounded-lg shadow-xl" />
              </div>

              <div className="md:w-3/5 flex flex-col space-y-6 relative ">
                <h2 className="font-semibold text-xl text-teal-600">{project.title}</h2>
                <p className=" text-gray-600">{project.description}</p>
                <a href={project.link}  target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 underline underline-offset-4 hover:text-teal-600 ">
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