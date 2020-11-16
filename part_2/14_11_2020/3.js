// 3. Задан массив  - [12,4,3,10,1,20].
//     Удалить из него наименьшее и наибольшее значение.
console.log("Задание 2");
let arr = [12, 4, 3, 10, 1, 20];
console.log(arr);
let min = arr[0];
let max = arr[0];
let index_of_min;
let index_of_max;
for (let i = 0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
        index_of_min = i;
    }
}
arr.splice(index_of_min, 1);
for (let i = 0; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
        index_of_max = i;
    }
}
arr.splice(index_of_max, 1);
console.log(arr);
