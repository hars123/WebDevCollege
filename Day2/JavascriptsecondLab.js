var x = 5;
var y = 2;
console.log(!`The sum of x and y = ${x+y} `);


let number = 5;

if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }
}


// function implementation

function checkOddEven(number) {
    if (number % 2 === 0) {
      console.log(number + " is Even");
    } else {
      console.log(number + " is Odd");
    }
  }
  

  checkOddEven(4);  
