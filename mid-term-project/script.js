const story = [
  {
    text: "Let The Adventure Begin!",
    choices: [{ text: "Start The Game", next: 1 }],
    image: "images/adeventure.jpg"
  },
  {
    text: "You find yourself in a dark, mysterious room. Strange symbols are etched on the walls, and there’s a flickering candle on a nearby table. A locked door is in front of you.",
    choices: [
      { text: "Inspect the symbols", next: 2 },
      { text: "Look for the key", next: 3 }
    ],
    image: "images/mystery_room.webp"
  },
  {
    text: "The symbols resemble an ancient language. They reveal a hidden puzzle on the wall.",
    choices: [
      { text: "Solve the puzzle", next: 4 },
      { text: "Leave and look for the key", next: 3 }
    ],
    image: "images/secret_door.webp"
  },
  {
    text: "You search for a key but find nothing. However, you notice a hidden vent in the wall.",
    choices: [
      { text: "Investigate the vent", next: 5 },
      { text: "Try to force the door open", next: 6 }
    ],
    image: "images/search_key.webp"
  },
  {
    text: "You solve the puzzle, and a hidden passageway opens. Inside, a chest glows faintly.",
    choices: [
      { text: "Open the chest", next: 7 },
      { text: "Look around the chamber", next: 8 }
    ],
    image: "images/puzzle.jpg"
  },
  {
    text: "You crawl through the vent and find yourself in a dusty hallway with a glowing door ahead.",
    choices: [
      { text: "Enter the door", next: 9 },
      { text: "Explore the hallway", next: 10 }
    ],
    image: "images/hallway.jpg"
  },
  {
    text: "You try to force the door open, but it won’t budge. Suddenly, the walls start closing in. Game Over.",
    choices: [{ text: "Restart", next: 0 }],
    image: "images/lost.webp"
  },
  {
    text: "Inside the chest, you find a powerful artifact. The room starts shaking, and you escape in triumph!",
    choices: [{ text: "Restart", next: 0 }],
    image: "images/chest.webp"
  },
  {
    text: "You find ancient books revealing the room’s hidden history. A secret door opens, leading to a new adventure.",
    choices: [{ text: "Restart", next: 0 }],
    image: "images/ancient-library.jpg"
  },
  {
    text: "You step through the glowing door and find yourself in another world filled with magical creatures. Your adventure continues!",
    choices: [{ text: "Restart", next: 0 }],
    image: "images/glowing.webp"
  },
  {
    text: "Exploring further, you discover a hidden relic that grants you immense knowledge. The journey never ends!",
    choices: [{ text: "Restart", next: 0 }],
    image: "images/relic.jpg"
  }
];

let currentStage = story[0];

function startGame() {
  currentStage = story[1]; // Start from the next stage after the introduction
  updateGame();
}

function updateGame() {
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.innerHTML = `
      <div class="innerContent">
        <h1>${currentStage.text}</h1>
        <div id="choices" class="choices" style="display:flex;justify-content: space-evenly">
          ${currentStage.choices
            .map(
              (choice) => `        
            <button class="button-85" onclick="makeChoice(${choice.next})">${choice.text}</button>
          `
            )
            .join("")}
        </div>
      </div>
    `;

  if (currentStage.image) {
    document.querySelector(".main").style.backgroundImage = `url("${currentStage.image}")`;
  }
}

function makeChoice(nextStageIndex) {
  // Ensure valid index exists for the next stage
  if (nextStageIndex >= 0 && nextStageIndex < story.length) {
    currentStage = story[nextStageIndex];
    updateGame();
  }
}

// Initial game setup
updateGame();
