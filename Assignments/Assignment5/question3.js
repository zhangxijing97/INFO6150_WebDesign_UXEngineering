const buttons = document.querySelectorAll(".choice");
const playerDisplay = document.getElementById("playerChoice");
const computerDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");

// Random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine result
function getResult(player, computer) {

    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Add click event to each button
buttons.forEach(button => {
    button.addEventListener("click", function () {

        const playerChoice = this.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);

        playerDisplay.textContent = "You chose: " + playerChoice;
        computerDisplay.textContent = "Computer chose: " + computerChoice;
        resultDisplay.textContent = result;
    });
});