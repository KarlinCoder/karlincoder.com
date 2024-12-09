import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import Experiencia from "./components/sections/Experiencia";
import Skills from "./components/sections/Skills";
import Proyectos from "./components/sections/Proyectos";

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Experiencia />
      <Skills />
      <Proyectos />
    </div>
  );
};

export default App;
