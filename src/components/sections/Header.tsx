import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Element } from "react-scroll";

const Header: React.FC = () => {
  const buttonClass =
    "grid place-content-center rounded-md bg-neutral-700 bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-20 transition-colors cursor-pointer p-[11px] text-sm text-white border border-neutral-600";

  const spanClasses = "text-yellow-400 font-bold";

  return (
    <Element name="header">
      <header className="flex flex-col items-center justify-center gap-5 px-6 py-24 md:flex-row md:py-16">
        {/* Avatar */}
        <div className="relative grid place-content-center w-full max-w-[220px] md:max-w-[300px] h-auto overflow-hidden rounded-full shadow-[0_0_40px_#0007] bg-neutral-900  z-[1]">
          <img
            src="/images/avatar.webp"
            alt="Imagen de perfil de Giancarlo"
            className="w-full h-full object-cover rounded-full z-[3]"
          />
        </div>

        {/* Información personal */}
        <aside className="text-center md:text-left mt-6 md:mt-0 max-w-[400px]">
          <h1>
            <p className="mb-2 text-4xl text-yellow-400 font-carltine-cm">
              ¡Hola! 👋 Soy Giancarlo
            </p>
            <p className="text-pretty text-neutral-200 font-opensans-cm">
              Desarrollador <span className={spanClasses}>front-end</span>{" "}
              apasionado por crear{" "}
              <span className={spanClasses}>experiencias</span> web atractivas y
              funcionales. ¡Explora mi portafolio y descubre cómo puedo{" "}
              <span className={spanClasses}>ayudarte</span> a llevar tu proyecto
              al siguiente nivel!
            </p>
          </h1>

          {/* Redes sociales */}
          <footer className="flex items-center justify-center gap-2 mt-6 md:justify-start">
            <a
              href="https://api.whatsapp.com/send?phone=5352662128&text=Hola%20%F0%9F%91%8B%2C%20vengo%20desde%20su%20portafolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className={buttonClass}
            >
              <FaWhatsapp className="scale-[1.5] text-[#5bc74d]" />
            </a>
            <a
              href="https://github.com/KarlinCoder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
              className={buttonClass}
            >
              <FaGithub className="scale-[1.5] text-[#7a6686]" />
            </a>
            <a
              href="https://instagram.com/its.karlin.coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Instagram"
              className={buttonClass}
            >
              <FaInstagram className="scale-[1.5] text-[#e775e7]" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61557125602814"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Facebook"
              className={buttonClass}
            >
              <FaFacebook className="scale-[1.5] text-[#4b4dee]" />
            </a>
          </footer>
        </aside>
      </header>
    </Element>
  );
};

export default Header;
