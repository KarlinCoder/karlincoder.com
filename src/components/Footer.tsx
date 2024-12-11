import { FaWhatsapp } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full py-5 pb-7 px-5 bg-[#00000080] text-neutral-200">
      <blockquote className="py-3">
        <p className="font-opensans-cm text-sm text-center text-pretty font-semibold">
          "La única forma de hacer un gran trabajo es amar lo que haces"
        </p>
        <footer className="text-center">
          <cite>- Steve Jobs</cite>
        </footer>
      </blockquote>

      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5352662128&text=Hola%20%F0%9F%91%8B%2C%20vengo%20desde%20su%20portafolio"
        className="flex items-center justify-center font-opensans-cm gap-2 text-neutral-200 px-5 py-2 rounded-sm bg-[#85858534] hover:bg-[#8585853d] active:bg-[#85858534]"
      >
        <p className="text-[0.8rem] ">Mi Whatsapp</p>
        <FaWhatsapp className="text-lg" />
      </a>
    </footer>
  );
};

export default Footer;
