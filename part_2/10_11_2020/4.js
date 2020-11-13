// Вывести в консоль ближайшее к 10 из двух чисел, записанных
// в переменные m и n. Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45.
let m = 12;
let n = 6;
let number = 10;
let _m = ((number - m) < 0) ? (number - m) * -1 : (number - m);
let _n = ((number - n) < 0) ? (number - n) * -1 : (number - n);

let result;
if (_m < _n) {
    result = m;
}else{
    result = n;
}
if (_m === _n) {
    result = "Числа одинаково равны";
}

console.log("Задача 4");
console.log("Ближайшее число - " + result);
