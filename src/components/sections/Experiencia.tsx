import { BiCircle } from "react-icons/bi";
import { PiUserList } from "react-icons/pi";

export const Experiencia: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 flex-wrap justify-center items-center h-fit py-[60px] px-8">
      <h2
        id="experiencia"
        className="flex items-center gap-2 font-sans font-bold text-4xl text-neutral-300"
      >
        <p>Experiencia</p>
        <PiUserList className="mt-2" />
      </h2>
      <main>
        <div className="bg-neutral-700 bg-opacity-20 hover:bg-opacity-30 active:bg-opacity-20 py-8 px-9 rounded-2xl border-2 border-neutral-400">
          <ul className="flex flex-col gap-1 text-neutral-300 list-inside font-opensans-cm">
            {" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                Mantenimiento y{" "}
                <span className="text-yellow-400 font-bold">migración</span> de
                código obsoleto en aplicaciones y sitios web, asegurando su
                funcionalidad.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                Seis meses de{" "}
                <span className="text-yellow-400 font-bold">prácticas</span> en
                XETID, empresa cubana de desarrollo de software, adquiriendo
                experiencia valiosa.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                Desarrollo de aplicaciones web de alto{" "}
                <span className="text-yellow-400 font-bold">rendimiento</span>,
                responsivas y amigables, optimizando la experiencia del usuario.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                <span className="text-yellow-400 font-bold">
                  Capacitación
                </span>{" "}
                de nuevos estudiantes de programación, fomentando su crecimiento
                profesional.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                Creación de{" "}
                <span className="text-yellow-400 font-bold">
                  librerías
                </span>{" "}
                para uso e integraciones con otros servicios, facilitando el
                desarrollo ágil.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                <span className="text-yellow-400 font-bold">Migración</span> de
                proyectos en JavaScript a TypeScript y viceversa, mejorando la
                robustez del código.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                <span className="text-yellow-400 font-bold">
                  Optimización
                </span>{" "}
                de aplicaciones en rendimiento, tamaño y escalabilidad,
                maximizando su eficiencia.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                Revisión de código de nuevos desarrolladores y{" "}
                <span className="inline-block text-yellow-400 font-bold">
                  {" "}
                  ayuda{" "}
                </span>{" "}
                en su incorporación, promoviendo buenas las prácticas.
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BiCircle />{" "}
              <p>
                <span className="text-yellow-400 font-bold">Estudiante</span> de
                Ingeniería Informática en la Universidad Central de las Villas.
              </p>
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                Implementación de prácticas de{" "}
                <span className="text-yellow-400 font-bold">SEO</span> y{" "}
                <span className="text-yellow-400 font-bold">accesibilidad</span>{" "}
                en tus proyectos web, mejorando su visibilidad y usabilidad.{" "}
              </p>{" "}
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BiCircle />{" "}
              <p>
                {" "}
                Creación de{" "}
                <span className="text-yellow-400 font-bold">
                  prototipos
                </span>{" "}
                utilizando herramientas como Figma o Adobe XD para el diseño de{" "}
                <span className="text-yellow-400 font-bold">interfaces</span>.
              </p>{" "}
            </li>{" "}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Experiencia;
