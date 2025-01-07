
import Htext from "../shared/Htext";
import { experiences } from "../utils/experienceData"
import { motion } from 'framer-motion' //animasyon için //framer animation



const Experiences = () => {

  const containerStyle = 'xl:container xl:mx-auto px-4 md:px-6 lg:px-2 ';

  return (
    <section id="experiences" className="dark:bg-gray800-color scroll-mt-14">
      <div className={`${containerStyle}`}>
      <div className="pt-6">
        <Htext>Experiences</Htext>
        <motion.div
          animate={{ opacity: 1 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 50 }, // Aşağıdan başlıyor
            visible: { opacity: 1, y: 0 }, // Yukarıya doğru hareket ediyor
          }}
        >
          <div className="grid md:grid-cols-2 text-center gap-x-8 ">
            {experiences.map((experience, index) => (
              <div key={index} className="p-6 bg-slate-color rounded-lg cursor-pointer font-semibold mb-8 shadow-lg hover:shadow-xl duration-500 transition-transform hover:scale-90 hover:-translate-y-1">
                <h2 className="text-second-color">{experience.title}</h2>
                <p className="text-sm text-sky-color">{experience.company} | {experience.date}</p>
                <p className="text-sm text-gray-color">{experience.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
export default Experiences;