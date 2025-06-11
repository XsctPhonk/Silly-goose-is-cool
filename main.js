const glitchPhrases = [
  "I need a taco",
  "aww man it’s wensday",
  "spaghetti code be like",
  "404: brain not found",
  "summoning proxy goblins",
  "running on ghost energy",
  "system.exe is confused"
];

function randomGlitch() {
  const el = document.getElementById("glitch-phrase");
  const phrase = glitchPhrases[Math.floor(Math.random() * glitchPhrases.length)];
  el.textContent = phrase;
}
setInterval(randomGlitch, 5000);
randomGlitch();

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  const userMsg = input.value.trim();

  if (!userMsg) return;

  const userDiv = document.createElement("div");
  userDiv.textContent = `You: ${userMsg}`;
  chatlog.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.textContent = `DataDagger: generating script for "${userMsg}"...`;
  chatlog.appendChild(botDiv);

  input.value = "";
  chatlog.scrollTop = chatlog.scrollHeight;
}
