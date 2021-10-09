const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

let notAllow =  'Refuse: ';
let allow = 'Admit: ';

for (let i = 0; i < people.length; i++) {


    if ( people[i] == "Phil" || people[i] == "Lola") {
        notAllow += people[i] + ', ';
    } else {
        allow += people[i] + ', ';
    }
}

refused.textContent = notAllow.slice(0,notAllow.length-2) + '.'; // OJO CON ESTO
admitted.textContent = allow.slice(0,allow.length-2) + '.'; // OJO CON ESTO

// It worked great job!

//Alternative Solution
/*
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '
let i = 0;

do {
 if(people[i] === 'Phil' || people[i] === 'Lola') {
 refused.textContent += people[i] + ', ';
 } else {
 admitted.textContent += people[i] + ', ';
 }
 i++;
} while(i < people.length);

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
*/








