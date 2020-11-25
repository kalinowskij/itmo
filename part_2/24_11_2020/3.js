// ##### Занятие 7:
// 3. Дата и время
// ##### Домашнее задание:
// 3. Создать светофор (красный, желтый,
//     зелёный). Переключать цвет у светофора
// через каждые 2 сек сверху вниз и снизу вверх.


console.log('Задание 3')

let ms = 10; // Кратность миллисекунд
let red = 2000; // Сколько должен гореть красный
let orange = 2000; // Сколько должен гореть оранжевый
let green = 2000; // Сколько должен гореть зеленый
let green_flashing = 6000; // Сколько должен гореть мигающий зелены
let _red = 0; // Временная переменная для расчета горения красного
let _orange = 0; // Временная переменная для расчета горения оранжевого цвета
let _green = 0; // Временная переменная для расчета горения зеленого


// функция переключения сигналов
function trafficLight(){
    // Получения элементов в DOM
    let elem_red = document.getElementById('traffic_light_red');
    let elem_orange = document.getElementById('traffic_light_orange');
    let elem_green = document.getElementById('traffic_light_green');

    // Когда должен гореть красный
    if(_red <= red && _orange === 0 && _green === 0){
        _red += ms;
        elem_red.style.backgroundColor = 'red';
        elem_orange.style.backgroundColor = 'white';
        document.getElementById('traffic_light_green').style.backgroundColor = 'white';
    }
    // Когда должен гореть оранжевый
    if(_red > red && _orange <= orange && _green === 0){
        _orange += ms;
        elem_red.style.backgroundColor = 'red';
        elem_orange.style.backgroundColor = 'orange';
        elem_green.style.backgroundColor = 'white';
    }
    // Когда должен гореть зеленый
    if(_red > red && _orange > orange && _green <= green){
        _green += ms;
        elem_red.style.backgroundColor = 'white';
        elem_orange.style.backgroundColor = 'white';
        elem_green.style.backgroundColor = 'green';
    }
    // Когда должен гореть мигающий
    if(_red > red && _orange > orange && _green > green && _green <= green_flashing){
        _green += ms;
        elem_red.style.backgroundColor = 'white';
        elem_orange.style.backgroundColor = 'white';
        let first_symbol = _green.toString()[0];
        elem_green.style.backgroundColor = (first_symbol == 1 || first_symbol == 3 || first_symbol == 5) ? 'white' : 'green';
    }
    // Сброс
    if(_red > red && _orange > orange && _green > green_flashing){
        _red = 0;
        _orange = 0;
        _green = 0;
    }

}

setInterval(function (){
    trafficLight();
}, ms);
