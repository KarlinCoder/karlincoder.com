import { useState } from "react";
import Sidebar from "./sections/Sidebar";
import { HiMenu, HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";

interface MenuItem {
  text: string;
  link: string;
}

const MENU_ITEMS: Array<MenuItem> = [
  { text: "Inicio", link: "header" },
  { text: "Experiencia", link: "experiencia" },
  { text: "Skills", link: "skills" },
  { text: "Proyectos", link: "proyectos" },
  { text: "Servicios", link: "servicios" },
  { text: "Personal", link: "personal" },
];

export const Navbar: React.FC = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowMobileSidebar((prev) => !prev);
  };

  const closeSidebar = () => {
    setShowMobileSidebar(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#111111d8] backdrop-blur-lg border-b border-yellow-800 px-6 py-4">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo y Avatar */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 overflow-hidden rounded-full shadow-lg bg-neutral-900">
            <img
              src="/images/avatar.webp"
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold leading-tight text-yellow-600">
              KarlinCoder
            </h2>
            <p className="text-sm text-neutral-400">Web Frontend Developer</p>
          </div>
        </div>

        {/* Menú de navegación (escritorio) */}
        <div className="items-center hidden gap-6 md:flex text-neutral-300">
          <ul className="flex gap-6 text-sm font-medium">
            {MENU_ITEMS.map(({ text, link }) => (
              <li key={text}>
                <Link
                  smooth={true}
                  duration={500}
                  to={link}
                  className="transition-colors duration-300 cursor-pointer hover:text-yellow-500 hover:underline hover:underline-offset-4"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-2xl text-neutral-100">
            {showMobileSidebar ? <HiMenuAlt1 /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Sidebar móvil */}
      {showMobileSidebar && (
        <Sidebar isShowed={showMobileSidebar} handleShow={closeSidebar} />
      )}
    </nav>
  );
};

export default Navbar;
