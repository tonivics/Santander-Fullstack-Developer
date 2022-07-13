// For e While

function forInExemplo(obj){
    for(prop in obj){
        console.log(`${prop}: ${obj[prop]}`);
    }
}

const meuObjeto = {
    nome: 'Slyssa',
    idade: 22,
    regiao: 'Morrowind'
}

forInExemplo(meuObjeto);

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "Slyssas Shadowstep";

logLetras(palavra);