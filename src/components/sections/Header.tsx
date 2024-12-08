import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const buttonClass =
  "grid place-content-center rounded-md bg-neutral-700 bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-20 transition-colors cursor-pointer p-[11px] text-sm text-white border border-neutral-600";

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 flex-wrap justify-center items-center h-fit py-[90px] px-8">
      <div className="max-w-[300px] overflow-hidden rounded-full">
        <img src="/avatar.jpg" alt="imagen mia" className="w-full h-full" />
      </div>
      <aside className="max-w-[400px] ">
        <h1 className="font-carltine-cm text-4xl text-yellow-400">
          ¡Hola! 👋 Soy Giancarlo
        </h1>
        <p className="text-pretty text-neutral-200 font-opensans-cm">
          Desarrollador{" "}
          <span className="text-blue-400 font-bold">front-end</span> apasionado
          por crear{" "}
          <span className="text-blue-400 font-bold">experiencias</span> web
          atractivas y funcionales. ¡Explora mi portafolio y descubre cómo puedo{" "}
          <span className="text-blue-400 font-bold">ayudarte</span> a llevar tu
          proyecto al siguiente nivel!
        </p>
        <footer className="flex gap-2 justify-start items-center mt-4">
          <a
            href="https://github.com/KarlinCoder"
            target="_blank"
            className={buttonClass}
          >
            <FaWhatsapp className="scale-[1.5]" />
          </a>
          <a
            href="https://github.com/KarlinCoder"
            target="_blank"
            className={buttonClass}
          >
            <FaGithub className="scale-[1.5]" />
          </a>
          <a
            href="https://instagram.com/its.karlin.coder"
            target="_blank"
            className={buttonClass}
          >
            <FaInstagram className="scale-[1.5]" />
          </a>
          <a
            href="https://github.com/KarlinCoder"
            target="_blank"
            className={buttonClass}
          >
            <FaFacebook className="scale-[1.5]" />
          </a>
        </footer>
      </aside>
    </header>
  );
};

export default Header;
