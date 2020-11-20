// Построить объект студент со свойствами: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
//     Написать отдельную функцию, которой передается объект студент,
//     а она выводит его содержимое.

let student = {
    firstname: "Петр",
    surname: "Петров",
    age: 24,
    hobby: [
        "Футбол",
        "Игра на гитаре",
        "Компьютерные игры",
    ],
    placeOfStudy: "ИТМО"
}

function print(student){

    let content = `
        Имя: ${student.firstname} <br>
        Фамилия: ${student.surname} <br>
        Возраст: ${student.age} <br>
        Хобби: ${student.hobby} <br>
        Место обучения: ${student.placeOfStudy}
    `;

    document.write(content)
}

print(student);
