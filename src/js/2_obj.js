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

//19.   Выведите элементы с текстом 'l', 'e', 'g' и 'a'.
let arr3 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr3[3][2], arr3[1][1], arr3[2][0], arr3[0][0]);

//20.   Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr4 = 
    [
        [
            [1, 2],
            [3, 4],
        ],
        [
            [5, 6],
            [7, 8],
        ],
    ];
let su3 = 0;
for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
        for(let k = 0; k < 2; k++) {
            su3 += arr4[i][j][k];
        }  
    }
}
console.log(su3);

//21.   Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr5 = [
    [
        [1, 2], 
        [3, 4]
    ], 
    [
        [5, 6],
        [7, 8]
    ]
];

let su4 = 0;
for(elem of arr5) {
    for(elem2 of elem) {
        for(elem3 of elem2) {
            su4 += elem3;
        }  
    }
}
console.log(su4);

//22.   Сформируйте с помощью двух вложенных циклов следующий массив: 
//  [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ]
let arr6 = [];
for(i = 0; i < 3; i++) {
    arr6[i] = [];
    for(j = 0; j < 5; j++) {
        arr6[i].push(j + 1);
    }
}
console.log(arr6);

//23.   Сформируйте с помощью двух вложенных циклов следующий массив:
// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'],['x', 'x', 'x', 'x']]
let arr7 = [];
for(i = 0; i < 3; i++) {
    arr7[i] = [];
    for(j = 0; j < 4; j++) {
        arr7[i].push('x');
    }
}
console.log(arr7);

//24.   Сформируйте с помощью трех вложенных циклов следующий массив:
//  [
//    [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ],
//    [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ],
//    [ [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ]
//  ]
let arr8 = [];
for(i = 0; i < 3; i++) {
    arr8[i] = [];
    for(j = 0; j < 2; j++) {
        arr8[i][j] = [];
        for(k = 0; k < 5; k++) {
            arr8[i][j].push(k + 1);
            
        }
    }
}
console.log(arr8);

//25. Сформируйте с помощью двух вложенных циклов следующий массив:
//[[1, 2], [3, 4], [5, 6], [7, 8]]
let arr9 = [];
let p = 0;
for(let i = 0; i < 4; i++) {
    arr9[i] = [];
    for(let j = 0; j < 2; j++) {
        arr9[i].push(++p);
    }
}
console.log(arr9);

//26.   Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]] 
let arr10 = [];
let o = 0;
for(let i = 0; i < 4; i++) {
    arr10[i] = [];
    for(let j = 0; j < 3; j++) {
        arr10[i].push(o+=2);
    }
}
console.log(arr10);

//27.   Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
//[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let arr11 = [];
let g = 1;
for(i = 0; i < 2; i++) {
    arr11[i] = [];
    for(j = 0; j < 2; j++) {
        arr11[i][j] = [];
        for(k = 0; k < 2; k++) {
            arr11[i][j].push(g++);
        }
    }
}
console.log(arr11);

//28.   Найдите сумму элементов приведенного объекта. 
let obb = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let suu = 0;
for(let key in obb) {
    let subObb = obb[key];
    for(let subKey in subObb) {
        suu += subObb[subKey];
    }
}
console.log(suu);

//29.   Выведите на экран элемент 'b2' и элемент 'c1'.
let obj11 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj11[2][2], obj11[3][1]);

//30.   Вручную, без цикла, найдите сумму всех элементов-чисел.
let obj12 = {
	key1: {
            a: 1, 
            b: 2, 
            c: {
                d: 3,
                e: 4,
            }, 
            f: 5,
	    },
	key2: {
		g: 6, 
        h: 7,
	},
}
console.log(obj12.key1.a + obj12.key1.b + obj12.key1.c.d + obj12.key1.c.e + obj12.key1.f + obj12.key2.g + obj12.key2.h);

//31.   Выведите на экран первого студента из третьей группы.
let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students['group3'][0]);

//32.   С помощью вложенных циклов выведите на экран все строки с данными.
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for(let key in data) {
    for(let d of data[key]) {
        console.log(d);
    }
}

//33.   С помощью вложенных циклов выведите на экран все строки с данными.
let data1 = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
		3: 'data33',
	},
];
for(elem of data1) {
    for(key in elem) {
        console.log(elem[key]);
    } 
}

//34.   С помощью вложенных циклов выведите на экран все строки с данными.
let data3 = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
for(let elem of data3) {
    for(let key in elem) {
        for(elem2 of elem[key]) {
            console.log(elem2);
        }
    }
}

//34.   Выведите на экран данные каждого работника в формате имя - зарплата.
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for(let elem of employees) {
    console.log(elem.name + '-' + elem.salary);
}

//35.   Выведите на экран сумму зарплат всех работников.
let employees1 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let su5 = 0;
for(let elem of employees1) {
    su5 += elem.salary;
}
console.log(su5);

//36.   Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
let employees2 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let su6 = 0;
for(let elem of employees2) {
    if(elem.age >= 30) {
        su6 += elem.salary;
    }
}
console.log(su6);

//37.   Добавьте в следующий массив еще одного работника
let employees4 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];
employees4.push({
    name: 'name4',
    salary: 250,
    age: 22,
});
console.log(employees4);

//38.   Скопируйте себе следующую структуру для хранения списка дел за определенные даты:  
let affairs = {
	'2019-12-28': ['data11', 'data12', 'data13'],
	'2019-12-29': ['data21', 'data22', 'data23'],
	'2019-12-30': ['data31', 'data32', 'data33'],
}
//Добавьте еще одно дело в дату '2019-12-29'.
affairs["2019-12-29"].push('data24');
console.log(affairs["2019-12-29"]);
//Добавьте еще два дела в дату '2019-12-31'.
affairs["2019-12-31"] = [];
affairs["2019-12-31"].push('data41', 'data42');
console.log(affairs["2019-12-31"]);

//39.   Скопируйте себе следующую структуру для хранения списка студентов:
let students1 = {
	'group1': {
		'subgroup11': ['student111', 'student112', 'student113'],
		'subgroup12': ['student121', 'student122', 'student123'],
	},
	'group2': {
		'subgroup21': ['student211', 'student212', 'student213'],
		'subgroup22': ['student221', 'student222', 'student223'],
	},
	'group3': {
		'subgroup31': ['student311', 'student312', 'student313'],
		'subgroup32': ['student321', 'student322', 'student323'],
	},
};
//Добавьте нового студента в подгруппу 'subgroup11'.
students1.group1.subgroup11.push('student114');
console.log(students1.group1.subgroup11);
//Добавьте в первую группу еще одну подгруппу.
students1.group1.subgroup13 = [];
students1.group1.subgroup13.push('student131');
console.log(students1.group1.subgroup13);
//Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
students1.group4 = {};
students1.group4.subgroup41 = [];
students1.group4.subgroup41.push('student411', 'student412');
console.log(students1.group4.subgroup41);
