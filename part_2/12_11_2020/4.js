// Вывести через console.log все числа от 1 до 100,
// с двумя исключениями.
// Для чисел, нацело делящихся на 3, она должна выводить ‘Three’,
// а для чисел, делящихся на 5 (но не на 3) – ‘Five’. Измените код так,
// чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
console.log("Задача 4");
for (let i = 1; i <= 100; i++){
    let result = i;
    let isThree =  Boolean(i % 3 === 0);
    let isFive =  Boolean(i % 5 === 0);
    let isThreeFive = isThree && isFive;
    if(isThree){
        result = "Three";
    }
    if(isFive){
        result = "Five";
    }
    if(isThree && isFive){
        result = "ThreeFive";
    }
    console.log(result);
}
