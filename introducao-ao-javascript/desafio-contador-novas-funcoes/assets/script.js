let count = 0;
const CURRENT_NUMBER = document.getElementById("currentNumber");
const BTN_DEC = document.getElementById("decrement");
const BTN_INC = document.getElementById("increment");


BTN_DEC.addEventListener("click", () => {
    if(count >= -9){
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }
    isNegative(count);
});
BTN_INC.addEventListener("click", () => {
    if(count <= 9){
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }
    isNegative(count);
});

function isNegative(number){
    if (number < 0) CURRENT_NUMBER.style.color='#EB0030';
    else CURRENT_NUMBER.style.color="#FFFFFF";
}