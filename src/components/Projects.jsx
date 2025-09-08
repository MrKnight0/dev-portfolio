import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "API de Autenticación",
      description:
        "Sistema de autenticación con JWT, bcrypt y roles de usuario.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/tuusuario/auth-api",
      demo: "https://auth-api-demo.com",
      image: "https://via.placeholder.com/400x250?text=Auth+API",
    },
    {
      title: "Gestor de Tareas",
      description:
        "Aplicación backend para crear, editar y eliminar tareas con PostgreSQL.",
      tech: ["Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/tuusuario/task-manager",
      demo: "",
      image: "https://via.placeholder.com/400x250?text=Task+Manager",
    },
    {
      title: "API de Productos",
      description:
        "API REST con CRUD de productos, validaciones y testing con Jest.",
      tech: ["Node.js", "Express", "MongoDB", "Jest"],
      github: "https://github.com/tuusuario/product-api",
      demo: "",
      image: "https://via.placeholder.com/400x250?text=Product+API",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">🚀 Proyectos</h2>
        <p className="text-gray-300">
          Algunos de mis trabajos más destacados como backend developer:
        </p>
      </div>

      {/* Grid de proyectos */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-indigo-500/40 transition-shadow"
          >
            {/* Imagen del proyecto */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />

            {/* Contenido */}
            <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                  {proj.title}
                </h3>
                <p className="text-gray-300 mb-4">{proj.description}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-lg text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex space-x-4 mt-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-400"
                  >
                    <Github size={18} /> GitHub
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-indigo-400"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
