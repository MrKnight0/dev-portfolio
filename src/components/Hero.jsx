import { motion } from "framer-motion";

export default function Hero() {
  // Variantes de animación
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // retrasa cada hijo
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 text-white px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        {/* Título */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-6xl font-bold mb-4 font-sans"
        >
          {" Emanuel Quispe "}
          <span className="text-green-600">Backend Nodejs Developer</span>
        </motion.h2>

        {/* Descripción */}
        <motion.p
          variants={item}
          className="text-gray-300 max-w-xl mb-6"
        >
          Me especializo en construir APIs eficientes, seguras y escalables.
          Amante de Node.js, bases de datos y buenas prácticas de software.
        </motion.p>

        {/* Botón */}
        <motion.a
          variants={item}
          href="#projects"
          className="bg-green-500 hover:bg-green-800 px-6 py-3 rounded-xl font-medium"
        >
          Ver proyectos
        </motion.a>
      </motion.div>
    </section>
  );
}
