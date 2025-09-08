import { motion } from "framer-motion";
import { SiGithub, SiLinkedin} from "react-icons/si";

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 }
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="px-6 py-20 bg-gray-800 text-white">
      <motion.div 
        variants={container} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2 variants={item} className="text-3xl font-bold mb-4 text-indigo-400">
          📩 Contáctame
        </motion.h2>
        <motion.p variants={item} className="text-gray-300 mb-12">
          ¿Tienes un proyecto o idea en mente? ¡Hablemos! 
          Puedes enviarme un mensaje directamente o contactarme por mis redes.
        </motion.p>

        {/* Formulario */}
        <motion.form variants={item} className="flex flex-col gap-4 bg-gray-900 p-6 rounded-2xl shadow-md">
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-400"
          />
          <textarea
            placeholder="Mensaje"
            rows="5"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Enviar
          </button>
        </motion.form>

        {/* Redes sociales */}
        <motion.div variants={item} className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/MrKnight0" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <SiGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/emanuel-quispe-3a0523261/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <SiLinkedin size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
