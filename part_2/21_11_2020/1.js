// ##### Занятие 6:
// 1. Копирование значений и Передача по ссылке
// ##### Домашнее задание:
//     1. Реализовать функцию foo:
//     let a = {
//         name: 'static',
//         count: 0
//     }
// console.log(foo(a, 'count', 10)); /* В консоль выведет: [{name:'static', count:0},
//  {name:'static', count:1}, ..., {name:'static', count:9}] */
console.log("Задание 1");
    let a = {
        name: 'static',
        count: 0
    }
function foo(a, count_name, count_value){
    let result = [];
    for(let i = 0; i < count_value; i++){
        a[count_name] = i;
        result.push(Object.assign({}, a));
    }
    return result;
}

console.log(foo(a, 'count', 10));

