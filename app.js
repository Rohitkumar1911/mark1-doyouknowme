var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What is your name? ");
 console.log("Welcome! " + userName + " Let's see how much do you know me? ");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!");
    score = score + 1;
    
  } else {
    console.log("You are wrong!");
  }
  console.log("current score: ", score);
}

var questions = [{
  question: "what is my college name? ",
  answer: "rajdhani college"
}, {
  question: "what i am doing there? ",
  answer: "bsc"
}, {
  question: "Does i like to listen songs? ",
  answer: "yes"
}, {
  question: "What is my favourite color? ",
  answer: "blue"
}, {
  question: "What is my favourite food? ",
  answer: "pizza"
}
  ];

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,
      currentQuestion.answer)
}
console.log("Your score is: ", score);