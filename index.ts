import readline from "readline";
import * as data from "./questions.json";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(data);

type Question = {
  questionText: string;
  answerOptions: string[];
  correctIndex: string;
};

// the import gets turned into an object with 2 keys {__esModule:true,default:Question[]}
//@ts-ignore
const questionList: Question[] = data.default || [];

const askQuestion = () => {
  if (questionList.length <= 0) {
    console.log("Quiz is over, your score is ", score);
  }
  const { questionText, answerOptions, correctIndex } = questionList[0];
  console.log(`QUESTION : \n\n${questionText}\n\n${answerOptions.join("\n")}`);
  let userAnswer = "";
  rl.question("What is the right answer? ", (userAnswer) => {
    if (userAnswer === correctIndex) {
      score++;
      console.log("\nCongratulations that was the right answer!\n");
    } else {
      console.log(
        `\nThat was the wrong answer.\n${
          answerOptions[Number(correctIndex) - 1]
        } was the right answer\n`
      );
    }
    questionList.shift();
    askQuestion();
  });
};

let score: number = 0;
askQuestion();
