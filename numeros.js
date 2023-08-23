let number1 = 30;
let number2 = 100;
let number3 = 900;
let Bigger;

if (number1 > number2 && number1 > number3) {
    Bigger = number1
} else if (number3 > number1 && number3 > number2) {
    Bigger = number3
} 
else { (number2 > number1 && number2 > number3)
    Bigger = number2
}

console.log(Bigger)