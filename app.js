import Groq from "groq-sdk";
import "dotenv/config";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main() {
  const completion = await groq.chat.completions.create({
    temperature: 1,
    //stop:"hello" //stop generting tet once it encounters 'hello'
    //max_completion_tokens: 1000 //generates 1k tokens only
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
