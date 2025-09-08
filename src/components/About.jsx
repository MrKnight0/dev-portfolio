import { motion } from "framer-motion";

export default function About() {
  const experiences = [
    {
      year: "2025",
      title: "Desarrollador Backend Freelance",
      description:
        "Desarrollo de APIs REST con Node.js y Express. Integración de bases de datos MongoDB y PostgreSQL.",
    },
    {
      year: "2024",
      title: "Proyecto Personal: Sistema de Autenticación",
      description:
        "Implementación de JWT y bcrypt para manejo seguro de usuarios y sesiones.",
    },
    {
      year: "2023",
      title: "Bootcamp Desarrollo Web",
      description:
        "Formación intensiva en desarrollo fullstack con enfoque en backend, arquitecturas limpias y despliegue en la nube.",
    },
  ];

  const education = [
    {
      year: "2022",
      title: "Diplomado en Desarrollo de Software",
      description:
        "Aprendizaje en fundamentos de programación, algoritmos, estructuras de datos y buenas prácticas.",
    },
    {
      year: "2020",
      title: "Carrera Técnica en Informática",
      description:
        "Base sólida en redes, bases de datos y programación orientada a objetos.",
    },
    {
      year: "2018",
      title: "Curso de Introducción a JavaScript",
      description:
        "Primeros pasos en el desarrollo web y lógica de programación.",
    },
  ];

  // Variantes para la animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-900 text-white"
    >
      {/* Presentación */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-300">
          Soy un <span className="text-indigo-400">desarrollador backend</span>
          apasionado por construir sistemas escalables, seguros y eficientes. 
          Aquí un resumen de mi trayectoria:
        </p>
      </div>

      {/* Experiencia */}
      <div className="w-full max-w-3xl mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-indigo-400">💼 Experiencia</h3>
        <div className="relative border-l-2 border-indigo-500 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-indigo-500 rounded-full border-2 border-gray-900"></div>
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <span className="text-indigo-400 text-sm">{exp.year}</span>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Educación */}
      <div className="w-full max-w-3xl">
        <h3 className="text-2xl font-semibold mb-6 text-indigo-400">🎓 Educación</h3>
        <div className="relative border-l-2 border-indigo-500 pl-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-indigo-500 rounded-full border-2 border-gray-900"></div>
              <h4 className="text-xl font-semibold">{edu.title}</h4>
              <span className="text-indigo-400 text-sm">{edu.year}</span>
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
