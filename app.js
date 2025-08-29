import Groq from "groq-sdk";
import "dotenv/config";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are Jarvis, a smart personal assistant. Be always polite ",
      },
      {
        role: "user",
        content: "Who are you",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
  console.log(completion.choices[0].message.content);
}

main();
