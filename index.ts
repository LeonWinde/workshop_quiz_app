//@ts-ignore
import prompt from "picoprompt";
import  path from "path";

const currentPath = path.resolve();



type Question = {
  questionText: string;
  answerOptions: string[];
  correctIndex: string;
};
const getQuestions = async () =>{
  try {
    const res = await fetch( "file:///" + currentPath + "/questions.json");
    const json = await res.json();
    return json;
  } catch (error) {
    console.log('error',error);
  }
}
const questionList= await getQuestions();
// console.log('quest',questionList);
// const testQuestion: Question = {
//   questionText: "what is my name",
//   answerOptions: ["1. Leon", "2. Anton", "3. Tom", "4. John"],
//   correctIndex: 0,
// };

// const testQuestion2: Question = {
//   questionText: "where do humans live",
//   "answerOptions": ["1. Earth", "2. Mars", "3. Jupiter", "4. Venus"],
//   "correctIndex": "2",
// };


// questionList.push(testQuestion);
// questionList.push(testQuestion2);

let score: number = 0;

while (questionList.length !== 0) {
  const { questionText, answerOptions, correctIndex } = questionList[0];
  console.log(`QUESTION : \n\n${questionText}\n\n${answerOptions.join("\n")}`);
  const userAnswer = prompt("What is the right answer? ");
  if (userAnswer === correctIndex) {
    score++; 
    console.log("Congratulations that was the right answer!\n");
  } else {
    console.log(
      `That was the wrong answer.\n${answerOptions[correctIndex]} was the right answer\n`
    );

  }
  questionList.shift();
}
console.log(score);
