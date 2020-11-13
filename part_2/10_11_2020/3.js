// Из трех данных чисел выбрать наименьшее.
let number1 = 5;
let number2 = 15;
let number3 = 7;
let min = Infinity;

if(number1 < min){
    min = number1;
}
if(number2 < min){
    min = number2;
}
if(number3 < min){
    min = number3;
}

console.log("Задача");
console.log("Минимальное число - " + min);
