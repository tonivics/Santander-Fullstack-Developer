// If/Else e Switch Case

function numeroPostivio(num){
    //let resultado;

    const ehNegativo = num < 0;

    if(ehNegativo){
        return false;
    }

    return true;

    //return resultado;
}

function numeroPositivo2(num){
    const ehNegativo = num < 0;
    const ehMaiorQue10 = num > 10;

    if(ehNegativo){
        return 'Esse número é negativo';
    }else if(ehMaiorQue10){
        return 'Esse número é maior que 10';
    }

    return 'Esse número é positivo';
}

console.log(numeroPositivo2(2));
console.log(numeroPositivo2(20));
console.log(numeroPositivo2(-5));
console.log(numeroPositivo2(10));