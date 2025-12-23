import Htext from "../shared/Htext";
import { experiences } from "../utils/experienceData";
import { motion } from 'framer-motion';

const Experiences = () => {
  const containerStyle = 'xl:container xl:mx-auto px-4 md:px-0 ';

  return (
    <section id="experiences" className="py-12 bg-zinc-50 dark:bg-gray900-color">
      <div className={`${containerStyle}`}>
        <div className="flex flex-col items-center mb-12">
          <Htext>Experiences</Htext>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300"
            >

              <div className="inline-block px-2 py-1 rounded-md bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider mb-4">
                {experience.date}
              </div>

              <div className="mb-4">
                <h2 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">
                  {experience.title}
                </h2>
                <p className="text-md font-medium text-cyan-600 dark:text-cyan-500 mt-1">
                  {experience.company}
                </p>
              </div>

              <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-sm md:text-base italic">
                {experience.description}
              </p>

              {/* Köşe */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-tr-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experiences;