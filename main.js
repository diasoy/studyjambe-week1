const suit = ["Gunting", "Batu", "Kertas"];
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * suit.length);
  return suit[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Draw';
  }

  if (
    (playerChoice === 'Batu' && computerChoice === 'Gunting') ||
    (playerChoice === 'Gunting' && computerChoice === 'Kertas') ||
    (playerChoice === 'Kertas' && computerChoice === 'Batu')
  ) {
    return 'Player';
  }

  return 'Computer';
}

readline.question("Pilih Gunting, Batu, Kertas : ", (playerChoice) => {
  const computerChoice = getComputerChoice();
  console.log(`Pilihan Komputer: ${computerChoice}`);
  const winner = getWinner(playerChoice, computerChoice);
  console.log(`Pemenang: ${winner}`);
  readline.close();
});
