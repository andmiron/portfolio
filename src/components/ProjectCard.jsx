import { FaGithub } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import Link from "./Link.jsx";

export default function ProjectCard({ projectData }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 rounded-lg hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(156,163,175,0.7)] dark:hover:shadow-[0_0_15px_3px_rgba(66,65,81,0.9)] transition-all duration-300 ease-in-out dark:border-gray-800">
      <img
        src={projectData.thumbnail}
        alt={projectData.title}
        className="w-full sm:w-1/2 object-cover rounded-l-md"
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
        <div className="flex items-center text-neutral-600 dark:text-neutral-300 gap-4">
          <Link
            href={projectData.codeLink}
            text="Source code"
            icon={<FaGithub />}
          />
          <Link
            href={projectData.demoLink}
            text="Live preview"
            icon={<LuSquareArrowOutUpRight />}
          />
        </div>
      </div>
    </div>
  );
}
