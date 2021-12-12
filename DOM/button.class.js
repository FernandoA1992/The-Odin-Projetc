const btn = document.querySelector('#btn');
//btn.onclick = () => alert('Hello WORLD'); 

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert('HELLO WORLD');
});

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// METHOD 2
//btn.onclick = alertFunction;

// METHOD 3
//btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    console.log(e);
  });