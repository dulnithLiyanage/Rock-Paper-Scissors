const selectionButtons = document.querySelectorAll("[data-selection]");
const computerButtons = document.querySelectorAll(".computerBtn");
const playerScoreContainer = document.querySelector("#playerScore");
const computerScoreContainer = document.querySelector("#computerScore");
const computerVictory = document.querySelector("#computerVictory");
const playerVictory = document.querySelector("#playerVictory");

let playerScore = 0;
let computerScore = 0;

const SELECTIONDATA = [
  {
    name: "rock",
    beats: "scissors",
  },
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
];

selectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectionBtnName = button.dataset.selection;
    const playerSelectionInfo = SELECTIONDATA.find(
      (value) => value.name === selectionBtnName
    );
    const computerSelectionInfo = getComputerChoice();

    if (playerScore < 5 && computerScore < 5) {
      showComputerChoice(computerSelectionInfo);
      getSelection(playerSelectionInfo, computerSelectionInfo);
    }

    if (playerScore == 5 && playerScore > computerScore) {
      playerVictory.classList.remove("d-none");
      playerVictory.classList.add("d-block");
    } else if (computerScore == 5 && computerScore > playerScore) {
      computerVictory.classList.remove("d-none");
      computerVictory.classList.add("d-block");
    }
  });
});

function getSelection(selectionInfo, computerSelectionInfo) {
  const youAreWinner = getWinner(selectionInfo, computerSelectionInfo);
  const computerIsWinner = getWinner(computerSelectionInfo, selectionInfo);
  console.log(`You chose ${selectionInfo.name}`);
  console.log(`The Computer chose ${computerSelectionInfo.name}`);
  if (youAreWinner) {
    console.log("You Won!");
    playerScore += 1;
    playerScoreContainer.innerHTML = playerScore;
  } else if (computerIsWinner) {
    console.log("The Computer Won");
    computerScore += 1;
    computerScoreContainer.innerHTML = computerScore;
  } else {
    console.log("Its a tie!");
  }
}

function getWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function getComputerChoice() {
  return SELECTIONDATA[Math.floor(Math.random() * computerButtons.length)];
}

function showComputerChoice(computerSelectionInfo) {
  const computerButtons = document.querySelectorAll(".computerBtn");
  let computerChoice = computerSelectionInfo;
  computerButtons.forEach((value) => {
    if (value.dataset.selection == computerChoice.name) {
      value.classList.add("computer-choice");

      setTimeout(function () {
        value.classList.remove("computer-choice");
      }, 1000);
    }
  });
}
