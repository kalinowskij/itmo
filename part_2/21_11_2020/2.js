// ##### Занятие 6:
// 2. Область видимости, управление памятью и замыкание
// ##### Домашнее задание:
// 2. Сделайте функцию, каждый вызов который будет генерировать одно случайное число
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен
// хранится массив чисел, которые уже были сгенерированы функцией.
console.log("Задание 2");

// Функция определения случайных чисел
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function getNumber(){
    let array = [];


    return function inside(){
        if(array.length >= 100) return randomInteger(1, 100);
        let int = randomInteger(1, 100);
        if(array.indexOf(int) !== -1){
            while(array.indexOf(int) !== -1){
                int = randomInteger(1, 100);
            }
        }
        array.push(int)
        return int;
    }
}

let fn = getNumber();
console.log(fn());
// for(let i = 0; i < 120; i++){
//     console.log(fn());
// }
