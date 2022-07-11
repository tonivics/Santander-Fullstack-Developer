// Função anônima

const soma = function(a,b){
    return a + b;
}

console.log(soma(3,5));
console.log(soma(9,2));

// Função autoinvocável

(
    function(){
        let name = 'Digital Innovation One';
        console.log(name);
    }
)();

// Callback

const calc = function(operacao, num1, num2){
    return operacao(num1,num2);
}

const soma2 = function(num1,num2){
    return num1 + num2;
}

const sub = function(num1,num2){
    return num1 - num2;
}

const resultadoSoma = calc(soma,3,15);
const resultadoSub = calc(sub,3,15);

console.log(resultadoSub);
console.log(resultadoSoma);