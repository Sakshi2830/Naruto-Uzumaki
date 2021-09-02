var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
var score = 0;

console.log("-----------------------------------------")
console.log(`hello there ${userName}. Please answer each and every question and at the end of the quiz you will know that how much you know about naruto and his friends.`)
console.log("-----------------------------------------")
console.log("SEND ME THE SCORE THAT YOU HAVE EARNED.")

var questions = [
  {
    question: "Which is another word for ninja? ",
    answer: "SHINOBI", 
  },{
    question: "What's Naruto's mum's name? ",
    answer: "KUSHINA",
  },{
    question: "How many tails does Kurama have? ",
    answer: ["9", "NINE"]
  },{
    question: "Who is famous as The Copy Ninja ",
    answer: ["KAKASHI","kakashi","KAKASHI HATAKE","kakashi hatake"]
  },{
    question: "Which Hokage sealed the nine-tailed fox inside Naruto? ",
    answer: ["FOURTH HOKAGE", "4TH HOKAGE","4TH","4","FOURTH"]
  },{
    question: "Which chakra nature does naruto possess? ",
    answer: ["Wind","WIND","wind"]
  },{
    question: "What does 'Chidori' mean? ",
    answer: ["ONE THOUSAND BIRDS","1000 BIRDS"]

  },{
    question: "How many ninja from Konoha went on to the third stage(after the preliminairies) of the Chunin Exams? ",
    answer: ["FIVE", "5"]

  },{
    question: "Which of the legendary sannin becomes the fifth Hokage? ",
    answer: ["Tsunade","TSUNADE",'tsunade']
  },{
    question: "D-rank missions are usually given to what level of shinobi? ",
    answer: "GENIN",
  }
]


for(var i = 0;i < questions.length;i++){
  console.log("-----------------------------------------")
  console.log(" ")
  var que = readlineSync.question(questions[i].question);
  if(questions[i].answer.includes(que.toUpperCase())){
    console.log(`Great work ${userName}, you have answered correct.`);
    console.log("your current score is : ",score=score+1)
  }
  else{
   
      console.log("You answered wrong!!!")

    }
    
  
}

console.log(" ")
console.log("-----------------------------------------")
console.log(" ")
console.log(`YAY!!!!, you EARNED ${score} points. now send me the final scores.`)