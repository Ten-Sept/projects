

let win = 0
let lose = 0
let tie = 0

win = JSON.parse(localStorage.getItem(`win`));
lose = JSON.parse(localStorage.getItem(`lose`));
tie = JSON.parse(localStorage.getItem(`tie`));

document.getElementById('score').innerText = `Win: ${win}. Lose: ${lose}. Tie: ${tie} `;

function playGame(playerChoice) {
    function comChoice() {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        computerChoice = randomNumber === 1 ? "Rock" :
            randomNumber === 2 ? "Paper" :
                "Scissors"
        return computerChoice;
    }
    comChoice()
    console.log(computerChoice);
    let result = playerChoice === computerChoice ? "It's a tie"
        : playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Scissors" && computerChoice === "Paper" || playerChoice === "Paper" && computerChoice === "Rock" ? "You win"
            : "You lose";
    document.getElementById('outcome').innerText = ` You chose ${playerChoice}. The machine chose ${computerChoice}. ${result}.`;

    result === "It's a tie" ? tie++
        : result === "You lose" ? lose++
            : win++;
    document.getElementById('score').innerText = `Win: ${win} | Lose: ${lose} | Tie: ${tie} `;
    localStorage.setItem(`win`, JSON.stringify(`${win}`));
    localStorage.setItem(`lose`, JSON.stringify(`${lose}`));
    localStorage.setItem(`tie`, JSON.stringify(`${tie}`));
}

function reset() {
    if (confirm(`Do you really want to reset the game?`) === true) {
        win = 0;
        lose = 0;
        tie = 0;
        document.getElementById('score').innerText = `Win: 0 | Lose: 0 | Tie: 0 `;
    }

}

