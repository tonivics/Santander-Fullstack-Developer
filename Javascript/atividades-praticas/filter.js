function filtraPares(array){
    return array.filter(verificaPar);
}

function verificaPar(item){
    return item % 2 === 0;
}

const meuArray = [1, 24, 7, 12, 57, 78, 5];

console.log(filtraPares(meuArray));

meuArray.filter