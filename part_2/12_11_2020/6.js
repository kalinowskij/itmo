// Задать количество тарелок и количество моющего средства.
//     Моющее средство расходуется из расчета 0,5 на одну тарелку.
//     В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
// В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.

let detergent = 50; // Количество моющего средства
let plates = 10; // Количество тарелок
let flow = 0.5; // Расход моющего средства на одну тарелку

do{
    detergent = detergent - flow;
    plates--;
    console.log("Осталось моющего средства - " + detergent);
    console.log("Осталось тарелок - " + plates);
}
while (plates > 0 && detergent > 0){

}