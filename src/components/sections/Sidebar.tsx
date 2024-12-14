import React from "react";
import ReactDOM from "react-dom";
import { FaCubesStacked } from "react-icons/fa6";
import { PiUserList } from "react-icons/pi";
import { RiBookShelfLine, RiUser2Fill } from "react-icons/ri";

interface SidebarProps {
  handleShow: (value: boolean) => void;
}

const linkClasses =
  "flex justify-start gap-3 items-center text-[1rem] px-5 py-3 cursor-pointer hover:bg-blue-900 hover:bg-opacity-80 active:bg-blue-800 active:bg-opacity-20 rounded-md";
const iconClasses = "text-[2rem]";

const Sidebar: React.FC<SidebarProps> = ({ handleShow }) => {
  return ReactDOM.createPortal(
    <aside
      onClick={() => handleShow(false)}
      className={`fixed flex justify-end items-center z-[99] top-0 sidebar-cm text-white w-full sidebar-cm bg-gradient-to-l from-[#00000077] from-98% to-[#00000010]`}
    >
      <nav className="flex p-5 flex-col justify-center w-full max-w-[270px] h-dvh bg-blue-950 shadow-[0_0_40px_#0008]">
        <ul>
          <li>
            <a
              className={linkClasses}
              onClick={() => handleShow(false)}
              href="#experiencia"
            >
              <PiUserList className={iconClasses} />
              <p>Experiencia</p>
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={() => handleShow(false)}
              href="#skills"
            >
              <FaCubesStacked className={iconClasses} />
              <p>Skills</p>
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={() => handleShow(false)}
              href="#proyectos"
            >
              <RiBookShelfLine className={iconClasses} />
              <p>Proyectos</p>
            </a>
          </li>
          <li>
            <a
              className={linkClasses}
              onClick={() => handleShow(false)}
              href="#personal"
            >
              <RiUser2Fill className={iconClasses} />
              <p>Personal</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>,
    document.body
  ) as React.ReactNode;
};

export default Sidebar;
