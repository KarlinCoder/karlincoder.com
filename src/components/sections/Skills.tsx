import { BsMarkdownFill } from "react-icons/bs";
import { FaBootstrap, FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { FaCubesStacked, FaPython } from "react-icons/fa6";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiVite, SiVuetify } from "react-icons/si";

const classNames =
  "flex flex-row gap-2 justify-center items-center text-md text-neutral-200 px-4 box-border py-4 rounded-md bg-neutral-700 bg-opacity-20 border border-neutral-600 hover:bg-opacity-60 active:bg-opacity-20 transition-colors cursor-pointer ";

const iconClasses = "text-3xl";

const Skills: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 justify-center items-center h-fit py-[60px] px-8">
      <h2
        id="skills"
        className="flex items-center gap-2 font-sans font-bold text-4xl text-neutral-300"
      >
        <p>Skills</p>
        <FaCubesStacked className="mt-2" />
      </h2>

      <main>
        <ul className="flex flex-wrap justify-center gap-4 max-w-[1000px] w-full">
          <li className={classNames}>
            <p>HTML</p>
            <IoLogoHtml5 className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>CSS</p>
            <IoLogoCss3 className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Bootstrap</p>
            <FaBootstrap className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Tailwind</p>
            <RiTailwindCssFill className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>JavaScript</p>
            <SiJavascript className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>TypeScript</p>
            <SiTypescript className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>React</p>
            <FaReact className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Vue</p>
            <IoLogoVue className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Vuetify</p>
            <SiVuetify className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Vite</p>
            <SiVite className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Git</p>
            <FaGitAlt className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>GitHub</p>
            <FaGithub className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Markdown</p>
            <BsMarkdownFill className={iconClasses} />
          </li>
          <li className={classNames}>
            <p>Python</p>
            <FaPython className={iconClasses} />
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Skills;
