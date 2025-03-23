import { BiCircle } from "react-icons/bi";

const dotListClasses = "min-w-3 min-h-3 text-yellow-200";
const textClasses = "leading-5 text-md text-pretty";

export const Experiencia: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="flex flex-col gap-6 flex-wrap justify-center items-center h-fit py-[60px] px-4"
    >
      <h2 className="flex justify-center items-center w-full gap-1 font-sans text-4xl font-bold text-center text-neutral-300 max-w-[1000px]">
        <div className="flex flex-col items-center ">
          <p className="text-yellow-400">Mi experiencia</p>
          <p className="mt-1 font-sans text-sm text-blue-500 font-semibol2 ">
            Listado siempre actualizado
          </p>
        </div>
      </h2>
      <section>
        <div className="p-[2x] relative max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] bg-neutral-700 bg-opacity-20 py-8 px-9 rounded-2xl">
          <ul className="flex flex-col gap-3 list-inside text-neutral-300 font-opensans-cm">
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Mantenimiento y{" "}
                <span className="font-bold text-yellow-400">migración</span> de
                código obsoleto en aplicaciones y sitios web, asegurando su
                funcionalidad.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Seis meses de{" "}
                <span className="font-bold text-yellow-400">prácticas</span> en
                XETID, empresa cubana de desarrollo de software, adquiriendo
                experiencia valiosa.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Desarrollo de aplicaciones web de alto{" "}
                <span className="font-bold text-yellow-400">rendimiento</span>,
                responsivas y amigables, optimizando la experiencia del usuario.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                <span className="font-bold text-yellow-400">Capacitación</span>{" "}
                de nuevos estudiantes de programación, fomentando su crecimiento
                profesional.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Desarrollo de{" "}
                <span className="font-bold text-yellow-400">librerías</span>{" "}
                para uso e integraciones con otros servicios, facilitando el
                desarrollo ágil.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                <span className="font-bold text-yellow-400">Migración</span> de
                proyectos en JavaScript a TypeScript y viceversa, mejorando la
                robustez del código.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                <span className="font-bold text-yellow-400">Optimización</span>{" "}
                de aplicaciones en rendimiento, tamaño y escalabilidad,
                maximizando su eficiencia.{" "}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Revisión de código de nuevos desarrolladores y{" "}
                <span className="inline-block font-bold text-yellow-400">
                  ayuda
                </span>{" "}
                en su incorporación, promoviendo buenas las prácticas.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                <span className="font-bold text-yellow-400">Estudiante</span> de
                Ingeniería Informática en la Universidad Central de las Villas.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Implementación de prácticas de{" "}
                <span className="font-bold text-yellow-400">SEO</span> y{" "}
                <span className="font-bold text-yellow-400">accesibilidad</span>{" "}
                en tus proyectos web, mejorando su visibilidad y usabilidad.{" "}
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Diseño de
                <span className="font-bold text-yellow-400"> prototipos </span>
                utilizando herramientas como Figma o Adobe XD para el diseño de{" "}
                <span className="font-bold text-yellow-400">interfaces</span>.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle className={dotListClasses} />
              <p className={textClasses}>
                Dominio en la creación de{" "}
                <span className="font-bold text-yellow-400">
                  prompts efectivos
                </span>{" "}
                para ChatGPT, mejorando la interacción con el modelo.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Experiencia;
