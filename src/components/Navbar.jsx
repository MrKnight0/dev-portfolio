import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>

        {/* Links (pantallas grandes) */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about" className="hover:text-green-500">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Proyectos</a></li>
          <li><a href="#stack" className="hover:text-indigo-400">Stack</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contacto</a></li>
        </ul>

        {/* Botón móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-3 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-gray-700">
          <li><a onClick={() => setIsOpen(false)} href="#about" className="hover:text-indigo-400">Sobre mí</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#projects" className="hover:text-indigo-400">Proyectos</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#stack" className="hover:text-indigo-400">Stack</a></li>
          <li><a onClick={() => setIsOpen(false)} href="#contact" className="hover:text-indigo-400">Contacto</a></li>
        </ul>
      )}
    </nav>
  );
}
