import { RiUser2Fill } from "react-icons/ri";

const textClasses = "text-pretty text-neutral-300 font-opensans-cm";
const spanClasses = "text-yellow-400 font-bold";

export const Personal: React.FC = () => {
  return (
    <section
      id="personal"
      className="flex flex-col gap-6 justify-center items-center h-fit py-[60px] px-8"
    >
      <h2 className="flex items-center gap-1 font-sans font-bold text-4xl text-neutral-300">
        <RiUser2Fill className="text-[3rem] text-yellow-200 mt-2" />
        <div className="flex flex-col items-start justify-center">
          <p className="text-yellow-200">PERSONAL</p>
          <p className="text-sm font-sans leading-3 font-semibold text-blue-500">
            UN POCO SOBRE MI
          </p>
        </div>
      </h2>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-4 items-center">
        <div className="flex flex-col gap-2 max-w-[500px] md:max-w-[600px] w-full">
          <p className={textClasses}>
            Mi nombre completo es Giancarlo Dennis Pérez Alonso. Desde muy
            joven, he sentido una profunda{" "}
            <span className={spanClasses}>pasión</span> por la programación.
            Esta fascinación no solo se ha mantenido a lo largo de los años,
            sino que ha crecido y evolucionado, llevándome a explorar el
            emocionante mundo del{" "}
            <span className={spanClasses}>desarrollo web</span>. Me encanta
            crear <span className={spanClasses}>experiencias atractivas</span> y
            funcionales que no solo cumplan con las{" "}
            <span className={spanClasses}>expectativas</span> de mis clientes,
            sino que las <span className={spanClasses}>superen</span>.
          </p>

          <p className={textClasses}>
            Cada proyecto es una oportunidad para dejar mi huella, y me{" "}
            <span className={spanClasses}>esfuerzo</span> al máximo en cada uno
            de ellos, asegurándome de que el resultado final refleje mi
            dedicación y <span className={spanClasses}>compromiso</span> con la
            calidad. Mi objetivo es que cada cliente se sienta plenamente{" "}
            <span className={spanClasses}>satisfecho</span> con el trabajo
            realizado.
          </p>

          <p className={textClasses}>
            Para mí, la programación es más que una simple tarea; es una forma
            de <span className={spanClasses}>arte</span>. Estoy aquí para
            transformar ideas en realidades digitales, creando soluciones{" "}
            <span className={spanClasses}>innovadoras</span> que resalten la
            identidad de cada proyecto. La{" "}
            <span className={spanClasses}>satisfacción</span> del cliente es mi
            mayor recompensa, y me motiva a seguir aprendiendo y mejorando en
            este apasionante viaje.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative grid place-content-center p-[4px] min-w-[250px] min-h-[250px] max-w-[260px] max-h-[260px] w-full h-full overflow-hidden shadow-[0_0_30px_#000] rounded-lg z-[1]">
            <img
              src="/images/avatar_alt.webp"
              alt="another picture of me"
              className="w-full h-full z-[3] rounded-lg"
            />
            <div className="absolute animate-spin w-[200%] h-[200%] rounded-full top-[-50%] right-[-50%] z-[2] bg-gradient-to-r from-yellow-600 to-blue-600"></div>
          </div>
          <footer className="flex flex-col italic text-center">
            <p className="text-blue-400 leading-4 font-opensans-cm">
              KarlinCoder
            </p>
            <p className="text-blue-400 leading-4 font-opensans-cm font-bold">
              Giancarlo Dennis
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Personal;
