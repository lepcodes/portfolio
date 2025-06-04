import type { APIRoute } from "astro";
import { GoogleGenAI, Chat as ChatType } from '@google/genai';

export const prerender = false; 
const apiKey = import.meta.env.API_KEY;
const role = import.meta.env.CHAT_ROLE;
const model = import.meta.env.CHAT_MODEL;

const ai = new GoogleGenAI({ apiKey });
const chat = ai.chats.create(
  {
    model: model,
    config: {
      temperature: 0.5,
      maxOutputTokens: 1024,
      systemInstruction: role,
    }
  }
)

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const question = body.question;

    const response = await chat.sendMessage({
      message: question,
    });
    return new Response(
      JSON.stringify({
        response: response.text,
      }),
      {
        status: 200,
      },
    );
  }
  catch (error) {
    console.error("Error parsing request body:", error);
    return new Response(null, { status: 400 });
  }
}
