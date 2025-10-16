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
      <HeroSection />
    </>
  );
}
