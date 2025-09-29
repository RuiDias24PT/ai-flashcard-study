import { Sun, Moon } from "lucide-react";
import { useTheme } from "~/context/ThemeContext";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 flex items-center justify-center rounded-full 
                 hover:bg-gray-200 dark:hover:bg-slate-800"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-gray-800" />
      ) : (
        <Sun className="w-5 h-5 text-white" />
      )}
    </button>
  );
}
