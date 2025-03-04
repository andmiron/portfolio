import { FaCopy, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { useState } from "react";

const contactLinks = [
  {
    link: "https://github.com/andmiron",
    label: "github",
    icon: <FaGithub />,
  },
  { link: "https://t.me/and_miron", label: "telegram", icon: <FaTelegram /> },
  {
    link: "https://www.linkedin.com/in/andrii-myronenko-650553279/",
    label: "linkedin",
    icon: <FaLinkedin />,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "myronenko.andrii.1994@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <p className="mb-4">
        If you would like to discuss a project, ask questions, or just connect,
        feel free to reach out. I would love to hear from you!
      </p>
      <ul className="font-sm mt-8 flex flex-col justify-center space-y-2 text-neutral-600 md:space-x-4 md:space-y-2 dark:text-neutral-300">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={link.link}
            >
              {link.icon}
              <p className="px-3 h-7">{link.label}</p>
            </a>
          </li>
        ))}
      </ul>
      <button
        className="flex items-center justify-start w-full cursor-pointer mt-2"
        onClick={copyToClipboard}
      >
        <FaCopy className="h-[20px] w-[20px] text-[#575757]" />
        <p className="px-3 font-semibold text-neutral-600 dark:text-neutral-300 ">
          myronenko.andrii.1994@gmail.com
        </p>
        {copied ? <p className="text-neutral-400">Copied!</p> : ""}
      </button>
    </div>
  );
}
