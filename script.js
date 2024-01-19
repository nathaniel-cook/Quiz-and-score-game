//come back and make random question gen
const questions = [
  {
    question: "What is 2+2",
    answers: ["4", "5", "3"],
    correctAnswer: "4",
  },
  {
    question: "What is the capital of Kentucky?",
    answers: ["Frankfort", "Louisville", "Lexington"],
    correctAnswer: "Frankfort",
  },
  {
    question: "How old is Ashton?",
    answers: ["7", "8", "9"],
    correctAnswer: "8",
  },
  {
    question: "What is 1+1?",
    answers: ["1", "2", "3"],
    correctAnswer: "2",
  },
  {
    question: "Is 9 a number?",
    answers: ["Yes", "No", "Maybe"],
    correctAnswer: "Yes",
  },
  {
    question: "How many fingers does a single human hand have?",
    answers: ["6", "4", "5"],
    correctAnswer: "5",
  },
  {
    question: "Fill in the blank. Erin L_mar Schroeder",
    answers: ["u", "o", "a"],
    correctAnswer: "a",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const scoreContainer = document.getElementById("score-container");
const questionText = document.getElementById("questions");
const answersForm = document.getElementById("answers-form");
const submitButton = document.getElementById("submit-button");
const scoreText = document.getElementById("score");

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex]; 
    questionText.textContent = currentQuestion.question; 
    answersForm.textContent = ""; 
    currentQuestion.answers.forEach((answer, index) => {
      const answerItem = document.createElement("label");
      const radioButton = document.createElement("input");
      radioButton.type = "radio"; 
      radioButton.name = "answer"; 
      radioButton.value = answer; 
      answerItem.appendChild(radioButton); 
      answerItem.appendChild(document.createTextNode(answer)); 
      answersForm.appendChild(answerItem); 
    });
  } else {
    showScore(); 
  }
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked'); 
  if (!selectedAnswer) {
    alert("Select and answer or it won't work!");
    return; 
  }
  const selectedValue = selectedAnswer.value;
  const currentQuestion =
    questions[
      currentQuestionIndex];
  if (selectedValue === currentQuestion.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  showQuestion(); 
}

function showScore() {
  questionContainer.style.display = "none"; 
  scoreContainer.style.display = "block"; 
  if (score >= 6) {
    scoreText.textContent = `${score} out of ${questions.length}, great job!`;
  } else {
    scoreText.textContent = `${score} out of ${questions.length}, try a little harder!`;
  }
}

submitButton.addEventListener("click", checkAnswer); 

showQuestion();
