var a = prompt("Enter the first number: ");
var b = prompt("Enter the second number: ");

function setup() {
    var mybutton = createButton("Click Me to Swap");
    mybutton.mousePressed(swap);
  }
  
  function swap() {
    console.log(" I am swapping the numbers");
    // swap
    [b, a] = [a, b];
    console.log(" Second number now is " + b);
    console.log(" First number now is " + a);
  }
  
















