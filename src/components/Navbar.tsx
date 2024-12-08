interface MenuItem {
  text: string;
  link: string;
}

const MENU_ITEMS: Array<MenuItem> = [
  { text: "Personal", link: "#personal" },
  { text: "Experiencia", link: "#experiencia" },
  { text: "Skills", link: "#skills" },
  { text: "Proyectos", link: "#proyectos" },
  { text: "Intereses", link: "#intereses" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex sticky z-50 top-0 justify-evenly items-center border-b-[1px] border-neutral-700 bg-[#111111]">
      <section className="flex flex-col text-neutral-500 mt-1">
        <h2 className="text-[1.50rem] font-carltine-cm text-yellow-600 leading-4">
          KarlinCoder
        </h2>
        <p className="text-sm leading-4">Web Frontend Developer</p>
      </section>

      <aside>
        <ul className="flex flex-wrap text-neutral-200 text-[0.97rem]">
          {MENU_ITEMS.map((item) => {
            return (
              <li key={item.text}>
                <a
                  href={item.link}
                  className="inline-block px-5 py-6 transition-colors hover:bg-neutra-800 hover:bg-opacity-20 active:bg-transparent hover:text-[#b97926] hover:underline hover:underline-offset-8"
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};
