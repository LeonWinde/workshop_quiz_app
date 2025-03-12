const prompt = require("prompt-sync")();

type Question = {
  questionText: string;
  answerOptions: string[];
  correctIndex: number;
};

const testQuestion: Question = {
  questionText: "what is my name",
  answerOptions: ["1. Leon", "2. Anton", "3. Tom", "4. John"],
  correctIndex: 0,
};

const testQuestion2: Question = {
  questionText: "where do i live",
  answerOptions: ["1. Berlin", "2. Hannover", "3. Hamburg", "4. Koeln"],
  correctIndex: 2,
};
const questionList: Question[] = [];

questionList.push(testQuestion);
questionList.push(testQuestion2);

let score: number = 0;

while (questionList.length !== 0) {
  const { questionText, answerOptions, correctIndex } = questionList[0];
  console.log(`QUESTION : \n${questionText}\n\n${answerOptions.join("\n")}`);
  const userAnswer = Number(prompt("What is the right answer? "));
  console.log(userAnswer);
  if (userAnswer - 1 == correctIndex) {
    score++;
    console.log("Congratulations that was the right answer!");
  } else {
    console.log(
      `That was the wrong answer.\n${answerOptions[correctIndex]} was the right answer`
    );
  }
  questionList.shift();
}
console.log(score);
