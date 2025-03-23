import React from "react";
import ReactDOM from "react-dom";
import { FaCubesStacked } from "react-icons/fa6";
import { PiUserList } from "react-icons/pi";
import { RiBookShelfLine, RiUser2Fill } from "react-icons/ri";
import { TbTools } from "react-icons/tb";

interface SidebarProps {
  isShowed: boolean;
  handleShow: (value: boolean) => void;
}

// Nuevas clases para los botones: estilo renovado
const linkClasses =
  "flex justify-start gap-3 items-center text-[1rem] hover:bg-neutral-700 px-5 py-3 cursor-pointer  rounded-lg transition-all duration-300 shadow-md hover:shadow-lg";

const iconClasses = "text-[2rem]";

const Sidebar: React.FC<SidebarProps> = ({ isShowed, handleShow }) => {
  return ReactDOM.createPortal(
    <aside
      onClick={() => handleShow(false)}
      className={`fixed flex justify-end items-center z-[99] top-0 right-[-100%] text-white w-full bg-gradient-to-l from-[#00000052] from-90% to-[#00000000] ${
        isShowed ? "animation-on" : "animation-off"
      }`}
    >
      <nav className="flex p-5 flex-col justify-center w-full max-w-[270px] h-screen bg-neutral-800 shadow-[0_0_40px_#0008]">
        <ul>
          <li>
            <a
              className={linkClasses}
              onClick={() => {
                handleShow(false);
              }}
              href="#experiencia"
            >
              <PiUserList className={iconClasses} />
              <p>Experiencia</p>
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={() => {
                handleShow(false);
              }}
              href="#skills"
            >
              <FaCubesStacked className={iconClasses} />
              <p>Skills</p>
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={() => {
                handleShow(false);
              }}
              href="#proyectos"
            >
              <RiBookShelfLine className={iconClasses} />
              <p>Proyectos</p>
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={() => {
                handleShow(false);
              }}
              href="#personal"
            >
              <RiUser2Fill className={iconClasses} />
              <p>Personal</p>
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={() => {
                handleShow(false);
              }}
              href="#services"
            >
              <TbTools className={iconClasses} />
              <p>Servicios</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>,
    document.body
  ) as React.ReactNode;
};

export default Sidebar;
