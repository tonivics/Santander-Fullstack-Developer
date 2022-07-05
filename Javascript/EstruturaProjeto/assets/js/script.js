var initialNumber = document.getElementById('initialNumber');
var currentNumber = 0;

function decrement(){
    currentNumber -= 1;
    initialNumber.innerHTML = currentNumber;
}

function increment(){
    currentNumber += 1;
    initialNumber.innerHTML = currentNumber;
}