const gbaGames = {
  "pokemon emerald": "https://www.retrogames.cc/embed/15563-pokemon-emerald-version-u.html",
  "mario kart": "https://www.retrogames.cc/embed/41793-mario-kart-super-circuit.html",
};

const dsGames = {
  "pokemon platinum": "https://ds.44670.org/?game=pokemon-platinum",
  "new super mario bros": "https://ds.44670.org/?game=new-super-mario-bros",
};

function launchEmulator(game) {
  const key = game.toLowerCase();
  let url = gbaGames[key] || dsGames[key];

  if (!url) {
    alert("Game not found. Try another title.");
    return;
  }

  const output = document.getElementById("emu-output");
  output.innerHTML = `<iframe src="${url}" width="640" height="480" frameborder="0" allowfullscreen></iframe>`;
}

function initEmulatorUI() {
  const container = document.getElementById("emu-container");
  container.innerHTML = `
    <h2>🎮 Emulator Launcher</h2>
    <input id="emu-name" type="text" placeholder="Enter GBA or DS game name..." />
    <button onclick="launchEmu()">Launch</button>
    <div id="emu-output" style="margin-top:1em;"></div>
  `;
}

function launchEmu() {
  const name = document.getElementById("emu-name").value;
  launchEmulator(name);
}
