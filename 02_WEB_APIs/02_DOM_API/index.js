// const newH1 = document.createElement('h1');

// newH1.textContent = 'Hello DOM!';

// newH1.style.color = 'blue';

// document.body.appendChild(newH1);
// // document.body.removeChild(newH1);
// newH1.remove();

// const title = document.getElementById('titleInput');
// const btn = document.querySelector('#create-h1-btn');

// console.log(title);
// console.log(btn);

// const input = document.getElementById('titleInput');

// function createH1Element() {
//   const h1 = document.createElement('h1');

//   //   h1.textContent = 'Hello world!';
//   h1.textContent = input.value;

//   h1.style.color = 'red';

//   document.body.appendChild(h1);

//   input.value = '';
// }

// const createH1btn = document.getElementById('create-h1-btn');
// createH1btn.addEventListener('click', createH1Element);

// input.addEventListener('keydown', (e) => {
//   if (e.key === 'Enter') createH1Element();
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://google.com');
// link.target = '_blank';

// const btn = document.querySelector('button');

// btn.classList.add('active');
// btn.classList.remove('active');

// const ul = document.querySelector('ul');
// console.log(ul.children);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// const li = document.createElement('li');
// li.textContent = 'New Item';
// ul.appendChild(li);
// ul.removeChild(li);

// console.log(typeof console);
// console.log(window);

// window.addEventListener('resize', (e) => {
//   console.log(
//     'Window resized to:',
//     e.target.innerWidth,
//     'x',
//     e.target.innerHeight,
//   );

//   const widthContainer = document.getElementById('window-width');
//   widthContainer.textContent = `Current width: ${e.target.innerWidth} x ${e.target.innerHeight}`;
// });

// const img = document.getElementById('about-img');
// img.addEventListener('click', (e) => {
//   console.log(e);

//   e.target.src = `https://placedog.net/400/300?r=${Math.random()}`;
// });
