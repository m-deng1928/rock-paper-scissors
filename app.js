// Variables
let playerWins = 0;
let computerWins = 0;
let playerWeapon;
let computerWeapon;
const playerRoll = document.querySelector("#playerRoll");
const computerRoll = document.querySelector("#computerRoll");
const roundResult = document.querySelector("#roundResult");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const rockURL = "https://img.icons8.com/ios/512/000000/rock.png";
const paperURL = "https://img.icons8.com/ios/500/000000/toilet-paper.png";
const scissorsURL = "https://img.icons8.com/ios/500/000000/scissors.png";
const rollDiv = document.querySelector("#rollDiv");


// Weapons is a node list (looks and acts similarly to an array)
const weapons = document.querySelectorAll(".items");

// Use .forEach to iterate through each weapon in the node list
weapons.forEach((weapon) => {
    // Add "click" event listener to each weapon
    weapon.addEventListener("click", () => {
    playerWeapon = weapon.id
    playRound(weapon.id, computerPlay())
    })
})

// Randomly choose what computer plays
function computerPlay() {
    let randomRoll = Math.random()
    if (randomRoll < (1/3)) {
        computerWeapon = "rock";
        return "rock";
    } else if (randomRoll > (1/3) && randomRoll < (2 * 1/3)) {
        computerWeapon = "paper";
        return "paper";
    } else {
        computerWeapon = "scissors";
        return "scissors";
    }
}

function declareWinner() {
    if (playerWins === 5) {
        announcer.textContent = "YOU WIN THIS GAME !";
        computerWins = 0;
        playerWins = 0;
    }
    if (computerWins === 5) {
        announcer.textContent = "COMPUTER WINS THE GAME !";
        computerWins = 0;
        playerWins = 0;
    }
}

function updateScores() {
    playerScore.textContent = `${playerWins}`;
    computerScore.textContent = `${computerWins}`;
}

function showRolls() {
    if (playerWeapon == "rock") playerRoll.src = rockURL;
    if (playerWeapon == "paper") playerRoll.src = paperURL;
    if (playerWeapon == "scissors") playerRoll.src = scissorsURL;
    if (computerWeapon == "rock") computerRoll.src = rockURL;
    if (computerWeapon == "paper") computerRoll.src = paperURL;
    if (computerWeapon == "scissors") computerRoll.src = scissorsURL;
    rollDiv.style.cssText = "display: block";
}

// Plays one round of the game
function playRound(playerSelection, computerSelection) {
    if (playerWins === 0 && computerWins === 0) {
        announcer.textContent = "";
    }
  
    // Compare rolls, declare winner and update player scores
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            showRolls()
            updateScores()
            declareWinner()
            return
        } else if (computerSelection == "paper") {
            showRolls()
            ++computerWins;
            updateScores()
            declareWinner()
            return
        } else {
            showRolls()
            ++playerWins;
            updateScores()
            declareWinner()
            return
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            showRolls()
            updateScores()
            declareWinner()
            return
        } else if (computerSelection == "rock") {
            showRolls()
            ++playerWins;
            updateScores()
            declareWinner()
            return
        } else {
            showRolls()
            ++computerWins;
            updateScores()
            declareWinner()
            return
        }
    } else {
        if (computerSelection == "scissors") {
            showRolls()
            updateScores()
            declareWinner()
            return
        } else if (computerSelection == "paper") {
            showRolls()
            ++playerWins;
            updateScores()
            declareWinner()
            return
        } else {
            showRolls()
            ++computerWins;
            updateScores()
            declareWinner()
            return
        }
    }    
}