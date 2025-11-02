import { prepareFlashcardsInstructions } from "~/constants.ts";

export const generateFlashcards = async (
  aiClient: any,
  description: string,
  numCards: number,
) => {
  const instructions = prepareFlashcardsInstructions({ description, numCards });
  const response = await aiClient.chat(instructions);

  if (!response) throw new Error("AI response failed");

  const text =
    typeof response.message.content === "string"
      ? response.message.content
      : response.message.content[0].text;

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse AI response:", err);
    throw new Error("Invalid AI response format");
  }
};
