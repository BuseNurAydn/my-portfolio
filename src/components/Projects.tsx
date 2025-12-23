import { projects } from "../utils/projectsData";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Htext from '../shared/Htext';

const Projects = () => {
  const containerStyle = 'xl:container xl:mx-auto px-4 md:px-0 py-12';

  return (
    <section id="projects" className='bg-zinc-50 dark:bg-gray900-color transition-colors duration-500'>
      <div className={`${containerStyle}`}>
        <div className="flex flex-col items-center mb-12">
          <Htext>Projects</Htext>
          <div className="h-1 w-16 bg-cyan-500 rounded-full"></div>
        </div>

      {/* Proje Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Proje Bilgileri */}
            <div className="p-6 space-y-4">
              <h3 className="font-bold text-lg text-slate-700 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-gray-400 text-sm ">
                {project.description}
              </p>

              <div className="pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 dark:text-cyan-500 hover:gap-4 transition-all"
                >
                  Github Link <HiOutlineArrowRight className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section >
  );
}
export default Projects;