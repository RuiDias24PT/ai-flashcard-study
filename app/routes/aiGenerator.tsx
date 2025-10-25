import { t } from "i18next";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export function meta() {
  return [
    { title: "Create AI Flashcards — StudyAI" },
    {
      name: "description",
      content:
        "Generate flashcards using AI instantly. Create smart study cards from any topic with StudyAI.",
    },
  ];
}

const aiGenerator = () => {
  const [topic, setTopic] = useState("");
  const [numCards, setNumCards] = useState(5);
  const [touched, setTouched] = useState({ topic: false, numCards: false });

  const topicError = touched.topic && topic.trim() === "";
  const numCardsError =
    touched.numCards && (numCards <= 0 || numCards > 20 || isNaN(numCards));

  const numCardsErrorMessage =
    numCards <= 0
      ? t("aiGenerator.input.numberOfCards.errors.min")
      : numCards > 20
        ? t("aiGenerator.input.numberOfCards.errors.max")
        : "";

  const isButtonDisabled = topic.trim() === "" || numCards <= 0;

  return (
    <div className="pt-[6rem] px-4 text-center">
      <div className="max-w-2xl gap-[2rem] mx-auto">
        <Sparkles className="mx-auto block text-indigo-600" size={72} />
        <p className="text-3xl font-bold dark:text-white">
          {t("aiGenerator.title")}
        </p>
        <p className="text-lg md:text-xl dark:text-white">
          {t("aiGenerator.description")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 mt-8 text-left space-y-4 dark:bg-[#1e293b]">
        <div>
          <label className="block text-gray-700 dark:text-white font-medium mb-2">
            {t("aiGenerator.input.prompt.label")}
          </label>
          <textarea
            className={`w-full border rounded-lg p-3 min-h-[100px] dark:text-white ${
              topicError ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={t("aiGenerator.input.prompt.placeholder")}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onBlur={() => setTouched({ ...touched, topic: true })}
          />
          {topicError && (
            <p className="text-red-500 text-sm mt-1">
              {t("aiGenerator.input.prompt.errors.required")}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-white font-medium mb-2">
            {t("aiGenerator.input.numberOfCards.label")}
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={numCards}
            onChange={(e) => setNumCards(Number(e.target.value))}
            onBlur={() => setTouched({ ...touched, numCards: true })}
            className={`w-24 border rounded-lg p-3 dark:text-white ${
              numCardsError ? "border-red-500" : "border-gray-300"
            }`}
            placeholder={t("aiGenerator.input.numberOfCardsPlaceholder")}
          />
          {numCardsError && (
            <p className="text-red-500 text-sm mt-1">{numCardsErrorMessage}</p>
          )}
        </div>

        <button
          type="button"
          disabled={isButtonDisabled}
          className={`w-full bg-indigo-600 text-white h-12 rounded-lg flex items-center justify-center space-x-2 transition ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-indigo-700 cursor-pointer"
          }`}
        >
          <Sparkles size={20} />
          <span>{t("aiGenerator.button.generateFlashcard")}</span>
        </button>
      </div>
    </div>
  );
};

export default aiGenerator;
