
import Htext from "../shared/Htext";
import { experiences } from "../utils/experienceData"
import { motion } from 'framer-motion' //animasyon için //framer animation

type Props = {}

const Experiences = (props: Props) => {
  return (
    <section id="experiences" className="md:container md:mx-auto px-2 my-4">
      <div className="mt-6">
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
          <div className="grid md:grid-cols-2 text-center px-2 gap-x-8">
            {experiences.map((experience, index) => (
              <div key={index} className="p-6 bg-slate-200 rounded-lg cursor-pointer font-semibold mb-8 shadow-lg hover:shadow-xl duration-400 transition-transform  transform hover:scale-90 hover:-translate-y-1">
                <h2 className=" text-teal-900">{experience.title}</h2>
                <p className="text-sm text-sky-800">{experience.company} | {experience.date}</p>
                <p className="text-sm text-gray-600">{experience.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Experiences;