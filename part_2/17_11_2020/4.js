// Нечёткий поиск:
//     Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье". Пользователь вводит слово из словаря с одной перепутанной буквой, например: "Срида". Написать программу, которая позволяет с использованием регулярного выражения найти в строке-словаре введённое пользователем слово (не смотря на одну ошибку в слове) и
// вывести исправленное слово пользователю, например: "Среда".
console.log("Задание 4")
let week = "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье";
let day = "Смеда";
for (let i = 0; i < day.length; i++){
    let day_array = day.split("");
    day_array[i] = ".";
    let reg = day_array.join("");
    let search = week.match(new RegExp(reg, "i"));
    if(search){
        console.log(search[0]);
    }
}
