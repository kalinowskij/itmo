// Создать шаблон объектов «Человек».
// Свойства «Имя», «Возраст», «Пол», «Интересы».
// Метод преобразования к строке вида: «Человек: Иван. Возраст: 25 лет. Пол: м. Интересы: музыка, программирование.»
// Создать шаблон объектов «Студент». Свойства от наследованные от шаблона объектов «Человек» и добавить «Институт». Переопределить метод преобразования к строке
// вида: «Студент: Иван. Возраст: 25 лет. Пол: м. Интересы: музыка, программирование. Обучается в ИТМО.»

class Man {
    name;
    age;
    sex;
    interests = [];

    constructor(name, age, sex, interests) {
        this.name = name
        this.age = age
        this.sex = sex
        this.interests = interests
    }

    toString() {
        return "Человек: " + this.name + ". Возраст: " + this.age + " лет. Пол: " + this.sex + ". Интересы: " + this.interests + "";
    }
}

class Student extends Man {
    university;

    constructor(name, age, sex, interests, university) {
        super();
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.interests = interests;
        this.university = university;
    }

    toString() {
        return "Студент: " + this.name + ". Возраст: " + this.age + " лет. Пол: " + this.sex + ". Интересы: " + this.interests + ". Обучается в " + this.university + ".";
    }
}

let man = new Man("Андрей", 23, "м", ["музыка", "программирование"]);
console.log(man.toString());
let student = new Student("Андрей", 23, "м", ["музыка", "программирование"], "ИТМО");
console.log(student.toString());
