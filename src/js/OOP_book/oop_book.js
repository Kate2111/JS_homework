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

//4. В классе Employee сделайте три приватных свойства: имя, зарплату и возраст.
class CoffeeMachine {
  _waterAmount;

  constructor(value) {
    this._waterAmount = value;
  }

  waterAmount() {
    return this._cape(this._waterAmount);
  }

  _cape(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
}

const coffee = new CoffeeMachine('капучино')

console.log(coffee.waterAmount());

//5. Геттеры и сеттеры свойств в ООП в JavaScript

//Давайте сделаем для наших свойств специальные методы, позволяющие прочитать эти свойства. Такие методы (их называют геттеры) должны начинаться со слова get, а затем должно идти название читаемого свойство.

class PeopleShow {
  _human;
  _age;

  setHuman(value) {
    this._human = value;
  }

  setAge(number) {
    if(number > 0 && number < 50) {
      this._age = number;
    } else {
      throw new Error('недопустимое значение возраста')
    }
    
  }

  getHuman() {
    return this._human;
  }

  getAge() {
    return this._age;
  }
}
const personONe = new PeopleShow();
personONe.setHuman('Ivan');
personONe.setAge(25);
console.log(personONe.getHuman(), personONe.getAge());

const personTwo = new PeopleShow();
personTwo.setHuman('Petr');
//personTwo.setAge(60);

console.log(personTwo.getHuman(), personTwo.getAge());

//6. Цепочки методов в ООП в JavaScript

class Car{
  _mark;
  _year;

  setMark(value) {
    this._mark = value;
    return this;
  }

  setYear(year){
    this._year = year;
    return this;
  }

  getMark() {
    return this._mark;
  }

  getYear() {
    return this._year;
  }
}

const newCar = new Car();
newCar.setMark('BMV').setYear('2022');
console.log(newCar.getMark(), newCar.getYear())

//7. Переберите циклом массив объектов и выведите в консоль только имена работников.

class Student1 {
	constructor(name) {
		this.name = name;
	}
}
class Employee1 {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student1('user1'),
	new Employee1('user2'),
	new Student1('user3'),
	new Employee1('user4'),
	new Student1('user5'),
	new Employee1('user6'),
	new Student1('user7'),
];

for(let elem of users) {
  console.log(elem.name)
}

//Класс как набор методов в ООП в JavaScript
//8. Сделайте класс Validator, который будет выполнять проверку строк на корректность.
class Validator {
  //метод isEmail, проверяющий строку на то, что она корректный email.
  isEmail(str) {
    return /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(str)
  }

  //isDomain, проверяющий строку на то, что она корректное имя домена.
  isDomain(str) {
    return /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(str)
  }

  //метод isNumber, проверяющий строку на то, что она содержит только числа.
  isNumber(str) {
    return /^\d+$/.test(str);
  }
}

const newStr = new Validator(); 
console.log(newStr.isNumber('56dsa56.>98'));

//Объекты внутри классов в ООП в JavaScript
//9. Сделайте так, чтобы во второй и третий параметры передавались объекты отдельных классов.
class Employee2 {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}

class Position {
  constructor(position) {
    this.name = position;
  }
}

class Department{
  constructor(department) {
    this.name = department
  }
}

const newPosition = new Position('left');
const newDepartament = new Department('game');
const newEmployee3 = new Employee2('Ivan', newPosition, newDepartament);

console.log(newEmployee3.name, newEmployee3.position.name, newEmployee3.department.name);


//Массивы объектов в ООП в JavaScript
//10. Сделайте массив объектов класса класса Employee.
class Employee3 {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
}

const users2 = [
  new Employee3('Ivan', 500),
  new Employee3('Petr', 450),
  new Employee3('Dima', 300),
  new Employee3('Katy', 550),
]

users2.forEach(user => console.log(user.salary));

//Манипуляция объектами в классах в ООП в JavaScript
//11. Сделайте класс EmployeesCollection, который будет содержать массив работников.

class User8{
  constructor(name, salary) {
    this.name = name;
    this.salary = salary
  }
}
class  EmployeesCollection{
  _users;

  constructor(){
    this._users = [];
  }

  add(user) {
    return this._users.push(user)
  }

  show() {
    this._users.forEach(user => console.log(user.salary));
  }

  sumSalary() {
    return this._users.reduce((acc, user) => {
      return acc + user.salary
    }, 0)
  }

  getAvg(){
    return this.sumSalary() / this._users.length;
  }
}

const arrUser = new EmployeesCollection();
arrUser.add(new User8('Ivan', 500));
arrUser.add(new User8('Petr', 450));
console.log(arrUser);
arrUser.show();
console.log(arrUser.sumSalary());
console.log(arrUser.getAvg());




