"use strict";

//alert - показывает сообщение.
//prompt - показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный в поле ввода текст или null, если была нажата кнопка «Отмена» или Esc с клавиатуры.
//confirm - показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK, и false, если нажата кнопка «Отмена» или Esc с клавиатуры.
//Мои тестовые задачки
/* const city = prompt ('В каком городе ты живешь?', '');
alert (`Я хотел бы побывать в ${city}`);
console.log(city);
console.log(typeof(city));

const country = prompt ('В какой стране ты живешь?', 'Россия');
const answer = confirm (`Тебе нравится жить в ${country}?`);
console.log(country);
console.log(answer);
if (answer == true) {
    alert ('Мне тоже, очень красивая страна');
} else {
    const town = prompt ('А где бы хотел жить?', '');
    console.log(town);
}

const color = [];
color[0] = prompt('Какого цвета ты хочешь машину?', '');
color[1] = prompt('Какого цвета у тебя волосы?', '');
console.log(color);
 */



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
for (var i=0; i<9; i+=2 ) {
    if(++i == 5) {
        break;
    } else {
        continue;
    }
}
console.log(i++); 

//Объяснение:
//условие if никогда не выполнится, поэтому i дойдёт до 9 и цикл прекратится. Далее, используется оператор пост-инкремента, который, присвоит в i 10, а потом вернёт её старое значение 9


// 2 Как вывести в консоль название ОС? [Node.js]
// Allocating os module
const os = require('os');
  
// Printing os.type() value
console.log(os.type());


// 3 Что выведет консоль?  /  Ford
const carDetails = {
    name: 'Ford',
    year: 2005,
    getName() {
        return this.name;
    },
    isRegistred: true

};
console.log(carDetails.getName());


// 4 Что выведет консоль?  / "string"
//ответ typeof typeof null - string, typeof null - object
console.log( typeof typeof null); 


// 5 Как проверить, что массив - это массив , а не объект? 
const hi = ["buy", "sell"];
const string = {book: "red"};

console.log( Object.prototype.toString( hi ));
console.log( typeof( string )); 


// 6 Какой будет результат?
var a = 44;
(function() {
    var b = 44;
    a = +'55';
    alert(a + b);
    (function(){
        var c = 11;
        alert((a + b) / c);
    })();
})();
 
// 7 Что покажет  alert?  / Ответ : 1
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

//Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.


//  12 Что выведет консоль?
const obj = {};
Object.defineProperty(obj, 'bestsite', {value: 'proghub'});

console.log(obj.bestsite); // это вернет proghub
delete obj.bestsite;
console.log(obj.bestsite); // это вернет TypeError

//Метод Object.defineProperty() определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.


//  13 Какими будут значения переменных a и b после выполнения данного фрагмента кода? 
//а-'Hello'; b-underfined
function Test(param) {
    this.var1 = param;
    var var2 = 'World';
}

var test = new Test ('Hello');
var a = test.var1;
var b = test.var2;

console.log(a);
console.log(b);










//1.    Выведите столбец чисел от 1 до 100.
let q = 1;

while (q <= 100) {
    document.write(q + "<br>");
    q++;
}  

for(let w = 0; w <= 100; w++) {
    document.write(w + '<br>');
}

//2.     Выведите столбец чисел от 11 до 33.

let r = 11;
while (r < 34) {
    document.write(r + "<br>");
    r++;
} 

for(let i = 11; i <=33; i++) {
    document.write(i + ',' + ' ');
}
 
//2.1   Выведите d строку через запятую числа от 25 до 1.
let p = 25;
while(p >= 1) {
    document.write(p + "," + " ");
    p--;
}   

//3.    Выведите столбец четных чисел в промежутке от 0 до 100.
let o = 0;
while(o <= 100) {
    document.write(o + "<br>");
    o+=2;
} 

let t = 1;
while(t <= 100) {
    if(t % 2 == 0) {
        document.write(t + '<br>');
    }
    t++;
} 


//4.  С помощью цикла найдите сумму чисел от 1 до 100.
let sum = 0;
for(i = 0; i <=100; i++) {
    sum += i;
}

console.log(sum);

//5.    Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let y = [1, 2, 3, 4, 5];
for(let i = 1; i <= 5; i++) {
    document.write(i);
}


//6.    Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
let u = [1, 2, 3, 4, 5];
let result = 0;
for(let i = 0; i < a.length; i++) {
    result += c[i];   
}
console.log(result);


 