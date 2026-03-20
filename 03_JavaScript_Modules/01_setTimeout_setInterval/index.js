// setTimeout(function, delay)

// function greet() {
//   console.log('Hello');
// }

// setTimeout(greet, 5000);

// setTimeout(() => {
//   console.log('Hello, after 3 seconds');
// }, 3000);

// const timeoutID = setTimeout(greet, 2000);
// clearTimeout(timeoutID);

// const timeoutID = setTimeout(() => {
//   console.log('You waited too long');
// }, 5000);

// const btn = document.getElementById('cancel-btn');

// btn.addEventListener('click', () => {
//   clearTimeout(timeoutID);
//   console.log('timeout cancelled');
// });

// setInterval(function, delay)

// setInterval(greet, 1000);
// const intervalID = setInterval(greet, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log('Interval stopped');
// }, 5000);

// const clock = document.getElementById('clock');

// function updateClock() {
//   const now = new Date();
//   clock.textContent = now.toLocaleTimeString();
// }

// setInterval(updateClock, 1000);

let counter = 1;

const fetchPokemon = async (counter) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${counter}`,
    );

    if (!response.ok)
      throw new Error(`Something went wrong: ${response.status}`);

    const data = await response.json();
    console.log(`Pokemon ID:${data.id} name:${data.name.toUpperCase()}`);
  } catch (error) {
    console.error(error);
  }
};

// fetchPokemon(80);

const intervalID = setInterval(() => {
  fetchPokemon(counter);
  counter++;
  if (counter > 10) clearInterval(intervalID);
}, 1000);
