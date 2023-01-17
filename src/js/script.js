"use strict";

// Разбор задач с Telegram

/* const number1 = 7;
const number2 = 3;

function gerRandom(num1, num2) {
    const sum = num1 / num2;
    return Math.random(sum);
}

console.log(gerRandom(number1, number2));  */



// 1 Что выведет console.log / Ответ 9
//разобрать после циклов 
/* for (var i=0; i<9; i+=2 ) {
    if(++i == 5) {
        break;
    } else {
        continue;
    }
}
console.log(i++); 
 */
//Объяснение:
//условие if никогда не выполнится, поэтому i дойдёт до 9 и цикл прекратится. Далее, используется оператор пост-инкремента, который, присвоит в i 10, а потом вернёт её старое значение 9


// 2 Как вывести в консоль название ОС? [Node.js]
// Allocating os module
/* const os = require('os');
  
// Printing os.type() value
console.log(os.type());
 */

// 3 Что выведет консоль?  /  Ford
/* const carDetails = {
    name: 'Ford',
    year: 2005,
    getName() {
        return this.name;
    },
    isRegistred: true

};
console.log(carDetails.getName()); */

/* 
// 4 Что выведет консоль?  / "string"
//ответ typeof typeof null - string, typeof null - object
console.log( typeof typeof null); 


// 5 Как проверить, что массив - это массив , а не объект? 
const hi = ["buy", "sell"];
const string = {book: "red"};

console.log( Object.prototype.toString( hi ));
console.log( typeof( string ));  */


// 6 Какой будет результат?
/* var a = 44;
(function() {
    var b = 44;
    a = +'55';
    alert(a + b);
    (function(){
        var c = 11;
        alert((a + b) / c);
    })();
})(); */
 
/* // 7 Что покажет  alert?  / Ответ : 1
var a = -1;
var b = 0.25;
//alert( a == ~b^0);

var c = ~b;
var e = b^0;
var d = ~b^0;

console.log(c);
console.log(e);
console.log(d);


// 8 Что выведет консоль? Ответ: true true 
console.log({});
console.log({a:1}); 


// 9 Что выведет консоль?
var colors = ['red', 'blue', 'green', 'pink'];
colors.pop();
console.log(colors); 


// 10 Что выведет консоль? / 9
let f = 3;
switch (f) {
    default:
        f += 4;
    case 1:
        f += 2;
        break;
}
console.log(f);


// 11 Что выведет консоль?   / true
var myObj = {
    name: "Alex",
};
console.log(myObj.hasOwnProperty("name")); //true
console.log(myObj.hasOwnProperty("age")); //false
 */
//Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.


//  12 Что выведет консоль?
/* const obj = {};
Object.defineProperty(obj, 'bestsite', {value: 'proghub'});

console.log(obj.bestsite); // это вернет proghub
delete obj.bestsite;
console.log(obj.bestsite); // это вернет TypeError */

//Метод Object.defineProperty() определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.


//  13 Какими будут значения переменных a и b после выполнения данного фрагмента кода? 
//а-'Hello'; b-underfined
/* function Test(param) {
    this.var1 = param;
    var var2 = 'World';
}

var test = new Test ('Hello');
var a = test.var1;
var b = test.var2;

console.log(a);
console.log(b);
 */


//  14 Найти вес всех вещей, цена которых более 80 и количество менее 7. Найти сумму найденый вещей
const food = [
    {name: 'Паста "Болоньезе"', weight: 350, price: 68, quantity: 10},
    {name: 'Спагетти с овощами', weight: 350, price: 56, quantity: 8},
    {name: 'Пене с кур филе', weight: 400, price: 68, quantity: 16},
    {name: 'Пицца с ананасами', weight: 675, price: 139, quantity: 30},
    {name: 'Пицца четыре сыра', weight: 1600, price: 339, quantity: 8},
    {name: 'Пицца Итальянская', weight: 740, price: 159, quantity: 1},
    {name: 'Пицца с семгой', weight: 230, price: 77, quantity: 4},
    {name: 'Салат цезарь', weight: 230, price: 69, quantity: 5},
];

// 15 Что выведет консоль? / 0 - ПОЧЕМУ?
console.log(chackValue(a));
var a =1;
function chackValue(param) {
    if (param) {
        return +!!a;
    } else {
        return +!!a;
    }
}

// 16 Какой будет результат? ПОЧЕМУ? / 10 раз выведется число 10
/* for (let i = 0; i < 10; i++) {
    setTimeout(function  () {
        console.log(i);
    }, 0);
} */
// 10 раз запустится отложенный console.log(i), который лежит внутри анонимной функции, которая создается каждый раз.

