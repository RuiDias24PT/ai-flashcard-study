export const FlashcardFormat = `
interface Flashcard {
  question: string; // the question or prompt for the flashcard
  answer: string;   // the detailed answer or explanation
}
`;

export const prepareFlashcardsInstructions = ({
  description,
  numCards,
}: {
  description: string;
  numCards: number;
}) =>
  `You are an expert in creating educational flashcards for study purposes.
  Please generate ${numCards} flashcards for the following topic:
  Topic/Description: ${description}

  Each flashcard should include a "question" that is clear and concise and an "answer" that explains the concept in detail.
  Ensure the flashcards cover the most important aspects of the topic and are suitable for effective learning.
  Provide the flashcards using the following format: ${FlashcardFormat}
  Return the flashcards as a JSON array of objects, without any other text or comments.
  Do not include any other text or formatting.`;
