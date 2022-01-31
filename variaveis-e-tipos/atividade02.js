function substitui (array){
    if(!array) return -1;
    if(!array.length) return -1;
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0 && array[i] !== 0){
            array[i] = 0;   
        }
    }
    return array; 
}
let array1 = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substitui(array1));
let array2 = [];
console.log(substitui(array2));
let array3;
console.log(substitui(array3));