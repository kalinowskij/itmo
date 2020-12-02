// Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
//     Библиотека должна обладать следующими методами:
//     - поиск минимального элемента в переданном массиве;
// - поиск максимально элемента в переданном массиве;
// - расчет среднего арифметического значения элементов переданного массива;
// - создание копии (клонирование) переданного массива.

;!function (){
    window.myLibrary = {
        min: function (arr){
            return Math.min(...arr);
        },
        max: function (arr){
            return Math.max(...arr);
        },
        avg: function (arr){
            return arr.reduce((a, b) => (a + b)) / arr.length;
        },
        copy: function (arr){
            return arr.slice(0);
        }
    }
}();