function somaNumeros(array){
    return array.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const meuArray = [1, 2, 3, 4, 5];

// console.log(somaNumeros(meuArray));

const lista = [
    {
        nome: 'Steel Short Longsword',
        preco: 120,
    },
    {
        nome: 'Steel Dagger',
        preco: 70,
    },
    {
        nome: 'Fine Iron Bow',
        preco: 80,
    },
    {
        nome: 'Steel Arrow (x100)',
        preco: 200,
    }
];

const ouroDisponivel = 550;

function calculaSaldo(ouroDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('Rodada: ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, ouroDisponivel);
}

console.log(calculaSaldo(ouroDisponivel, lista));