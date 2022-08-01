function verificaArray(array, number){
    try{
        if(!array || !number) throw new ReferenceError("Parâmetros inválidos!");
        if(typeof array !== 'object') throw new TypeError("Array precisa ser tipo object");
        if(typeof number !== 'number') throw new TypeError("Número precisa ser do tipo number");
        if(array.length !== number) throw new RangeError("Tamanhos diferentes");

        return array;
    }
    catch (error){
        if(error instanceof ReferenceError){
            console.log(error.message);
            console.log(error.name);
        }else if(error instanceof TypeError){
            console.log(error.message);
            console.log(error.name);
        }else if(error instanceof RangeError){
            console.log(error.message);
            console.log(error.name);
        }else{
            console.log('Erro inesperado' + error.name);
        }
    }
}