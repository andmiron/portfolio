import { SiHey } from "react-icons/si";
import PageHeader from "./PageHeader";
import { TbFileCv } from "react-icons/tb";
import Link from "./Link.jsx";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      <PageHeader icon={<SiHey size={36} />} text="Hey!" />
      <p className="mb-3">Hello and welcome on my website!</p>
      <p className="mb-3">
        I am a passionate Node.js developer, always eager to learn new things.
      </p>
      <p className="mb-3">
        Here, you’ll find personal information, examples of my projects, and a
        blog where I share some thoughts on development and tech in general.
      </p>
      <p className="mb-6">
        I’m currently seeking exciting opportunities to collaborate and grow,
        and I’d love for you to explore my work!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 w-full justify-around items-center text-xl ">
        <Link
          href="/cv.pdf"
          text="Download CV"
          icon={<TbFileCv size={36} />}
          download="cv.pdf"
        />
        <NavLink
          to="/portfolio"
          className="font-sm flex items-center gap-1 transition-all text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
        >
          <PiProjectorScreenChartDuotone size={36} />
          Jump to projects
        </NavLink>
      </div>
    </div>
  );
}
