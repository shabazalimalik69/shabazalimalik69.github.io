import React, { useEffect } from "react";
import Contact from "./components/Contact";
import GitHubStat from "./components/GitHubStat";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  useEffect(() => {
    document.title = "Shabaz Ali Malik - Full Stack & AI Engineer | Node.js • TypeScript • React.js • Generative AI";
  }, []);

  return (
    <div className="bg-[#0b1320] min-h-screen text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <Home />
      <Skills />
      <TechStack />
      <Experience />
      <Projects />
      <Education />
      <GitHubStat />
      <Contact />
    </div>
  );
}

export default App;