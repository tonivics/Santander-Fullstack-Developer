// Minha solução

function trocaPares(array){
    if(!array) return "Array inválido";
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if((array[i]%2 === 0) && (array[i] !== 0)){
            array[i] = 0;
        }
    }

    return array;
}

console.log(trocaPares([2,4,1,5,9]));