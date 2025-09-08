import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from './components/TechStack'
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <TechStack/>
      <Contact/>
    </div>
  );
}
