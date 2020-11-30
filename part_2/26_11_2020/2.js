// Реализовать счётчик нажатий на
// кнопку: Дана кнопка внутри неё
// записана цифра. При клике на
// кнопку – её значение должно
// увеличиваться на единицу.


function increment(){
    let count = 0;
    return function innerIncrement (){
        return count++;
    }
}

let runIncrement = increment();
let btn = document.getElementById('increment');
btn.onclick = function (){
    this.innerHTML = runIncrement();
}
