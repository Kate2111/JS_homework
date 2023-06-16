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






function tribonacci(signature,n){
  const arr = [...signature];
  if(n === 0) {
    return [];
  }
  if(n === 1) {
    return arr.splice(0, 1);
  }
  if(n === 2) {
    return arr.splice(0, 2);
  }
  if(n === 3) {
    return arr;
  } 
  
    for(let i=3; i<n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }  
  return arr;
                           
}

console.log(tribonacci([1, 2, 1], 1));

function tribonacci(signature, n) {
    const arr = [...signature];
    if (n === 0) {
      return [];
    }
    if (n === 1) {
      return [arr[0]];
    }
    if (n === 2) {
      return [arr[0], arr[1]];
    }
    if (n === 3) {
      return arr;
    }
    for (let i = 3; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr;
  }
  
  console.log(tribonacci([1, 2, 1], 6));