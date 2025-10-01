import NavBar from "~/components/NavBar";
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
        <section className="relative h-screen w-full">
          <img
            src="/guy-study.jpg"
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Learn Smarter, Achieve More
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl">
              Unlock your potential with guided study resources designed for
              success.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg font-medium transition">
              Get Started
            </button>
          </div>
        </section>
      </ThemeProvider>
    </>
  );
}
