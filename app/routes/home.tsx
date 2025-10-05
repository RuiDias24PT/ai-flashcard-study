import NavBar from "~/components/NavBar";
import { ThemeProvider } from "~/context/ThemeContext";

import HeroSection from "~/components/HeroSection";
export function meta() {
  return [
    { title: "StudyAI" },
    {
      name: "description",
      content:
        "Boost your learning with AI-powered flashcards. Create, review, and master topics faster using StudyAI.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <HeroSection />
      </ThemeProvider>
    </>
  );
}
