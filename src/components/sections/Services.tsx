import {
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaPaintBrush,
  FaRocket,
  FaChartBar,
  FaPlug,
  FaExchangeAlt,
} from "react-icons/fa";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="servicios">
      <section
        id="servicios"
        className="relative flex flex-col items-center justify-center px-4 py-28 gap-14 sm:px-6 md:px-8"
        style={{
          background:
            "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Contenedor de tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1200px] px-10">
          {[
            {
              icon: <FaLaptopCode className="text-5xl text-yellow-400" />,
              title: "Desarrollo Web Frontend",
              description:
                "Construyo interfaces modernas y funcionales con React y Vue.",
            },
            {
              icon: <FaPaintBrush className="text-5xl text-yellow-400" />,
              title: "Diseño de Dashboards",
              description:
                "Creo paneles administrativos y visualmente atractivos para datos.",
            },
            {
              icon: <FaPlug className="text-5xl text-yellow-400" />,
              title: "Integración de APIs",
              description:
                "Conecto tu frontend con APIs externas para funcionalidades dinámicas.",
            },
            {
              icon: <FaShoppingCart className="text-5xl text-yellow-400" />,
              title: "Tiendas Online",
              description:
                "Diseño tiendas virtuales rápidas, seguras y optimizadas.",
            },
            {
              icon: <FaMobileAlt className="text-5xl text-yellow-400" />,
              title: "Diseño Responsivo",
              description:
                "Garantizo una experiencia perfecta en todos los dispositivos.",
            },
            {
              icon: <FaChartBar className="text-5xl text-yellow-400" />,
              title: "Visualización de Datos",
              description:
                "Implemento gráficos y tablas claras para mostrar datos clave.",
            },
            {
              icon: <FaCode className="text-5xl text-yellow-400" />,
              title: "Migración de Código",
              description:
                "Actualizo proyectos legacy a tecnologías modernas como React.",
            },
            {
              icon: <FaRocket className="text-5xl text-yellow-400" />,
              title: "Optimización de Rendimiento",
              description:
                "Mejoro la velocidad y eficiencia de tus aplicaciones web.",
            },
            {
              icon: <FaExchangeAlt className="text-5xl text-yellow-400" />,
              title: "Prototipado Rápido",
              description:
                "Desarrollo prototipos funcionales en tiempo récord para validar ideas.",
            },
          ].map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 p-6 transition-transform shadow-lg bg-neutral-900 rounded-2xl"
            >
              {/* Borde animado giratorio */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent rotate-[8deg] bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500 opacity-50 z-[-1]" />
              {/* Ícono */}
              <div className="flex justify-center">{icon}</div>
              {/* Título */}
              <h3 className="text-lg font-bold text-center text-yellow-400">
                {title}
              </h3>
              {/* Descripción */}
              <p className="text-sm leading-6 text-center text-neutral-300 sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Services;
