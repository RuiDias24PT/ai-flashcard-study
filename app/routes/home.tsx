import NavBar from "~/components/NavBar";
import Toggler from "~/components/Toggler";
import { ThemeProvider } from "~/context/ThemeContext";
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
        <div className="h-40">Teste</div>
        <Toggler />
      </ThemeProvider>
    </>
  );
}
