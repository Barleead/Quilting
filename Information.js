"use strict";
let foxImage = null;
let tipsTricks = null;

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
tipsTricks();

let foxes = document.getElementById("freshFoxes");
if (foxes) {
  foxes.addEventListener("click", function () {
    console.log("foxes are clicked");
    fetchFoxes();
  });

  let tips = document.getElementById("tipsTricks");
if (tips) {
  tips.addEventListener("click", function () {
    console.log("button clicked");
    tipsTricks();
  });

}}
