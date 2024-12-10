interface MenuItem {
  text: string;
  link: string;
}

const MENU_ITEMS: Array<MenuItem> = [
  { text: "Experiencia", link: "#experiencia" },
  { text: "Skills", link: "#skills" },
  { text: "Proyectos", link: "#proyectos" },
  { text: "Personal", link: "#personal" },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col md:flex-row sticky z-50 top-0 justify-evenly items-center border-b-[1px] border-yellow-800 bg-[#111111d8] backdrop-blur-xl px-8">
      <section className="flex flex-col text-neutral-500 mt-1 px-5 py-4 md:py-6 md:p-0 text-center md:text-start ">
        <h2 className="text-[1.50rem] font-carltine-cm text-yellow-600 leading-4">
          KarlinCoder
        </h2>
        <p className="text-sm leading-4">Web Frontend Developer</p>
      </section>

      <aside className="hidden md:block">
        <ul className="flex flex-wrap text-neutral-200 text-[0.97rem]">
          {MENU_ITEMS.map((item) => {
            return (
              <li key={item.text}>
                <a
                  href={item.link}
                  className="inline-block px-5 py-6 text-neutral-300 hover:text-[#df9d47] active:text-neutral-300 hover:underline hover:underline-offset-8 "
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

export default Navbar;
