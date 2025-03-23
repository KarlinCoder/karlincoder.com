import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiPython,
  SiVuetify,
  SiVite,
  SiMarkdown,
  SiCssmodules,
} from "react-icons/si";

// Interfaz actualizada
interface ProjectCardProps {
  title: string; // Título del proyecto (obligatorio)
  children: ReactNode; // Descripción del proyecto (obligatorio)
  link: string; // Enlace al proyecto (obligatorio)
  github: string; // Enlace al repositorio de GitHub (obligatorio)
  image: string; // URL de la imagen del proyecto (obligatorio)
  technologies?: string[]; // Tecnologías utilizadas (opcional)
}

// Mapeo de tecnologías a íconos
// Mapeo de tecnologías a íconos con firma de índice
const technologyIcons: { [key: string]: ReactNode } = {
  react: <SiReact size={16} />,
  vue: <SiVuedotjs size={16} />,
  node: <SiNodedotjs size={16} />,
  expressjs: <SiExpress size={16} />,
  tailwind: <SiTailwindcss size={16} />,
  bootstrap: <SiBootstrap size={16} />,
  css: <SiCss3 size={16} />,
  javascript: <SiJavascript size={16} />,
  typescript: <SiTypescript size={16} />,
  git: <SiGit size={16} />,
  python: <SiPython size={16} />,
  vuetify: <SiVuetify size={16} />,
  vite: <SiVite size={16} />,
  markdown: <SiMarkdown size={16} />,
  cssmodules: <SiCssmodules size={16} />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  children,
  link,
  github,
  image,
  technologies = [], // Valor por defecto: array vacío
}) => {
  return (
    <article className="flex flex-col max-w-[600px] min-h-[300px] justify-between overflow-hidden transition-all duration-300 ease-in-out transform shadow-lg sm:flex-row bg-neutral-900 bg-opacity-80 rounded-xl hover:shadow-2xl hover:-translate-y-1 border-[1px] border-neutral-800">
      {/* Imagen del proyecto */}
      <aside className="relative w-full sm:w-[40%] h-48 sm:h-auto">
        <img
          src={image || "/images/projects/youtubedownloader.webp"}
          alt="project screenshot"
          className="object-cover w-full h-full transition-all duration-300 ease-in-out brightness-75 hover:brightness-100"
        />
        <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent"></div>
      </aside>

      {/* Contenido del proyecto */}
      <section className="flex flex-col justify-between p-5 w-full sm:w-[60%]">
        <header className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-neutral-100 font-inter">
            {title || "[PROJECT TITLE]"}
          </h2>
          <p className="text-sm text-neutral-300">{children}</p>

          {/* Sección de tecnologías */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => {
                const techLower = tech.toLowerCase(); // Convertir a minúsculas para coincidir con el mapeo
                if (techLower in technologyIcons) {
                  const Icon = technologyIcons[techLower]; // Obtener el ícono correspondiente
                  return (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md text-neutral-200 bg-neutral-700"
                    >
                      {Icon && Icon} {/* Mostrar el ícono si existe */}
                      {tech}
                    </span>
                  );
                }
                return null; // Si la tecnología no tiene un ícono asociado, no renderices nada
              })}
            </div>
          )}
        </header>
        <footer className="flex gap-4 mt-4">
          {/* Botón Visitar */}
          <a
            href={link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors duration-200 hover:text-blue-500"
          >
            Visitar
            <FaArrowUpRightFromSquare size={16} />
          </a>
          {/* Botón GitHub */}
          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-sm font-medium text-green-400 transition-colors duration-200 hover:text-green-500"
          >
            GitHub
            <BsGithub size={16} />
          </a>
        </footer>
      </section>
    </article>
  );
};

export default ProjectCard;
