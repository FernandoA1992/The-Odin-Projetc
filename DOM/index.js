const container = document.querySelector('#container');

const content = document.createElement('div');
const red = document.createElement('p');
const blue = document.createElement('h3');


content.classList.add('content');
content.textContent = 'This is the amazing text-content';

red.classList.add('red');
red.textContent = `Hey I'm red`;
red.style.color = `red`;

blue.classList.add(`blue`);
blue.textContent =`I’m a blue h3!`;
blue.style.color = `blue`;

container.appendChild(content);
container.appendChild(red);
container.appendChild(blue);

const subContainer = document.createElement(`div`);
const h1 = document.createElement(`h1`);
const p = document.createElement(`p`);
subContainer.style.cssText = "background-color: pink; border: 5px solid black";
//subContainer.setAttribute('style', 'color: blue; background: yellow; border: 1px solid gray')
h1.textContent =`I’m in a div`;
p.textContent =`ME TOO`;
subContainer.appendChild(h1);
subContainer.appendChild(p);
container.appendChild(subContainer);

//Buttons


