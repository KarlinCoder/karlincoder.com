import { Element } from "react-scroll";

const textClasses = "text-pretty text-neutral-300 font-opensans-cm";
const spanClasses = "text-yellow-400 font-bold";

export const Personal: React.FC = () => {
  return (
    <Element name="personal">
      <section
        id="personal"
        className="flex flex-col gap-6 justify-center items-center h-fit py-[60px] px-8"
      >
        <h2 className="flex items-center w-full gap-1 font-sans text-4xl font-bold text-left text-neutral-300 max-w-[1000px]">
          <div className="flex flex-col items-start ">
            <p className="text-yellow-400">Un poco sobre mi.</p>
            <p className="mt-1 font-sans text-sm font-semibold text-blue-500 ">
              Mi trabajo es mi pasión.
            </p>
          </div>
        </h2>

        <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
          <div className="flex flex-col gap-6 max-w-[500px] md:max-w-[700px] w-full">
            <p className={textClasses}>
              Me llamo Giancarlo Dennis Pérez Alonso, y desde que tengo memoria,
              siempre me ha fascinado el mundo de la programación. Lo que
              comenzó como una simple curiosidad en mi infancia, se ha
              convertido con el tiempo en una auténtica pasión que solo ha ido
              creciendo. Hoy, esa pasión me ha llevado a sumergirme en el
              emocionante universo del{" "}
              <span className={spanClasses}>desarrollo web</span>, donde
              disfruto diseñando experiencias digitales que no solo funcionan
              bien, sino que también cautivan y superan las{" "}
              <span className={spanClasses}>expectativas</span> de quienes
              confían en mí.
            </p>

            <p className={textClasses}>
              Para mí, cada proyecto es una nueva oportunidad para dejar algo de
              mí mismo, una pequeña huella que refleje mi dedicación y entrega.
              Pongo todo mi empeño en cada detalle, asegurándome de que el
              resultado final sea algo que realmente me enorgullezca y que haga
              sentir al cliente completamente{" "}
              <span className={spanClasses}>satisfecho</span>. No se trata solo
              de cumplir con un encargo; se trata de construir algo que
              realmente importe.
            </p>

            <p className={textClasses}>
              La programación, para mí, no es solo un trabajo: es una forma de{" "}
              <span className={spanClasses}>expresión</span>, un lienzo donde
              plasmo ideas y soluciones innovadoras. Mi misión es transformar
              conceptos en realidades tangibles que resalten la esencia única de
              cada proyecto. Y lo mejor de todo es que, cuando veo la{" "}
              <span className={spanClasses}>satisfacción</span> en los ojos de
              un cliente, sé que estoy haciendo exactamente lo que me apasiona.
              Esa sensación es lo que me impulsa a seguir aprendiendo,
              evolucionando y perfeccionando este arte que tanto amo.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative grid place-content-center p-[4px] min-w-[320px] min-h-[320px] max-w-[260px] max-h-[260px] w-full h-full overflow-hidden shadow-[0_0_30px_#000] rounded-lg z-[1]">
              <img
                src="/images/avatar_alt.webp"
                alt="another picture of me"
                className="w-full h-full z-[3] rounded-lg"
              />
              <div className="absolute animate-spin w-[200%] h-[200%] rounded-full top-[-50%] right-[-50%] z-[2] bg-gradient-to-r from-yellow-600 to-blue-600"></div>
            </div>
            <footer className="flex flex-col italic text-center">
              <p className="leading-4 text-blue-400 font-opensans-cm">
                KarlinCoder
              </p>
              <p className="font-bold leading-4 text-blue-400 font-opensans-cm">
                Giancarlo Dennis
              </p>
            </footer>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Personal;
