// Подключить стороннюю библиотеку для построения графиков.
//     Построить график функции y = f(x):
// y = 5/x, при x>=1;
// y = x*x – 4*x, при x<1.
// Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
// Расчёт функции y = f(x) реализовать в виде отдельной функции.
CHART = document.getElementById('chart');

let x = [];
let y = [];
for(let i = -5; i < 5; i += 0.01){
    x.push(i);
    if(i >= 1){
        y.push(5 / i);
    }
    if(i < 1){
        y.push(i * i - 4 * i);
    }
}


Plotly.plot(CHART, [{
    x: x,
    y: y
}], {
    margin: {t: 0}
}, {showSendToCloud: true});

/* Current Plotly.js version */
console.log(Plotly.BUILD);
