import ProjectCard from "./ProjectCard";
import PageHeader from "./PageHeader";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { projects } from "../lib/projects";

export default function Portfolio() {
  return (
    <div>
      <PageHeader
        icon={<PiProjectorScreenChartDuotone size={36} />}
        text="Pet projects"
      />
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard projectData={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
