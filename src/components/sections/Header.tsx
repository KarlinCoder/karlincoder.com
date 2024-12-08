import { FaGithub } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <header className="flex gap-5 flex-wrap justify-center items-center min-h-[570px] bg-gradient-to-tl from-neutral-900 to-[#130a06]">
      <div className="max-w-[350px] overflow-hidden rounded-full">
        <img
          src="./././public/avatar.jpg"
          alt="imagen mia"
          className="w-full h-full"
        />
      </div>
      <aside className="max-w-[400px] ">
        <h1 className="font-carltine-cm text-4xl text-yellow-400">¡Hola!</h1>
        <p className="text-pretty text-neutral-200 font-opensans-cm">
          Soy un desarrollador frontend apasionado por crear experiencias web
          atractivas y funcionales. Mi objetivo es combinar estética y
          rendimiento para ofrecer soluciones que no solo se vean bien, sino que
          también brinden una excelente experiencia al usuario. ¡Explora mi
          portafolio y descubre cómo puedo ayudarte a llevar tu proyecto al
          siguiente nivel!
        </p>
        <footer className="flex gap-3 justify-start items-center mt-4">
          <button className="bg-red-500 hover:shadow-lg active:bg-red-400 hover:shadow-red-900 transition-shadow  px-4 py-2 text-sm text-white rounded-[4px]">
            Descargar CV
          </button>
          <a
            href="https://github.com/KarlinCoder"
            target="_blank"
            className="inline-block p-1 scale-[1.5] text-white bg-red-500 hover:shadow-lg active:bg-red-400 hover:shadow-red-900 transition-shadow rounded-[4px]"
          >
            <FaGithub />
          </a>
        </footer>
      </aside>
    </header>
  );
};
