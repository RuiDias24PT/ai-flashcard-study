import { ThemeToggleButton } from "app/components/ThemeToggleButton";

export default function NavBar() {
  return (
    <nav className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0">
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-3">
          <img src="/brain-logo.svg" alt="StudyAI Logo" className="w-9 h-9" />
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            StudyAI
          </h1>
        </div>

        <ThemeToggleButton />
      </div>
    </nav>
  );
}
