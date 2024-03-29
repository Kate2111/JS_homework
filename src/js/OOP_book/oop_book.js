
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
//console.log(arrUser);
arrUser.show();
//console.log(arrUser.sumSalary());
//console.log(arrUser.getAvg());




//Наследование классов в ООП в JavaScript
//12. Сделайте класс Employee, наследующий от класса User.
class User9{
  constructor(name, salary) {
    this.name = name;
    this.salary = salary
  }
  setName(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
  #capeFirst(str) {
		return str[0].toUpperCase() + str.slice(1);
	}
}

class Student2 extends User9{
  setYear(year) {
		this.year = year;
	}
	getYear() {
		return this.year //+ this.#capeFirst(this.name); //Приватные методы не наследуются. Это сделано специально, чтобы не нарушать инкапсуляцию.
	}
}
//Приватные свойства не наследуются. Но потомок может манипулировать ими через публичные методы родителя.

const student = new Student2
student.setName('Mikel');
student.setYear(1);
const nameStudent = student.getName();
const yearStudent = student.getYear();
console.log(nameStudent, yearStudent);



//Переопределение методов родителя в ООП в JavaScript
class User10{
  constructor(name, salary, age) {
    this.name = name;
    this.salary = salary;
    this.age = age;
  }
  setAge(age) {
		this.age = age;
	}
	getAge() {
		return this.age;
	}
  
}

class Student3 extends User10{
  setAge(age) {
		if (age > 18 && age < 65) {
			super.setAge(age); //Вызов переопределенного метода в ООП в JavaScript
		} else {
			throw new Error('Вы не подходите по возрасту');
		}
	}
}

const student2 = new Student3();
const student3 = new Student3();
const age2 = student2.setAge(25);
//const age3 = student3.setAge(17); //Ошибка
//console.log(age2);
//console.log(age3);


//Конструктор при наследовании в ООП в JavaScript
class User11{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Student4 extends User11{
  constructor(name, age, year) {
    super(name, age); //переопределение конструктора родителя
    this.year = year;
  }
  setYear(year) {
    this.year = year;
  }
  getYear() {
    return this.year;
  }
}

//Проблема приватных свойств при наследовании в ООП в JavaScript
class User12 {
	#age;
	
	setAge(age) {
		this.#age = age;
	}
	getAge() {
		return this.#age;
	}
}

class Employee4 extends User12 {
	incAge() {
		let age = this.getAge();
		age++;
		this.setAge(age);
	}
}

const newEmployee4 = new Employee4();
newEmployee4.setAge(10);
newEmployee4.incAge();
//console.log(newEmployee4.getAge());

//Защищенные методы в ООП в JavaScript
//Защищенные методы, которые наследуются, но не видны снаружи класса
class User13 {
	setName(name) {
		if (this._notEmpty(name)) {
			this.name = name;
		}
	}
	getName() {
		return this.name;
	}
	
	_notEmpty(str) {
		return str.length > 0;
	}
}
class Employee5 extends User13 {
	setSurn(surn) {
		if (this._notEmpty(surn)) {
			this.surn = surn;
		}
	}
	getSurn() {
		return this.surn;
	}
}
const newEmployee5 = new Employee5();
newEmployee5.setName('Ivan');
newEmployee5.setSurn('Ivanov');
const nameEmployee = newEmployee5.getName();
const surnEmployee = newEmployee5.getSurn();
//console.log(nameEmployee, surnEmployee);



//Защищенные свойства в ООП в JavaScript
class User14 {
	_name;
	
	setName(name) {
		this._name = name;
	}
	getName() {
		//return this.#name;
	}
}

class Employee6 extends User14 {
	setName(name) {
		if (name.length > 0) {
			this._name = name;
		}
	}
}


//Иерархия наследования классов в ООП в JavaScript
class User15{
  setNameSurn(name, surn) {
    this.name = name;
    this.surn = surn;
  }
  getNameSurn() {
    return `Имя: ${this.name}, Фамилия:${this.surn}`;
  }
}

class Employee7 extends User15{
  setAge(age) {
    this.age = age;
  }
  getAge(){
    return `Возраст: ${this.age}`;
  }
}

class Programmer extends Employee7{
  setJobTitle(title){
    this.title = title;
  }
  getProgrammer(){
    return `${this.getNameSurn()}, ${this.getAge()}, должность: ${this.title}`;
  }
}

class Designer extends Employee7{
  setJobTitle(title){
    this.title = title;
  }
  getDesigner(){
    return `${this.getNameSurn()}, ${this.getAge()}, должность: ${this.title}`;
  }
}

const newProgrammer = new Programmer();
newProgrammer.setNameSurn('Ivan', 'Ivanov');
newProgrammer.setAge(25);
newProgrammer.setJobTitle('programmer');
const ivan = newProgrammer.getProgrammer();

const newDesigner = new Designer();
newDesigner.setNameSurn('Petr', 'Petrov');
newDesigner.setAge(30);
newDesigner.setJobTitle('designer');
const petr = newDesigner.getDesigner();
//console.log(ivan, petr);
//console.log(newProgrammer.getAge); //Исходный код метода в ООП в JavaScript
let method = newProgrammer.getAge; //Потеря контекста в коде метода в ООП в JavaScript
method = method.bind(25);
//console.log(method());


//Потеря контекста в ООП в JavaScript
//Стрелочная функция сохраняет контекст, в котором она была создана, и не создает своего собственного значения this
class Employee8 {
	constructor(name, salary, coeffs) {
		this.name = name;
		this.salary = salary;
		this.coeffs = coeffs;
	}
	
	getTotal() {
		return this.coeffs.reduce((res, coeff) => {
			return res + this.salary * coeff;
		}, 0);
	}
}

let employee = new Employee8('john', 1000, [1.1, 1.2, 1.3]);
let total = employee.getTotal();
console.log(total);

//Анонимные классы в ООП в JavaScript
let arrHelper = new class {
	getSum(arr) {
		
	}
	getAvg(arr) {
		
	}
}

//Классы и модули в ООП в JavaScript

/* import Card from './index';
const newCard = new Card('Яблоко', '25р/кг', '2кг');
console.log(newCard.getInfo());

export default class Descr extends Card {
	
} */

//Свойства-аксессоры в ООП в JavaScript
class Employee9 {
  #name;

  set name(name) {
    if(name.length > 0) {
      this.#name = name;
    } else {
      throw new Error('Введите имя')
    }
  }

  get name() {
    return this.#name;
  }
}

const employee9 = new Employee9();
employee9.name = 'Mike'
let name = employee9.name;
console.log(name);



//Геттеры мнимых свойств в ООП в JavaScript
class User16 {
	constructor(name, surn) {
		this.name = name;
		this.surn = surn;
	}
	
	get full() {
		return this.name + ' ' + this.surn;
	}

  set full(full){
    [this.name, this.surn] = full.split(' ');
  }
}

let user = new User16('john', 'smit');
console.log(user.full);
user.full = 'eric jons';
console.log(user.full);