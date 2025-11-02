interface PuterUser {
  uuid: string;
  username: string;
}

interface KVItem {
  key: string;
  value: string;
}

interface ChatMessageContent {
  type: "file" | "text";
  puter_path?: string;
  text?: string;
}

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string | ChatMessageContent[];
}

interface PuterChatOptions {
  model?: string;
  stream?: boolean;
  max_tokens?: number;
  temperature?: number;
  tools?: {
    type: "function";
    function: {
      name: string;
      description: string;
      parameters: { type: string; properties: {} };
    }[];
  };
}

interface AIResponse {
  index: number;
  message: {
    role: string;
    content: string | any[];
    refusal: null | string;
    annotations: any[];
  };
  logprobs: null | any;
  finish_reason: string;
  usage: {
    type: string;
    model: string;
    amount: number;
    cost: number;
  }[];
  via_ai_chat_service: boolean;
}
