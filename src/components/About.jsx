import { motion } from "framer-motion";

export default function About() {
  const experiences = [
    {
      year: "Jul 2025 - Sep 2025",
      title: "Practica Profesional Ing Informática",
      description:
        "Desarrollo e implementación de PWA enfocada en control de seguimiento de envíos a faenas de la empresa - Kinross Copiapo",
    },
    {
      year: "May 2024 - Ene 2025",
      title: "Analista de Sistemas",
      description:
        "Encargado de administración de sistemas. Automatizaciones vía tecnología Javascript. Administración de bases de datos SQL Server y migración de software ERP - Transportes Verasay",
    },
    {
      year: "Ago 2023 - Abr 2024",
      title: "Técnico Informático",
      description:
        "Funciones de Soporte Usuarios y automatizaciones de procesos empresariales vía Google Script - Transportes Verasay",
    },
  ];

  const education = [
    {
      year: "2024",
      title: "Ingenieria Informática - Inacap Copiapó",
      description:
        "Aprendizaje en fundamentos de programación, algoritmos, estructuras de datos, buenas práticas e implementación de software",
    },
    {
      year: "2023",
      title: "Analista Programador - Inacap Copiapó",
      description:
        "Base sólida en redes, bases de datos y programación orientada a objetos",
    },
    {
      year: "2019",
      title: "Programador - Instituto Comercial Copiapó",
      description:
        "Primeros pasos en el desarrollo web, modelamiento de base de datos y lógica de programación",
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
          Soy un <span className="text-green-600">desarrollador backend </span>
          apasionado por Nodejs, microservicios y diseño de sistemas seguros y eficientes. 
          Aquí un resumen de mi trayectoria:
        </p>
      </div>

      {/* Experiencia */}
      <div className="w-full max-w-3xl mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-green-600">Experiencia</h3>
        <div className="relative border-l-2 border-green-800 pl-6">
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
              <div className="absolute -left-3 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <span className="text-green-600 text-sm">{exp.year}</span>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Educación */}
      <div className="w-full max-w-3xl">
        <h3 className="text-2xl font-semibold mb-6 text-green-600">Educación</h3>
        <div className="relative border-l-2 border-green-800 pl-6">
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
              <div className="absolute -left-3 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
              <h4 className="text-xl font-semibold">{edu.title}</h4>
              <span className="text-green-600 text-sm">{edu.year}</span>
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
