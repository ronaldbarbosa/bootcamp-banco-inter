function validaDados(arr, num){
    try {
    if(!arr && !num) throw new ReferenceError("Parâmetros não enviados");
    if(typeof arr !== 'object') throw new TypeError("Array deve ser do tipo 'object'");
    if(typeof num !== 'number') throw new TypeError("O número deve ser do tipo 'number'");
    if(arr.length !== num) throw new RangeError("Tamanho inválido");
    return arr;
    } catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse é um ReferenceError");
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Esse é um TypeError");
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Esse é um RangeError");
            console.log(e.message);
        } else {
            console.log("Erro não esperado: " + e);
        }
    }
}

console.log(validaDados());
console.log(validaDados(1, 2));
console.log(validaDados([1, 2, 3], 3));
console.log(validaDados([], 'a'));
console.log(validaDados([], 5));