// Дан номер месяца (1 — январь, 2 — февраль, ...).
// Вывести название соответствующего времени года ("зима", "весна" и т.д.).
console.log("Задача 1");
let month = 3;
if (month === 12 || month === 1 || month === 2) {
    console.log( 'Зима' );
} else if (month === 3 || month === 4 || month === 5) {
    console.log( 'Весна' );
} else if (month === 6 || month === 7 || month === 8) {
    console.log( 'Лето' );
} else if (month === 9 || month === 10 || month === 11) {
    console.log( 'Осень' );
} else {
    console.log( 'Неправильно задан номер месяца' );
}
