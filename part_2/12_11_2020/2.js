// Единицы длины пронумерованы следующим образом:
// 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр.
// Дан номер единицы длины и длина отрезка L в этих единицах (вещественное число).
// Вывести длину данного отрезка в метрах.
console.log("Задача 2");
let typeSize = 5;
let l = 20;
if (typeSize === 1) {
    console.log(l * 0.1 + " м.");
} else if (typeSize === 2) {
    console.log(l * 1000 + " м.");
} else if (typeSize === 3) {
    console.log(l + " м.");
} else if (typeSize === 4) {
    console.log(l * 0.001 + " м.");
} else if (typeSize === 5) {
    console.log(l * 0.01 + " м.");
} else {
    console.log("Неправильно задана единица длины");
}
