// Executando um arquivo.js

function retornaNumPares(array){
    let numPares = [];
    let numImpares = []; 
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            numPares.push(array[i]);
        }else{
            numImpares.push(array[i]);
        }
    }

    console.log('Números pares: ',numPares);
    console.log('Números ímpares: ',numImpares);
}

let arrayTeste = [1,2,4,5,8];

retornaNumPares(arrayTeste);