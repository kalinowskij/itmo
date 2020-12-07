//Перенести в ОО-код следующий пример из реального мира:
// - есть курсы, учителя и ученики
// - у каждого курса есть свой учитель
// - у каждого учителя есть своя группа учеников
// Определите какие объекты есть в этом примере, какие у них
// свойства и какие методы, как эти объекты будут между собой
// взаимодействовать, например, к курсу можно добавить учителя.
// Создайте все необходимые шаблоны объектов (классы) и приведите
// пример их использования.

class CourseService{
    course;
    constructor(course) {
        this.course = course;
    }
    getTeachersByGroup(group){
        //...
    }
    getLearnersByGroup(group){
        //...
    }
    getLearnersByTeacher(teacher){
        //...
    }
    getTeachersByLearner(learner){
        //...
    }
    // Другие методы для работы с курсом.
}
class Course{
    name;
    groups = [];
    constructor(name) {
        this.name = name;
    }
    addGroup(group){
        this.groups.push(group)
    }
}
class Group{
    name;
    teacher;
    learners = [];
    constructor(name, teacher) {
        this.name = name;
        this.teacher = teacher;
    }
    addLearner(learner){
        this.learners.push(learner);
    }
}
class Man{
    name;
    age;
}
class Teacher extends Man{
}
class Learner extends Man{

}
