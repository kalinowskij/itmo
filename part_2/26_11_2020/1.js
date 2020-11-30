// Даны несколько div элементов на html. По первому нажатию на каждый div он перекрашивается зеленым цветом,
//     при повторном нажатии перекрашивается
// обратно и так далее каждый клик происходит чередование цвета.

function giveSaveColor(event){
    let element = event.target;
    if(element.classList.contains('sam_color_disable')){
        element.classList.remove('sam_color_disable');
        element.classList.add('sam_color_enable');
    }else{
        element.classList.remove('sam_color_enable');
        element.classList.add('sam_color_disable');
    }

}
