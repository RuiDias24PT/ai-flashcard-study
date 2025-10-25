import { ThemeToggleButton } from "app/components/ThemeToggleButton";
import { Sparkles, BookOpen } from "lucide-react";
import { NavItem } from "app/components/NavItem";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "app/components/LanguageSwitcher";
import Paths from "~/routes/paths";
import { Link } from "react-router";
export default function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className="w-full h-16 bg-white/80 z-50 fixed backdrop-blur-md top-0 border-b border-gray-900 border-slate-200 dark:bg-slate-900/80  dark:border-slate-700 ">
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-14">
          <Link to={Paths.HOME}>
            <div className="flex items-center gap-3">
              <img
                src="/brain-logo.svg"
                alt="StudyAI Logo"
                className="w-7 h-7"
              />
              <h1 className="hidden sm:block text-2xl font-semibold text-slate-900 dark:text-white">
                StudyAI
              </h1>
            </div>
          </Link>
          <div className="flex items-center md:gap-10 lg:gap-12">
            <NavItem
              route={Paths.AI_GENERATOR}
              icon={BookOpen}
              label={t("Decks")}
            />
            <NavItem
              route={Paths.AI_GENERATOR}
              icon={Sparkles}
              label={t("AI Generator")}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex gap-6">
            <LanguageSwitcher />
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
