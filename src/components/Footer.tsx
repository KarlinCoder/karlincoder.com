import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
const buttonClass =
  "grid place-content-center rounded-full bg-neutral-700 bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-20 transition-colors cursor-pointer p-[11px] text-sm text-white border border-neutral-600";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full py-5 pb-7 px-5 text-neutral-200 bg-[radial-gradient(circle_at_center,rgba(30,30,30,.5),_rgba(5,5,5,.5))] border-t-[1px] border-yellow-800">
      <p className="text-[1.6rem] font-carltine-cm">KarlinCoder</p>
      <blockquote className="mb-3 font-opensans-cm">
        <p className="font-opensans-cm text-[0.97rem] text-center text-pretty italic">
          "La única forma de hacer un gran trabajo es amar lo que haces"
        </p>
        <footer className="text-center">
          <cite className="not-italic font-bold text-[0.93rem">
            - Steve Jobs -
          </cite>
        </footer>
      </blockquote>

      <div className="flex justify-center gap-2">
        <a
          href="https://api.whatsapp.com/send?phone=5352662128&text=Hola%20%F0%9F%91%8B%2C%20vengo%20desde%20su%20portafolio"
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
          href="https://www.facebook.com/profile.php?id=61557125602814"
          target="_blank"
          className={buttonClass}
        >
          <FaFacebook className="scale-[1.5]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
