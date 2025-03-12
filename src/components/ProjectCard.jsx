import { FaGithub } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function ProjectCard({ projectData }) {
  return (
    <div
      key={projectData.title}
      className="flex flex-col sm:flex-row rounded-lg"
    >
      <img
        src={projectData.thumbnail}
        alt={projectData.title}
        className="w-100 sm:w-50 object-cover rounded-md"
      />

      <div className="w-full flex flex-col items-start p-2 gap-2">
        <h2 className="font-bold">{projectData.title}</h2>
        <p>{projectData.description}</p>
        <div className="flex flex-wrap gap-1">
          {projectData.tags.map((tag) => (
            <span
              key={tag}
              className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 px-2 py-1 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center text-neutral-600 dark:text-neutral-300 gap-3">
          <a
            className="flex items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={projectData.codeLink}
          >
            <FaGithub />
            <p className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">
              Source code
            </p>
          </a>
          <a
            className="flex items-center gap-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={projectData.demoLink}
          >
            <LuSquareArrowOutUpRight />
            <p className="hover:text-neutral-800 dark:hover:text-neutral-100 transition-all">
              Live preview
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
