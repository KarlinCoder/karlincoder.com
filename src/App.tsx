import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import Experiencia from "./components/sections/Experiencia";
import Skills from "./components/sections/Skills";
import Proyectos from "./components/sections/Proyectos";

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Experiencia />
        <Skills />
        <Proyectos />
      </main>
    </div>
  );
};

export default App;
