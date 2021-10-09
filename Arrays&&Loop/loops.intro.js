      
    // Cats Example
    
    const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
      let info = `My cats are called: `;
      const para = document.querySelector(`p`); 

    // Loop Code is not working. I got My cats are called: Bill, Jeff, Pete, Biggles, Jasmin,
    /*for (let i = 0; i < cats.length; i++) {
       if (i === cats.lenght - 1) {
        info += 'and ' + cats[i] + '.';
         } else {
          info += cats[i] + ', ';
     }
    }
    para.textContent = info;
    */

    // the code below is working fine, it shows My cats are called Bill, Jeff, Pete, Biggles, and Jasmin.
    // Loop this code is working I got: My cats are called Bill, Jeff, Pete, Biggles, and Jasmin.
      /*for (let i = 0; i < cats.length; i++) {
      if (i === cats.length - 1) {
       info += 'and ' + cats[i] + '.';
       //info = `${info} and ${cats}${[i]}`;
      } else {
      info += cats[i] + ', ';
      // info += `${cats}${[i]},`;
      }
    }
     para.textContent = info;*/

// SAME EXAMPLE USING while() {}

let i = 0;

while (i < cats.lenght) {
 if ( i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
 } else {
    info += cats[i] + ', ';
 }
i++;
}

para.textContent = info;


//// Exiting loops with BREAK

/* 

<!--const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const input = document.querySelector(`input`);
const para2 = document.querySelector(`p`);
const btn = document.querySelector(`button`);

btn.addEventListener("click", function() {
let searchName = input.value.toLowerCase();
input.value = "";
input.focus;
for (let i = 0; i < contacts.length; i++) {
  let splitContact = contacts[i].split(":");
  if ( searchName === splitContact[0].toLowerCase()) {
    para2.textContent = `${splitContact[0]}'s phone number is ${splitContact[1]}.`
    break;
  } 
   else if ( i === contacts.length-1) 
   para2.textContent = `Contact not found`;
}
});  

*/

// Great Job here!!


