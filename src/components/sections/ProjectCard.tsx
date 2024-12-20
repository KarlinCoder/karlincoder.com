import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  children: ReactNode;
  link: string;
  github: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  children,
  link,
  github,
  image,
}) => {
  return (
    <article className="flex max-[420px]:flex-col-reverse sm:flex-row justify-between max-w-[750px] md:max-w-[520px] min-h-[210px] bg-neutral-800 bg-opacity-50 overflow-hidden rounded-md hover:scale-[1.02] hover:bg-opacity-60 border border-neutral-600 hover:shadow-2xl transition-all">
      <section className="flex flex-col justify-between p-5 w-[70%] max-[420px]:w-full">
        <header className="flex flex-col gap-2">
          <p className="text-lg text-neutral-100 font-bold font-opensans-cm">
            {title ? title : "[PROJECT TITLE]"}
          </p>
          {children}
        </header>
        <footer className="flex gap-2 max-[420px]:mt-3">
          <a
            target="_blank"
            href={link ? link : "#"}
            className="inline-block text-green-200 hover:text-yellow-300 text-md"
          >
            Visitar
          </a>
          <a
            target="_blank"
            href={github ? github : "#"}
            className="inline-block text-green-200 hover:text-yellow-300 text-md"
          >
            Github
          </a>
        </footer>
      </section>
      <aside className="w-[180px] max-[420px]:w-full">
        <div className="w-full h-full object-cover">
          <img
            className="h-full object-cover brightness-75"
            src={image ? image : "/images/projects/youtubedownloader.webp"}
            alt="project screenshot"
          />
        </div>
      </aside>
    </article>
  );
};

export default ProjectCard;
