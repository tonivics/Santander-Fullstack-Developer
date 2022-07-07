var initialNumber = document.getElementById('initialNumber');
var currentNumber = 0;

function decrement(){
    if(currentNumber > 0){
        currentNumber -= 1;
        initialNumber.innerHTML = currentNumber;
    }else{
        currentNumber -= 0;
    }
}

function increment(){
    if(currentNumber < 10){
        currentNumber += 1;
        initialNumber.innerHTML = currentNumber;
    }else{
        currentNumber += 0;
    }
}

currentNumber.addEventListener('click',increment());