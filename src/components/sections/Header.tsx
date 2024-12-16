import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const buttonClass =
  "grid place-content-center rounded-md bg-neutral-700 bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-20 transition-colors cursor-pointer p-[11px] text-sm text-white border border-neutral-600";

const spanClasses = "text-yellow-400 font-bold";

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 flex-wrap justify-center items-center h-fit pb-[60px] pt-[60px] md:pt-[115px] px-8">
      <div className="relative grid place-content-center p-[4px] max-w-[220px] max-h-[220px] md:max-w-[300px] md:max-h-[300px] h-full w-full overflow-hidden rounded-full z-[1] shadow-[0_0_40px_#0007] ">
        <img
          src="/images/avatar.webp"
          alt="imagen mia"
          className="w-full h-full rounded-full z-[3]"
        />

        <div className="absolute animate-spin w-full h-full z-[2] bg-gradient-to-r from-yellow-400 to-blue-500"></div>
      </div>
      <aside className="max-w-[400px] text-center md:text-left">
        <h1>
          <p className="font-carltine-cm text-4xl text-yellow-400 mb-2">
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
        <footer className="flex gap-2 justify-center md:justify-start items-center mt-4">
          <a
            href="https://api.whatsapp.com/send?phone=5352662128&text=Hola%20%F0%9F%91%8B%2C%20vengo%20desde%20su%20portafolio"
            target="_blank"
            className={buttonClass}
          >
            <FaWhatsapp className="scale-[1.5] text-[#5bc74d]" />
          </a>
          <a
            href="https://github.com/KarlinCoder"
            target="_blank"
            className={buttonClass}
          >
            <FaGithub className="scale-[1.5] text-[#7a6686]" />
          </a>
          <a
            href="https://instagram.com/its.karlin.coder"
            target="_blank"
            className={buttonClass}
          >
            <FaInstagram className="scale-[1.5] text-[#e775e7]" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61557125602814"
            target="_blank"
            className={buttonClass}
          >
            <FaFacebook className="scale-[1.5] text-[#4b4dee]" />
          </a>
        </footer>
      </aside>
    </header>
  );
};

export default Header;
