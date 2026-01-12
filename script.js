let playerGuess = "";
let pWins = 0;
let cWins = 0;

//Accesing elements through id and classes


let choices = ["rock","paper","scissors"];
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let option = document.querySelectorAll(".option");
let compWins = document.querySelector("#compWins");
let playerWins = document.querySelector("#playerWins");
let btn = document.querySelector(".btn");
let text = document.querySelector("#text-display");


//computer random guess

function getCompChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//user choice

function playGame(playerGuess) {
    let compGuess = getCompChoice();
    console.log("Computer: ", compGuess);
    console.log("Player: ",playerGuess);



//check conditions according to values

if(compGuess === playerGuess){
    document.querySelector("button").innerText = "Its a Draw!! Once More?";
}
else if(compGuess === "rock" && playerGuess === "scissors" || compGuess === "scissors" && playerGuess === "paper" || compGuess === "paper" && playerGuess === "rock") {
    document.querySelector("button").innerText = "Computer wins!! Try Again.";
    cWins++;
    compWins.innerHTML = cWins;
}
else {
    document.querySelector("button").innerText = "Player Wins!! Wanna go Again?";
    pWins++;
    playerWins.innerText = pWins;
}
}


rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
   playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});

btn.addEventListener("click", () => {
    alert("Choose your Choice");
});