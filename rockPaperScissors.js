  let userScore = 0;
  let computerScore = 0;
  const userScore_span = document.getElementById("user-score");//returns 0
  const computerScore_span = document.getElementById("computer-score")
    const scoreBoard_div = document.querySelector(".score-board")//dot because it's a class // division of the website that holds the score
    const result_p = document.querySelector(".result > p")//returns the result of whether you won or not
    const rock_div = document.getElementById("r")//under div with class choices //division with id 'r' w/ pic of rock
    const paper_div = document.getElementById("p")//so you have to put a divison within a division to divide things up
    const scissors_div = document.getElementById("s")//these grab the divs with the corresponding ID

function getComputerChoice(){
    const choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]//randomNumber iterates through the choices array and pulls the letters 
}
//console.log(getComputerChoice())

// function convertToWord(letter){
//     if(letter === "r") return "Rock"
//     if (letter === "p") return "Paper"
//     return "Scissors"
// }

 function win(userChoice, computerChoice){
     userScore++;//increses user score by one
     userScore_span.innerHTML = userScore // shows score on page; grabs span tag in html
     computerScore_span.innerHTML = computerScore //span tags to manipulate them
     //result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , You won!!`
     //document.getElementById(userChoice)
     if(userScore <= 10){
        console.log('user wins!! this round')
        //result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , You won!!`
    }
 }

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore 
    computerScore_span.innerHTML = computerScore
    //result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} , You lost :(`
    if(userScore <= 10){
        console.log('computer wins!! this round :(')//how do I make it appear this round
        //result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , You won!!`
    }
}

function draw(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore //what is .innerhtml
    computerScore_span.innerHTML = computerScore
    //result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw`
    if(userScore <= 10){
        console.log('user wins, this round')
        //result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} , You won!!`
    }
}


    


 function game(userChoice){ // ok so does this takes in ; so what if we didn't put anything here what would happen//this checks user input agains computers math.random
     const computerChoice = getComputerChoice()//recursive function//which is the r, p, s's//grabs the randome generator of these functions
     //console.log(computerChoice)
     //console.log(userChoice)
//      const name = "david"
//      if (name === "david"){
//          console.log('helloe')
//      } else if (name === "pineapple"){
//          console.log('hey')
//      }
  
// game()

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break;
       }
    }



function main(){
    rock_div.addEventListener('click', function() { //what is click what is addeventlistener
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })
        

    scissors_div.addEventListener('click', function() {
        game("s")
    })
    
    }

main()