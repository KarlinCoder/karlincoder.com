import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import Experiencia from "./components/sections/Experiencia";
import Skills from "./components/sections/Skills";
import Proyectos from "./components/sections/Proyectos";
import Personal from "./components/sections/Personal";
import Footer from "./components/Footer";
import Services from "./components/sections/Services";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Experiencia />
        <Skills />
        <Proyectos />
        <Services />
        <Personal />
      </main>
      <Footer />
    </>
  );
};

export default App;
