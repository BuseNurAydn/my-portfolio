import { skills } from '../utils/skillsData'
import Htext from '../shared/Htext';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerStyle = 'xl:container xl:mx-auto px-4 md:px-0 ';

  return (
    <section id="skills" className="py-12 bg-zinc-50 dark:bg-gray900-color transition-colors duration-500">
      <div className={`${containerStyle}`}>
        <div className="flex flex-col items-center mb-12">
          <Htext>Skills & Technologies</Htext>
          <div className="h-1 w-32 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center transition-all duration-300"
            >
              {/* Logo */}
              <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-4">
                <img 
                  src={skill.image} 
                  alt={skill.title} 
                  className="max-w-full max-h-full object-contain transition-all duration-500" 
                />
              </div>

              <h3 className="relative z-10 text-sm md:text-base font-semibold text-slate-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Alt Çizgi Efekti */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-cyan-500 group-hover:w-1/2 transition-all duration-300 rounded-t-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Skills;