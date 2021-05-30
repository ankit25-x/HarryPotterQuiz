var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name");

console.log("Welcome", userName, "to Harry Potter Trivia");

console.log("Are you Ready?");

var highScore = [
  {
   name: "Abhay",
   points: 3,
  },
  {
   name: "Satyaveer",
   points: 1,
   },
]

//welcome part is done

//moving on to the function part
function quizPlay(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
  console.log("You are Right!");
  score= score+1;
  console.log("Your score is", score);
  }
  else{
  console.log("You are wrong!");
  score=score-1;
  console.log("Your score is", score);
  }
}

//list of objects
var questions =[{
      ques: "A spell that is kryptonite to dementors ",
      ans: "Expecto Patronum",
     },{
      ques: "What was the name of Dumbledore's Phoenix? ",
      ans: "Fawkes",
     },{
      ques: "Mooney Wormtail Padfoot and Prongs..Who is Padfoot? ",
      ans: "Sirius Black",
    },{
      ques: "What was the name of Harry's first broomstick? ",
      ans: "Nimbus 2000",
    },{
      ques:"I open at the close..who am I? ",
      ans: "Snitch",
    },
];
//calling function

for(var i=0; i<questions.length; i++){
  quizPlay(questions[i].ques,questions[i].ans);
}
 
console.log("Thanks for Playing...");
var alpha = highScore[0].points
for(var j=0; j<highScore.length; j++){

  if(highScore[j].points>alpha){
    alpha = highScore[j];
    
  }
}

if(score>alpha){
  console.log(" Wow! New High Score");
}
else{
  console.log("Better Luck Next Time");
}

console.table(highScore);