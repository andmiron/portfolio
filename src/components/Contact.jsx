import { MdOutlineTouchApp } from "react-icons/md";
import PageHeader from "./PageHeader";
import Link from "./Link";
import { links } from "../lib/links";

export default function Contact() {
  return (
    <div>
      <PageHeader icon={<MdOutlineTouchApp size={36} />} text="Get in touch" />
      <p className="mb-8">
        If you would like to discuss a project, ask questions, or just connect,
        feel free to reach out. I would love to hear from you!
      </p>
      <ul className="font-xl flex flex-col items-start justify-center gap-3 flex-wrap">
        {links.map((link) => (
          <li
            key={link.label}
            className="p-4 w-full rounded-lg hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(156,163,175,0.7)] dark:hover:shadow-[0_0_15px_3px_rgba(66,65,81,0.9)] transition-all duration-300 ease-in-out"
          >
            <Link
              href={link.link}
              icon={<link.icon size={36} />}
              text={link.label}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
