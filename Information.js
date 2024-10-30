"use strict";
let foxImage = null;
/* Chris Metcalfe helped me with code for my API and tips trick */

function fetchFoxes() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("API not fluffed");
      }
    })
    .then((data) => {
      // Process the response data here
      if (foxImage === null) {
        foxImage = document.createElement("img");
        foxImage.src = data.image;
        foxImage.alt = "Random Fox Image";
        document.getElementById("API-container").appendChild(foxImage);
      } else {
        foxImage.src = data.image;
      }
    })
    .catch((error) => {
      // errors? he}re
      console.error(error);
      document.getElementById("API-container").innerHTML =
        "Didn't Load: ${error.message}";
    });
}

fetchFoxes();

let foxes = document.getElementById("freshFoxes");
if (foxes) {
  foxes.addEventListener("click", function () {
    console.log("foxes are clicked");
    fetchFoxes();
  });
}

const items = ["Tip-1", "Tip-2", "Tip-3", "Tip-4"]; // Define your items array here
function fetchTips() {
  const randomIndex = Math.floor(Math.random() * items.length);
  console.log(`randomIndex: ${randomIndex},  items.length: ${items.length}`);
  console.log(`tipsResult: ${items[randomIndex]}`);
  tipsContainer.innerText = items[randomIndex];
}

let tipsContainer = document.getElementById("tipsTricksList");
const button2 = document.getElementById("tipsTricksButton");
if (tipsContainer && button2) {
  button2.addEventListener("click", () => {
    fetchTips();
  });
}

fetchTips();

let trickyFoxesButton = document.getElementById("tipsTricksFoxes");
if (trickyFoxesButton) {
  trickyFoxesButton.addEventListener("click", () => {
    if (foxes) fetchFoxes();
    if (tipsContainer) fetchTips();
  });
}
