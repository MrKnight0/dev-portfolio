import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "PWA - Seguimiento de QR",
      description:
        "Sistema multiplataforma enfocado en el seguimiento de envíos realizados a faenas conservando un solo código QR",
      tech: ["Node.js", "Express", "MongoDB", "React", "PWA", "Tailwindcss"],
      github: "https://github.com/MrKnight0/fronted-qr-app",
      demo: "",
    },
    {
      title: "Nube Local",
      description:
        "Aplicación frontend y backend para almacenamiento de archivos en nube local. MongoDB.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwindcss"],
      github: "https://github.com/MrKnight0/file-manager-server",
      demo: "",
    },
    {
      title: "API de Productos",
      description:
        "API REST con CRUD de productos, validaciones y testing profesional.",
      tech: ["Node.js", "Express", "MongoDB", "Jest"],
      github: "https://github.com/MrKnight0/node-crud-api-with-pro-validations",
      demo: "https://node-crud-api-with-pro-validations-1.onrender.com",
    },
    {
      title: "Aplicación de Chat en tiempo real",
      description: "Aplicación de conversaciones en tiempo real",
      tech: ["Node.js", "Express", "MongoDB", "Socket.IO"],
      github: "https://github.com/MrKnight0/node-realtime-chat-app",
      demo: "https://realtime-client-app.vercel.app/",
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
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
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
            className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-green-500/40 transition-shadow"
          >
            {/* Contenido */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-green-600">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-4">{proj.description}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-500/20 text-green-700 px-2 py-1 rounded-lg text-sm"
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
                  className="flex items-center gap-1 hover:text-green-600"
                >
                  <Github size={18} /> GitHub
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-green-600"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
