import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNestjs,
  SiPwa,
  SiMongodb as SiMongoose,
  SiSequelize,
  SiSqlite,
  SiGithub
} from "react-icons/si";

export default function TechStackCategorized() {
  const categories = [
    {
      name: "Lenguajes",
      items: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ],
    },
    {
      name: "Frameworks / Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      ],
    },
    {
      name: "Bases de datos",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Mongoose", icon: <SiMongoose className="text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-blue-600" /> },
        { name: "Sequelize", icon: <SiSequelize className="text-indigo-400" /> },
      ],
    },
    {
      name: "Frontend / PWA",
      items: [
        { name: "React", icon: <SiReact className="text-sky-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "PWA", icon: <SiPwa className="text-indigo-400" /> },
      ],
    },
    {
      name: "Herramientas",
      items: [
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="stack" className="px-6 py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">⚙️ Tech Stack</h2>
        <p className="text-gray-300">
          Tecnologías y herramientas que utilizo para construir soluciones
          backend y aplicaciones progresivas:
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">{cat.name}</h3>
            <div className="grid grid-cols-3 gap-4">
              {cat.items.map((tech, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center gap-2 bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-indigo-500/40 transition-shadow"
                >
                  <div className="text-3xl">{tech.icon}</div>
                  <p className="text-sm text-gray-300">{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
