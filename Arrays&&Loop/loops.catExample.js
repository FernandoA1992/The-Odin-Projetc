const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = `My cats are called: `;
const para = document.querySelector(`p`); 

// DO WHILE

//initializer
//do {
  // code to run

 // final-expression
//} while (condition)

i = 0;

do {
    if ( i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++;
}

while ( i < cats.length);

para.textContent = info;

//WHILE METHOD

//initializer
//while (condition) {
  // code to run

 // final-expression
//}

/*let i = 0;

while ( i < cats.length) {
    if (i === cats.length -1) {
        info += 'and ' + cats[i] + '.';
    } else {    
        info += cats[i] + ', ';
    }
i++;

}
para.textContent = info; */

// FOR METHOD

//for (initializer; condition; final-expression) {
    // code to run
//  }

/*for (let i = 0; i < cats.length; i++) {
      if (i === cats.length - 1) {
       info += 'and ' + cats[i] + '.';
       
      } else {
      info += cats[i] + ', ';
     
      }
    }
     para.textContent = info;
     */