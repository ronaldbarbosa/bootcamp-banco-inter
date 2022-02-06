function valoresUnicos(array){
    let newArray = [... new Set(array)];
    return newArray;
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];
console.log(valoresUnicos(arr));