// Написать функцию генерации поля n x n (значение n - аргумент функции),
// в ячейки рандомно спрятать несколько призов.
//     Пользователю дается 3 попытки найти их - по нажатию на ячейку либо открывается приз
// (иконка, изменения цвета и тд), либо иконка, сообщающая, что приза нет.
// Количество оставшихся попыток выводим рядом с игровым полем.
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function generate(n){
    let trys = 3;
    let trys_success = 0; // Сколько всего правильных ответов
    let successes = 0; // Сколько отвечено правильно
    let game_element = document.getElementById("game");
    let trys_element = document.createElement("div");
    trys_element.style.fontSize = "2em";
    trys_element.innerHTML = "Уровень: " + (n - 1) + " Осталось попыток: " + trys + " Надо открыть еще: " + (trys_success - successes);
    let table_element = document.createElement("table");
    table_element.style.border = "red solid 1px";
    for(let i = 0; i < n; i++){
        let tr_element = document.createElement("tr");
        for(let j = 0; j < n; j++){
            let td_element = document.createElement("td");
            let img_element = document.createElement("img");
            img_element.src = "https://pngimg.com/uploads/question_mark/question_mark_PNG54.png";
            img_element.style.width = "100px"
            img_element.style.cursor = "pointer"
            td_element.appendChild(img_element);
            let is_success = randomInteger(1, 2) == 2;
            if(is_success === true){
                trys_success++;
                trys_element.innerHTML = "Уровень: " + (n - 1) + " Осталось попыток: " + trys + " Надо открыть еще: " + (trys_success - successes);
            }
            td_element.dataset.isSuccess = is_success;
            td_element.onclick = function (){
                if(this.dataset.isSuccess === 'true'){
                    img_element.src = "https://freepikpsd.com/wp-content/uploads/2019/10/%D0%BF%D1%80%D0%B8%D0%B7%D1%8B-png-6.png";
                    successes++;
                    trys_element.innerHTML = "Уровень: " + (n - 1) + " Осталось попыток: " + trys + " Надо открыть еще: " + (trys_success - successes);
                    if(successes >= trys_success){
                        alert("Вы победили!");
                        game_element.innerHTML = "";
                        generate(n + 1);
                    }
                }else{
                    img_element.src = "https://avatanplus.com/files/resources/original/569beabe9dc4f152510cf8b6.png";
                    trys--;
                    trys_element.innerHTML = "Уровень: " + (n - 1) + " Осталось попыток: " + trys + " Надо открыть еще: " + (trys_success - successes);
                    if(trys < 0){
                        alert("Вы проиграли");
                        game_element.innerHTML = "";
                        generate(n);
                    }
                }
            }
            tr_element.appendChild(td_element);
        }
        table_element.appendChild(tr_element);
    }
    game_element.appendChild(trys_element);
    game_element.appendChild(table_element);
    console.log(trys_success);
}
generate(2);
