const selectionButtons = document.querySelectorAll("[data-selection]");
const computerButtons = document.querySelectorAll(".computerBtn");

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
    getSelection(playerSelectionInfo);
  });
});

// ** Change Later
// *****************************************************************************************************************************************************

function getSelection(selectionInfo) {
  const computerSelectionInfo = getComputerChoice();
  const youAreWinner = getWinner(selectionInfo, computerSelectionInfo);
  const computerIsWinner = getWinner(computerSelectionInfo, selectionInfo);
  console.log(`You chose ${selectionInfo.name}`);
  console.log(`The Computer chose ${computerSelectionInfo.name}`);
  if (youAreWinner) {
    console.log("You Won!");
  } else if (computerIsWinner) {
    console.log("The Computer Won");
  } else {
    console.log("Its a tie!");
  }
}
// *****************************************************************************************************************************************************
// ** Change Later

function getWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function getComputerChoice() {
  return SELECTIONDATA[Math.floor(Math.random() * computerButtons.length)];
}
