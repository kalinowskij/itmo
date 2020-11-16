// 2. Одномерным массивом задана доска 3 на 3
// var area = [ null, null, null, null, null, null, null, null, null ]
// Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML.
//     При появлении в массиве 0-ля рисовать нолик , 1-цы крестик
// Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
console.log("Задание 2");
let data = [1, null, 0, null, 1, null, null, null, null];
document.write("<table border='1'>");
for(let i = 0; i < 3; i++){

    let row = data.slice(i * 3, i * 3 + 3);
    document.write(`<tr>`);
    for(let j = 0; j < 3; j++){
        if(row[j] === null){
            document.write(`<td></td>`)
        }
        if(row[j] === 1){
            document.write(`<td>1</td>`)
        }
        if(row[j] === 0){
            document.write(`<td>0</td>`)
        }
    }
    document.write(`</tr>`);
}
document.write("</table>");
