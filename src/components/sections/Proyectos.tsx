import { RiBookShelfLine } from "react-icons/ri";
import ProjectCard from "./ProjectCard";

const PARAGRAPH_CLASSES =
  "text-[.9rem] text-neutral-300 leading-5 font-opensans-cm";
const SPAN_CLASSES = "text-yellow-500 font-bold";

const Proyectos: React.FC = () => {
  return (
    <section
      id="proyectos"
      className="flex flex-col gap-6 justify-center items-center h-fit py-[60px] px-8"
    >
      <h2 className="flex items-center gap-2 font-sans font-bold text-4xl text-neutral-300">
        <p>Proyectos</p>
        <RiBookShelfLine className="mt-2" />
      </h2>
      <main className="flex flex-wrap justify-center items-center gap-5 max-w-[1200px]">
        <ProjectCard
          title="Youtube Video Downloader"
          image="/images/projects/youtubedownloader.webp"
          link="https://youtube-dl-2025.vercel.app/"
          github="https://github.com/KarlinCoder/youtube-dl"
        >
          <p className={PARAGRAPH_CLASSES}>
            Descargador moderno de videos de YouTube, con un{" "}
            <span className={SPAN_CLASSES}>back-end</span> distribuido en
            múltiples <span className={SPAN_CLASSES}>servidores</span>. Su
            interfaz de usuario es minimalista y se apoya en mi{" "}
            <span className={SPAN_CLASSES}>API Rest</span> sencilla para
            realizar búsquedas.
          </p>
        </ProjectCard>
        <ProjectCard
          title="Diccionario Español"
          image="/images/projects/diccionario.webp"
          link="https://dictionary-es.vercel.app/"
          github="https://github.com/KarlinCoder/dictionary-es"
        >
          <p className={PARAGRAPH_CLASSES}>
            Diccionario en español intuitivo que utiliza una{" "}
            <span className={SPAN_CLASSES}>API Rest</span> de terceros para
            facilitar las búsquedas de palabras y definiciones.
          </p>
        </ProjectCard>
        <ProjectCard
          title="Piedra, Papel, Tijeras"
          image="/images/projects/winofhands.webp"
          link="https://winofhands.vercel.app/"
          github="https://github.com/KarlinCoder/piedra-papel-tijera"
        >
          <p className={PARAGRAPH_CLASSES}>
            Un juego clásico de Piedra, Papel o Tijeras que almacena la
            puntuación del usuario por ronda utilizando{" "}
            <span className={SPAN_CLASSES}>localStorage</span>, ofreciendo una
            experiencia interactiva y divertida.
          </p>
        </ProjectCard>
        <ProjectCard
          title="Moovie Searcher"
          image="/images/projects/mooviesearch.webp"
          link="https://mooviesearch.vercel.app/"
          github="https://github.com/KarlinCoder/mooviesearch.vercel.app"
        >
          <p className={PARAGRAPH_CLASSES}>
            Buscador de películas que presenta información detallada como fecha,
            valoración, sinopsis y título completo. Utiliza una{" "}
            <span className={SPAN_CLASSES}>API Rest</span> para realizar las
            búsquedas de manera eficiente.
          </p>
        </ProjectCard>
        <ProjectCard
          title="Reparaciones FIRO"
          image="/images/projects/firoreparaciones.webp"
          link="https://firo-reparaciones.es/"
          github="https://github.com/KarlinCoder/firo-reparaciones.es"
        >
          <p className={PARAGRAPH_CLASSES}>
            Una moderna <span className={SPAN_CLASSES}>Landing Page</span> que
            utiliza <span className={SPAN_CLASSES}>animaciones CSS</span> para
            mejorar la experiencia del usuario. El formulario de contacto envía
            mensajes a través de <span className={SPAN_CLASSES}>emailjs</span>.
          </p>
        </ProjectCard>
        <ProjectCard
          title="Youtube Search API"
          image="/images/projects/youtube-search-api.webp"
          link="https://youtube-search-api-2-edh3.onrender.com/api/search?q=programacion+ats"
          github="https://github.com/KarlinCoder/youtube-search-api"
        >
          <p className={PARAGRAPH_CLASSES}>
            Una <span className={SPAN_CLASSES}>API Rest</span> eficiente para
            realizar búsquedas en <span className={SPAN_CLASSES}>YouTube</span>,
            devolviendo un <span className={SPAN_CLASSES}>JSON</span> que
            incluye un <span className={SPAN_CLASSES}>Array</span> con detalles
            de cada video, como ID, título, miniatura, duración y URL.
          </p>
        </ProjectCard>
      </main>
    </section>
  );
};

export default Proyectos;
