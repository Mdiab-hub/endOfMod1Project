// function game() {
//     for (var i = 1; i <= 3; i++) {
//       round();
//     }
//   }
  
//   function round() {
//     var userChoice = prompt("Do you choose rock, paper or scissors?");
//     var computerChoice = Math.random();
//     if (computerChoice < 0.34) {
//       computerChoice = "rock";
//     } else if(computerChoice <= 0.67) {
//       computerChoice = "paper";
//     } else {
//       computerChoice = "scissors";
//     }
//     console.log("Computer: " + computerChoice);
//     console.log("User: " + userChoice);
//     var message = compare(userChoice, computerChoice);
//     console.log(message);
//   }
  
//   function compare (choice1, choice2) {
//     if (choice1 === choice2) {
//       return "The result is a tie!";
//     } else if (choice1 === "rock") {
//       if (choice2 === "scissors") {
//         return "rock wins";
//       } else {
//         return "paper wins";
//       }
//     } else if (choice1 === "paper") {
//       if (choice2 === "scissors") {
//        return "scissors wins";
//       } else {
//         return "paper wins";
//       }
//     } else if (choice1 === "scissors") {
//       if (choice2 === "paper") {
//         return "scissors wins";
//       } else {
//         return "rock wins";
//       }
//     }
//   }

function getComputerChoice() {
  const choices = ['q', 'r', 's']
  const randomNumber = Math.floor(Math.random() * 3)
  console.log(choices[randomNumber])
}

getComputerChoice()//so what am I confused about