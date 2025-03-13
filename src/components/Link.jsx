export default function Link({ href, text, icon, download }) {
  return (
    <a
      className="font-sm flex items-center gap-2 transition-all text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      {...(download ? { download } : {})}
    >
      {icon}
      <p>{text}</p>
    </a>
  );
}
