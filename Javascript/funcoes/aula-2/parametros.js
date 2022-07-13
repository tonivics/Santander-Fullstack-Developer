// Valores Padrão

function exponencial(array, num=1){
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
    }

    return result;
}

console.log("Valores padrão: ",exponencial([1,2,3,4], 4));
console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

// Objeto "arguments" exemplo 1

function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }

    return max;
}

console.log("Valor máximo: ", findMax(2,1,-40,20,100,-12));
console.log("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Objeto "arguments" exemplo 2

function showArgs(){
    return arguments;
}

console.log('showArgs(): ',showArgs('Antonio',26,'Geminiano',[1,2,3,4]));

// Object Destructuring

const user = {
    id: 24,
    displayName: 'aVic',
    fullName: {
        firstName: 'Antonio',
        lastName: 'Vicente'
    }
};

function userID({id}){
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}`;
}

function getDisplayName({displayName}){
    return displayName;
}

console.log(userID(user));
console.log(getFullName(user));
console.log(getDisplayName(user));
console.log("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Arrays - Spread

function sum(x, y, z){
    return x + y + z;
}

const numbers = [11,22,33];

console.log(sum(...numbers));
console.log("\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Arrays - Rest

function checkSize(...args){
    return args.length;
}

console.log(checkSize(5,3,10,-20));