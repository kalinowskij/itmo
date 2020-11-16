// 4*. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам.
//     Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов
// с номерами от 000001 до 999999.
// «Счастливым» считается билетик у которого сумма первых трёх цифр номера равна
// сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576.
// Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и
// теперь раздумывает, как много сувениров потребуется.
//     С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.
let tickets = [];
for (let i = 1; i <= 999999; i++){
    let registers = [];
    registers[0] = i > 0 ? (''+i)[0] : 0;
    registers[1] = i >= 10 ? (''+i)[1] : 0;
    registers[2] = i >= 100 ? (''+i)[2] : 0;
    registers[3] = i >= 1000 ? (''+i)[3] : 0;
    registers[4] = i >= 10000 ? (''+i)[4] : 0;
    registers[5] = i >= 100000 ? (''+i)[5] : 0;
    //registers.reverse();
    let firstHalf = Number(registers[0]) + Number(registers[1]) + Number(registers[2]);
    let secondHalf = Number(registers[3]) + Number(registers[4]) + Number(registers[5]);
    if(firstHalf === secondHalf){
        tickets.push(i)
        //tickets.push(registers)
    }
}
console.log(tickets.length);
