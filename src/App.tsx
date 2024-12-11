import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import Experiencia from "./components/sections/Experiencia";
import Skills from "./components/sections/Skills";
import Proyectos from "./components/sections/Proyectos";
import Personal from "./components/sections/Personal";
import Footer from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Experiencia />
        <Skills />
        <Proyectos />
        <Personal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
