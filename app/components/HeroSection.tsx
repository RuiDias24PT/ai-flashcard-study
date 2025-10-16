import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Paths from "~/routes/paths";
const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen w-full">
      <img
        src="/guy-study.jpg"
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t("heroSection.title")}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          {t("heroSection.paragraph")}
        </p>
        <Link
          to={Paths.AI_GENERATOR}
          role="button"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 
             rounded-2xl shadow-lg font-medium transition transform 
             hover:-translate-y-1 cursor-pointer inline-block text-center"
        >
          {t("heroSection.button")}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
