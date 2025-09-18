import NavBar from "~/components/navBar";
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
      <NavBar />
      <main className="p-8">
        <p>Scroll down to see if the navbar stays on top.</p>
        <div style={{ height: "2000px" }} /> {/* fake scroll */}
      </main>
    </>
  );
}
