import Groq from "groq-sdk";
import "dotenv/config";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    temperature: 0,
    messages: [
      {
        role: "system",
        content: "You are Jarvis, a smart personal assistant who answers question. Be always polite ",
      },
      {
        role: "user",
        content: "When i phone 16 was launched?",
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
  console.log(completion.choices[0].message.content);
}

main();


async function webSearch({query}) {
  //here we will do tavily api call

  return "Iphone was launched on 20 september 2024";
}