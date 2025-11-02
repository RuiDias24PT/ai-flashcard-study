import React from "react";
import { ArrowRight, FileText, Zap, BookOpen } from "lucide-react";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Paste Text",
    subtitle: "Any content works",
    icon: <FileText className="w-6 h-6" aria-hidden />,
  },
  {
    id: 2,
    title: "AI Generates",
    subtitle: "Smart flashcards created",
    icon: <Zap className="w-6 h-6" aria-hidden />,
  },
  {
    id: 3,
    title: "Study",
    subtitle: "Learn effectively",
    icon: <BookOpen className="w-6 h-6" aria-hidden />,
  },
];

export default function StepsContainer() {
  return (
    <section aria-label="Three step flow" className="max-w-4xl mx-auto p-6">
      <h2 className="sr-only">How it works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
        {steps.map((s) => (
          <div
            key={s.id}
            className="group relative flex flex-col items-start gap-3 p-6 rounded-2xl shadow-md hover:shadow-lg ring-1 ring-slate-100 dark:ring-slate-800 bg-white dark:bg-slate-900 transition-all text-left w-full hover:translate-y-[-2px]"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl ring-1 ring-transparent text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-300 flex-shrink-0">
                  {s.icon}
                </div>

                <div>
                  <p className="text-sm font-semibold leading-tight">
                    {s.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {s.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium">
                  {s.id}
                </div>
              </div>
            </div>

            <div className="mt-2 w-full">
              <div className="rounded-lg h-2 bg-gradient-to-r from-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
