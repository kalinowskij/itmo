// Дано целое число, лежащее в диапазоне от -999 до 999.
// Вывести строку - словесное описание данного числа вида "отрицательное двузначное число",
// "нулевое число", "положительное однозначное число" и т.д.
console.log("Задача 3");

let number = 0;
let result = number + " - это ";

if (number < 0) {
    result += " отрицательное, ";
}
if (number > 0) {
    result += " положительное, ";
}
if (number === 0) {
    result += " нулевое, ";
}
let range;
if (number > -1000 && number < 1000) {
    range = " трехзначное ";
}
if (number > -100 && number < 100) {
    range = " двухзначное ";
}
if (number > -10 && number < 10) {
    range = " однозначное ";
}
result += range;


result += " число";
console.log(result);
