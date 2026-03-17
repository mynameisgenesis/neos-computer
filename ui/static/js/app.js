const consoleTextArea = document.getElementById("console-text-area");

function clearConsoleTextArea() {
  consoleTextArea.innerHTML = "";
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function printCharacters(sentence) {
  const characters = Array.from(sentence);
  for (let i = 0; i < characters.length; i++) {
    consoleTextArea.innerHTML += characters[i];
    await delay(400);
  }
  await delay(2000);
  clearConsoleTextArea();
}

async function runSequence() {
  await printCharacters("Wake up, Neo...");
  await delay(3000);
  await printCharacters("The Matrix has you...");
  await delay(3000);
  await printCharacters("Follow the white rabbit.");
  await delay(3000);
  consoleTextArea.innerHTML = "Knock, knock, Neo.";
}

runSequence();
