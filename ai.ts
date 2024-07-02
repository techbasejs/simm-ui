import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

const prompt1 = PromptTemplate.fromTemplate(
  `What is the city {person} is from? Only respond with the name of the city.`
);
const prompt2 = PromptTemplate.fromTemplate(
  `What country is the city {city} in? Respond in {language}.`
);

const chatModel = new ChatOpenAI({
  apiKey: "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",
});

const chain = prompt1.pipe(chatModel).pipe(new StringOutputParser());

const combinedChain = RunnableSequence.from([
  {
    city: chain,
    language: (input) => input.language,
  },
  prompt2,
  chatModel,
  new StringOutputParser(),
]);

const result = await combinedChain.invoke({
  person: "Justin Bieber",
  language: "Vietnamese",
});

console.log(result);

/*
  Chicago befindet sich in den Vereinigten Staaten.
*/