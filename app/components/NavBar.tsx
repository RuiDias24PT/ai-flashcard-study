import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-70">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          StudyAI
        </h1>
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-200">
          <li>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
