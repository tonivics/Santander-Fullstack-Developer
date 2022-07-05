// Executando um arquivo.js

function retornaNumPares(array){
    let numPares = []; // Instancia um array vazio;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            numPares.push(array[i]);
        }else{
            console.log(array[i], 'não é par!');
        }
    }

    console.log('Números pares: ',numPares);
}

let array = [1,2,4,5,8];

retornaNumPares(array);