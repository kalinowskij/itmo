// ##### Занятие 7:
// 1. DOM дерево
// ##### Домашнее задание:
// в html и обновляет значения каждую секунду.
//     Время выводить в формате чч:мм:cc, при этом
// часы, минуты и секунды отобразить разными цветами.
console.log("Задача 1");
// Функция определения случайных чисел
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
// Функция определения случайного цвета
function randomColor() {
    return "rgb(" + randomInteger(0, 255) + "," +  randomInteger(0, 255) + ", " + randomInteger(0, 255) + ")";
}
function clock(){
    setInterval(() => {

        // Создание даты
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // Поиск элементов на странице
        let hours_element = document.getElementById("hours");
        let minutes_element = document.getElementById("minutes");
        let seconds_element = document.getElementById("seconds");

        // Присвоение значение
        hours_element.innerHTML = hours;
        minutes_element.innerHTML = minutes;
        seconds_element.innerHTML = seconds;

        // Присвоение цветов
        hours_element.style.color = randomColor();
        minutes_element.style.color = randomColor();
        seconds_element.style.color = randomColor();

    }, 1000)
}

clock();
