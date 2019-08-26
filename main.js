let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innterHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win! ";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innterHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". You lose! ";
}

function draw(userChoice, computerChoice) {
    computerScore_span.innterHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "You both chose " + convertToWord(userScore) + ". This is a draw! ";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
    console.log("user choice => " + userChoice);
    console.log("computer choice => " + computerChoice);
}

function main() {

    rock_div.addEventListener('click', function () {
        console.log("You clicked on rock");
        game("r");
    })

    paper_div.addEventListener('click', function () {
        console.log("You clicked on paper");
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        console.log("You clicked on scissors");
        game("s");
    })

}

