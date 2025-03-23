import {
  BootstrapLogo,
  CSSLogo,
  HTMLLogo,
  TailwindLogo,
  GitLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  VueLogo,
  VuetifyLogo,
  ViteLogo,
  MarkdownLogo,
  PythonLogo,
  GitHubLogo,
} from "../../assets/svg-logos";

const classNames =
  "flex font-opensans-cm flex-row gap-2 justify-center items-center text-md text-neutral-200 px-4 box-border rounded-md border border-neutral-600 hover:bg-opacity-40 bg-opacity-40 active:bg-opacity-20 transition-transform transiton-colors cursor-pointer h-[60px] font-opensans-semibold-cm" +
  " ";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="flex flex-col gap-6 justify-center items-center h-fit py-[60px] pb-[80px] px-8 border-2 border-yellow-800"
      style={{
        background:
          "linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2 className="flex justify-center items-center w-full gap-1 font-sans text-4xl font-bold text-center text-neutral-300 max-w-[1000px]">
        <div className="flex flex-col items-center ">
          <p className="text-yellow-400">Tecnologías que domino</p>
          <p className="font-sans text-sm font-semibold leading-3 text-blue-500 ">
            No le temo a lo desconocido.
          </p>
        </div>
      </h2>

      <section>
        <ul className="flex flex-wrap justify-center gap-4 max-w-[700px] w-full">
          <li className={classNames + "bg-[#9e5f24]"}>
            <p className="font-medium">HTML</p>
            <div className="w-8">
              <HTMLLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#24559e]"}>
            <p>CSS</p>
            <div className="w-8">
              <CSSLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#67249e]"}>
            <p>Bootstrap</p>
            <div className="w-9">
              <BootstrapLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#246d9e]"}>
            <p>Tailwind</p>
            <div className="w-8">
              <TailwindLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#969e24]"}>
            <p>JavaScript</p>
            <div className="w-6">
              <JavaScriptLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#3e249e]"}>
            <p>TypeScript</p>
            <div className="w-6">
              <TypeScriptLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#2c249e]"}>
            <p>React</p>
            <div className="w-8">
              <ReactLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#9e3c24]"}>
            <p>Git</p>
            <div className="w-8">
              <GitLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#1b0909]"}>
            <p>GitHub</p>
            <div className="w-8">
              <GitHubLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#249e3e]"}>
            <p>Vue</p>
            <div className="w-6">
              <VueLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#36249e]"}>
            <p>Vuetify</p>
            <div className="w-8">
              <VuetifyLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#9e2498]"}>
            <p>Vite</p>
            <div className="w-8">
              <ViteLogo />
            </div>
          </li>

          <li className={classNames + "bg-[#252629]"}>
            <p>Markdown</p>
            <div className="w-8">
              <MarkdownLogo />
            </div>
          </li>
          <li className={classNames + "bg-[#249e79]"}>
            <p>Python</p>
            <div className="w-8">
              <PythonLogo />
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Skills;
