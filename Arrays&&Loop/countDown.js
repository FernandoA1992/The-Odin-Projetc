const output = document.querySelector('.output'); // This is linked with <div>
output.innerHTML = '';  // IDK the goal of this here

for ( let i = 10; i >= 0; i--) {

    const para = document.createElement('p'); // creates a new paragraph.
    output.appendChild(para); // We are appending the new element p into div AKA .output
   
    if ( i === 10 ) {
        para.textContent = `Countdown ${i}`;
    } else if ( i === 0 ) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = i;
    }
    
}

para.textContent = i;

// Alternative code is

/*
const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while(i >= 0) {
 let para = document.createElement('p');
 if(i === 10) {
 para.textContent = 'Countdown ' + i;
 } else if(i === 0) {
  para.textContent = 'Blast off!';
 } else {
 para.textContent = i;
 }

 output.appendChild(para);

 i--;
}
*/