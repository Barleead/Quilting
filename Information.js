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

const items = [
  "When quilting, sometimes you want to make your own pattern. Go you!! Be as creative as you want as this is something that will be amazing, because YOU did it!",
  "When I do my own quilting pattern design, I try to keep in mind color schemes, what looks best together, size of the block and the type of fabric I want to use.",
  "Complementary colors are pairs of colors that are opposite each other on the color wheel and create high contrast when placed side by side. They are also known as opposite colors.",
  "As a personal preference, I like 10 to 14 inch square blocks for quilts, table runners and totes.  These projects usually have a border so they will be a bit bigger when completed.  For quilted throw pillows,  I use a finished 14 inch to 18 inch square block. ",
  "I use graphing  paper for most of my design ideas.  I pick a grid size that I can see clearly and that is easy to work with.   Depending on what I want to do (cross stitch, latch hook, or quilting),  the size can be 4  to 14 squares per inch.",
  "For cross stitch I try to match my pattern grid to the dimensions of the aida cloth.   If I plan on using 10 squares per inch aida then I would try to design on the same size grid.  Otherwise, the final dimensions will be off.   Example:  if you design on 7 squares per inch and the aida is 10 squares per inch, your image will be bigger.  The reverse is also true. ",
  "When cutting out your pattern don’t forget the seam allowance.  I generally use ¼ inch.  So a 2 inch finished square would actually be 2.5 x2.5 .",
  "Be accurate with your seam allowance, you can use a tool to help or put a bit of tape on the machine marking the ¼, ½ or ¾  distance from the needle.",
  "Be brave. Don’t be afraid of mistakes.  You learn from them and seams can be taken out. ",
  "You will need a thimble to protect fingers when hand quilting.  I personally use a leather one but my mother used metal. Find what works best for you.",
  "Having a large work area is ideal. However, I frequently use a folding table for needlework and my dining room table for sewing projects.",
]; // Define your items array here

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
