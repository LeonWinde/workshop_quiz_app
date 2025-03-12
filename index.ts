//@ts-ignore
import prompt from "picoprompt";



type Question = {
  questionText: string;
  answerOptions: string[];
  correctIndex: number;
};
const getQuestions = async () =>{
  try {
    const res = await fetch("/home/dci-student/Schreibtisch/workshop/workshop_quiz_app/questions.json")
    const json = await res.json();
    console.log('res',json);
  } catch (error) {
    console.log('error',error);
  }
}
getQuestions();
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
const questionList: Question[] = [];

// questionList.push(testQuestion);
// questionList.push(testQuestion2);

// let score: number = 0;

// while (questionList.length !== 0) {
//   const { questionText, answerOptions, correctIndex } = questionList[0];
//   console.log(`QUESTION : \n\n${questionText}\n\n${answerOptions.join("\n")}`);
//   const userAnswer:number = Number(prompt("What is the right answer? "));
//   if (userAnswer - 1 === correctIndex) {
//     score++;
//     console.log("Congratulations that was the right answer!");
//   } else {
//     console.log(
//       `That was the wrong answer.\n${answerOptions[correctIndex]} was the right answer\n`
//     );

//   }
//   questionList.shift();
// }
// console.log(score);
