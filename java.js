document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const resultText = document.getElementById("result-text");

    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const userChoice = choice.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);

            resultText.textContent = `Computer chose ${computerChoice}. ${result}`;
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});