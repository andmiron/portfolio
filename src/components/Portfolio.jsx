import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "My Tour",
    description: "Simple fullstack application to manage tours.",
    thumbnail: "/my-tour-screenshot.PNG",
    codeLink: "https://github.com/andmiron/my-tour",
    demoLink: "https://my-tour-74lo.onrender.com",
    tags: [
      "Mongoose",
      "Express",
      "Passport",
      "Pug",
      "Bootstrap",
      "Node.js",
      "Mapbox",
    ],
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Portfolio
      </h1>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard projectData={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}
