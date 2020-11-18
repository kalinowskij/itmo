// Дана строка, изображающая целое число. Вывести сумму цифр этого числа.
console.log("Задание 1")
let string = "034115";
console.log(eval(string.match(/\d/ig).join("+")));
