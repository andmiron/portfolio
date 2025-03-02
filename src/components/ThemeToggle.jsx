import { FaCircleHalfStroke } from "react-icons/fa6";
import { useTheme } from "../lib/useTheme.js";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id="theme-toggle"
      aria-label={`${theme} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90 cursor-pointer"
    >
      <FaCircleHalfStroke
        className={`h-[20px] w-[20px] ${
          theme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]"
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
