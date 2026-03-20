const heading = document.querySelector(".hero-content h1");
const navLinks = document.querySelectorAll(".nav-list a");
const button = document.querySelector(".btn");

console.log(heading);
console.log(navLinks);
console.log(button);

// console.log(document.getElementsByClassName("btn"));

const header = document.querySelector(".header");
header.style.backgroundColor = "#b5651d";

heading.style.fontSize = "3rem";

for (const link of navLinks) {
  link.style.color = "#faf0e6";
}

// navLinks.forEach((link) => (link.style.color = "#faf0e6"));

const hero = document.querySelector(".hero-content");
const newParagraph = document.createElement("p");

newParagraph.textContent = "Open daily from 7 AM to 9 PM.";

hero.appendChild(newParagraph);
