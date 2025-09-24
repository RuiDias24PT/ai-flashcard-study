import { useTheme } from "~/context/ThemeContext";

export default function Toggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="h-4 bg-red-200 dark:bg-blue-900 p-4">
      <span>{theme === "light" ? "🌞 Light" : "🌙 Dark"}</span>
      <button onClick={toggleTheme}>Toggle Mode</button>
    </nav>
  );
}
