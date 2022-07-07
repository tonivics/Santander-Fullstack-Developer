function receba(num1, num2){
    if (!num1 || !num2) console.log("Número(s) inválido(s)")
    else{
        const saoIguais = (num1===num2);
        const strChecaIgualdade = (saoIguais) ? 'são iguais' : 'não são iguais';
        const soma = num1+num2;
        const checaSoma10 = (num1+num2>10);
        const checaSoma20 = (num1+num2<20);
        const strChecaSoma10 = (checaSoma10) ? 'é maior que 10':'é menor/igual a 10';
        const strChecaSoma20 = (checaSoma20) ? 'é menor que 20':'é maior/igual a 20';
        console.log('Os números %i e %i %s. Sua soma é %i, que %s e %s',num1,num2,strChecaIgualdade,soma,strChecaSoma10,strChecaSoma20);
    }
}

receba(7,10);