import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";

function App() {
    return (
      <div>
       <Navbar/>
       <Home/>
       <About/>
       <TechStack/>
       <Skills/>
       <Projects/>
       <Contact/>
      </div>
    );
  }
  
  export default App;