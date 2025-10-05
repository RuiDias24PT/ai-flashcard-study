import { ThemeToggleButton } from "app/components/ThemeToggleButton";
import { BookOpen } from "lucide-react";
import { Sparkles } from "lucide-react";
import { NavItem } from "app/components/NavItem";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <nav className="h-16 bg-white/90 z-50 fixed backdrop-blur-md top-0 dark:bg-slate-900/90 border-slate-200 w-full   ">
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <img src="/brain-logo.svg" alt="StudyAI Logo" className="w-9 h-9" />
            <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
              StudyAI
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <NavItem icon={BookOpen} label={t("Decks")} />
            <NavItem icon={Sparkles} label={t("AI Generator")} />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
}
