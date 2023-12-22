

let win = 0
let lose = 0
let tie = 0

win = JSON.parse(localStorage.getItem(`win`));
lose = JSON.parse(localStorage.getItem(`lose`));
tie = JSON.parse(localStorage.getItem(`tie`));

let shownScore = false;

function playGame(playerChoice) {

    function comChoice() {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        computerChoice = randomNumber === 1 ? "Rock" :
            randomNumber === 2 ? "Paper" :
                "Scissors"
        return computerChoice;
    }
    comChoice();

    let result = playerChoice === computerChoice ? "It's a tie"
        : playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Rock" ? "You win"
            : "You lose";
    document.getElementById('outcome').innerHTML = ` You <img class="move" style="height: 50px" src="${playerChoice}.png"> | ${result} | <img class="move" style="height: 50px" src="${computerChoice}.png"> Me `;

    result === "It's a tie" ? tie++
        : result === "You lose" ? lose++
            : win++;

    if (shownScore) {
        document.querySelector('.score').innerText = `Win: ${win} | Lose: ${lose} | Tie: ${tie} `;
    }

    localStorage.setItem(`win`, JSON.stringify(`${win}`));
    localStorage.setItem(`lose`, JSON.stringify(`${lose}`));
    localStorage.setItem(`tie`, JSON.stringify(`${tie}`));
}

function reset() {
    if (confirm(`Do you really want to reset the game?`) === true) {
        win = 0;
        lose = 0;
        tie = 0;
        document.querySelector('.score').innerHTML = `Win: 0 | Lose: 0 | Tie: 0 `;
    }

}

function showScore() {
    shownScore = true;
    return document.querySelector('.score').innerHTML = `Win: ${win} | Lose: ${lose} | Tie: ${tie} `;
}
