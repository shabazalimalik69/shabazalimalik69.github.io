import Contact from "./components/Contact";
import GitHubStat from "./components/GitHubStat";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";

function App() {
  document.title="Shabaz Ali Malik - Full Stack Web Developer"
    return (
      <div>
       <Navbar/>
       <Home/>
       <Skills/>
       <TechStack/>
       <Projects/>
       <GitHubStat/>
       <Contact/>
      </div>
    );
  }
  
  export default App;