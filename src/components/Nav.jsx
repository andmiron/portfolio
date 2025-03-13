import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = {
  "/": {
    name: "home",
  },
  "/learn": {
    name: "learn",
  },
  "/blog": {
    name: "blog",
  },
  "/portfolio": {
    name: "portfolio",
  },
  "/contact": {
    name: "contact",
  },
};

export default function Nav() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center  relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row flex-1 space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <NavLink
                  to={path}
                  key={name}
                  className={({ isActive }) => {
                    const active = isActive
                      ? "text-teal-500 dark:text-teal-500"
                      : "";
                    return `transition-all hover:text-teal-700 dark:hover:text-teal-700 flex align-middle relative py-1 px-2 ${active}`;
                  }}
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  );
}
