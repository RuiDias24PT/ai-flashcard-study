import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
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
