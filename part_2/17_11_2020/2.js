// Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.
console.log("Задание 2")
let string2 = "abcdef";
let symbol = "D";
console.log(string2.replace(new RegExp(symbol, "i"), symbol.repeat(2)));
