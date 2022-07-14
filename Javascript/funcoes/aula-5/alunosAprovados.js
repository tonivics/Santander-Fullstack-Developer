// Alunos Aprovados

const alunos = [
    {
        nome: 'Slyssas',
        nota: 8,
    },
     {
        nome: 'Uriel',
        nota: 6,
    },
    {
        nome: 'Emfrid',
        nota: 4,
    },
    {
        nome: 'Ongar',
        nota: 10,
    }
];

function checaAlunosAprovados (array, media){
    let alunosAprovados = [];

    for(let i = 0; i < array.length; i++){
        const {nome, nota} = array[i];

        if(nota >= media){
            alunosAprovados.push(nome);
        }
    }

    return alunosAprovados;
}

// Calcula Idade

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: 'Slyssas',
    idade: 22,
};

const pessoa2 = {
    nome: 'Eleenoir',
    idade: 32,
};

const pessoa3 = {
    nome: 'Garthir',
    idade: 40,
};

console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa2, [5]));
