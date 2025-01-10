
import Htext from "../shared/Htext";
import { experiences } from "../utils/experienceData"
import { motion } from 'framer-motion' //animasyon için //framer animation



const Experiences = () => {

  const containerStyle = 'xl:container xl:mx-auto px-4 md:px-6 lg:px-0 ';

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Başlangıç konumu (aşağıda)
    visible: { opacity: 1, y: 0 }, // Göründüğünde (yukarı hareket)
  };

  return (
    <section id="experiences" className="dark:bg-gray800-color scroll-mt-14">
      <div className={`${containerStyle}`}>
      <div className="pt-6">
        <Htext>Experiences</Htext>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }} // divler arasında gecikme
            className="grid md:grid-cols-2 text-center gap-x-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-slate-color rounded-lg cursor-pointer font-semibold mb-8 shadow-lg hover:shadow-xl duration-300 "
              >
                <h2 className="text-second-color 2xl:text-xl">{experience.title}</h2>
                <p className="text-sm xl:text-base 2xl:text-lg text-sky-color">{experience.company} | {experience.date}</p>
                <p className="text-sm 2xl:text-base text-gray-color">{experience.description}</p>
              </motion.div>
            ))}
          </motion.div>
      </div>
      </div>
    </section>
  )
}
export default Experiences;