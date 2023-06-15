//1. Сделайте класс Employee.
class Employee {
    name;
    age;
    salaryDay;
    workDay;

    getSalaryMonth(text) {
        return `${this.name} ${text} - ${this.workDay * this.salaryDay}`;
    }
}

const newEmployeeOne = new Employee();
newEmployeeOne.name = 'Ivan';
newEmployeeOne.age = 25;
newEmployeeOne.salaryDay = 50;
newEmployeeOne.workDay = 21;
newEmployeeOne.getSalaryMonth();

const newEmployeeTwo = new Employee();
newEmployeeTwo.name = 'Petr';
newEmployeeTwo.age = 32;
newEmployeeTwo.salaryDay = 35;
newEmployeeTwo.workDay = 21;

console.log(newEmployeeOne.getSalaryMonth('Зарплата за месяц'));
console.log(newEmployeeTwo.getSalaryMonth('Зарплата за месяц'));

//2. Сделайте класс  Student. 
//Сделайте вспомогательный метод, который будет получать первый символ строки и делать его заглавным.
//Сделайте метод, который вернет инициалы студента, то есть первые буквы его имени и фамилии

class Student{
    name;
    surn;
    middle;

    showFullName() {
        return this.capitalLetter(this.surn) + '.' +  this.capitalLetter(this.name) + '.' +  this.capitalLetter(this.middle);
    }

    capitalLetter(str) {
        return str[0].toUpperCase();
    }    
}

const newStudent = new Student();
newStudent.name = 'Ekaterina';
newStudent.surn = 'Noskova';
newStudent.middle = 'Andreevna';
console.log(newStudent.showFullName());


//3
class User {
    constructor(name, surn, salary) {   //Специальный метод, который будет вызываться в момент создания нового объекта класса
		this.name = name;
        this.surn = surn;
        this.salary = salary 
	}

    increaseSalary(){
        return (this.salary * 0.1) + this.salary;
    }
}

let newUser = new User('jonh', 'smit', 130);
console.log(newUser.increaseSalary())