import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaRegEnvelope,
} from "react-icons/fa6";

const links = [
  { link: "https://github.com/andmiron", label: "github", icon: <FaGithub /> },
  { link: "https://t.me/and_miron", label: "telegram", icon: <FaTelegram /> },
  {
    link: "https://www.linkedin.com/in/andrii-myronenko-650553279/",
    label: "linkedin",
    icon: <FaLinkedin />,
  },
  {
    link: "mailto:myronenko.andrii.1994@gmail.com",
    label: "myronenko.andrii.1994@gmail.com",
    icon: <FaRegEnvelope />,
  },
];

export default function Contact() {
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <p className="mb-8">
        If you would like to discuss a project, ask questions, or just connect,
        feel free to reach out. I would love to hear from you!
      </p>
      <ul className="font-sm flex flex-col items-start justify-center gap-3 flex-wrap text-neutral-600 dark:text-neutral-300">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="flex items-center gap-2 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={link.link}
            >
              {link.icon}
              <p className="">{link.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
