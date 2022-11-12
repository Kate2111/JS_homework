"use strict";

//1.     Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
let arr = ['a', 'b', 'c'];
console.log(arr);

//2.    С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
let brr = ['a', 'b', 'c'];
console.log(brr[0], brr[1], brr[2]);

//3.    Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
let crr = ['a', 'b', 'c', 'd'];
console.log(crr[0] + '+' + crr[1] + ', ' + crr[2] + '+' + crr[3]);

//4.    Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
let drr = [2, 5, 3, 9];
const result = drr[0] * drr[1] + drr[2] * drr[3];
console.log(result);

//5.    Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
let obj = {a: 1, b: 2, c: 3};
//console.log(obj['c']);
console.log(obj.c);

//6.     Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
let frr = {Коля: '1000', Вася: '500', Петя: '200'};
console.log(frr.Петя, frr.Коля);

//7.     Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
let err = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг', 
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'};
console.log(err[5]);

//8.    Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
const day = 3;
console.log(err[day]);

//9.    Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const hrr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(hrr[1][0]);

//10.   Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
const irr = {
    js:['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'};
console.log(irr.js[0]);

//11.   Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).
const grr = {
    ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    en: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
};
console.log(grr.ru[0], grr.en[2]);

//12.   Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
const jrr = {
    ru: {
        1: 'понедельник',
        2: 'вторник',
        3: 'среда',
        4: 'четверг', 
        5: 'пятница',
        6: 'суббота',
        7: 'воскресенье'    
    },
};
const lang = jrr.ru;
const days = 3;
console.log(lang[days]);

//13.   Пусть дан такой массив. Добавьте ему в конец элементы 4 и 5.

let ar = [1, 2, 3];
ar.push(4);
ar.push(5);
console.log(ar);

//14. Дан следующий массив. Найдите сумму элементов, ключи которых хранятся в наших переменных.

let arn = [1, 2, 3, 4, 5];

let key1 = 1;
let key2 = 2;

console.log(arn[key1] + arn[key2]);

//15.   Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.

const dff = {
    name: 'Ekaterina',
    surname: 'Noskova',
    patronymic: 'Andreevna'
};
console.log(dff.surname + ' ' + dff.name + ' ' + dff.patronymic);

//16.   Возведите в квадрат каждый элемент этого объекта.
let ob = {x: 1, y: 2, z: 3};
ob.x **= 2;
ob.y **= 2;
ob.z **= 2;
console.log(ob);

//17.   Получите массив ключей следующего объекта:

let obj1 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj1);
console.log(keys);

//18.   Сделайте так, чтобы ключи объекта брались из этих переменных.
let key3 = 'x';
let key4 = 'y';
let key5 = 'z';

let obj2 = {
	[key3]: 1,
	[key4]: 2,
	[key5]: 3
};
console.log(obj2);

