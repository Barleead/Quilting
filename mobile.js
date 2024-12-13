"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".ham-menu");
  const headerLinks = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", function () {
    headerLinks.classList.toggle("show");
  });
});
