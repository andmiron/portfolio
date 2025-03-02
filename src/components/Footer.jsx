import ArrowIcon from "./icons/ArrowIcon";

const footerLinks = [
  { link: "https://github.com/andmiron", label: "github" },
  { link: "https://t.me/and_miron", label: "telegram" },
  {
    link: "https://www.linkedin.com/in/andrii-myronenko-650553279/",
    label: "linkedin",
  },
  {
    link: "mailto:myronenko.andrii.1994@gmail.com",
    label: "myronenko.andrii.1994@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={link.link}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{link.label}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Andrii Myronenko
      </p>
    </footer>
  );
}
