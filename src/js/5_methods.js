"use strict";
// Математические методы

//1.    Возведите 2 в 10 степень.
console.log(Math.pow(2, 4));

//2.    Найдите квадратный корень из 245.
console.log(Math.sqrt(245));

//3.    Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let a = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for(let elem of a) {
    sum += Math.pow(elem, 3);
}
console.log(Math.sqrt(sum));

//4.    Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let num = 379;
num = Math.sqrt(num);
//num = Math.round(num); //окр до целого числа
//num = num.toFixed(1); //окр до десятых
num = num.toFixed(2); //окр до сотых
console.log(num);

//5.    Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
let num1 = 587;
let b = {};
num1 = Math.sqrt(num1); //квадратный корень из 587
b.floor = Math.floor(num1); //результат окр в меньшую сторону записан в объект с ключом 'floor'
b.ceil = Math.ceil(num1); //результат окр в большую сторону записан в объект с ключом 'floor'
console.log(b); //{ floor: 24, ceil: 25 }

//6.    Выведите на экран случайное целое число от 1 до 100.
let c = Math.random();
console.log(c); //т.к. Math.random() возвращает дробное число до 1, нам нужно его умножить на 100, чтобы получить число от 1 до 100  = 0.812779935039303
c = c * 100;
console.log(c); //однако число все равно будет дробным - 81.2779935039303, нужно его округлить
c = Math.round(c); //окр до целого числа
console.log(c);

//7.    С помощью цикла заполните массив 10-ю случайными целыми числами.
let d = [];
for(let i = 0; i < 10; i++) {
    let a = Math.round(Math.random() * 100);
    d.push(a);
}
console.log(d);

//8.    Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let a1 = 25;
let b1 = 73;
console.log(Math.abs(a1 - b1));

//Строковые методы

//9.    Дана строка 'js'. Сделайте из нее строку 'JS'.
let e = 'Js';
console.log(e.toUpperCase()); //JS
console.log((e.toUpperCase()).toLowerCase()); //js

//10.   Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let f = 'я учу javascript!';
console.log(f.substring(2, 5));
console.log(f.substring(6, 16));
console.log(f.slice(2, 5));
console.log(f.slice(6, -1));

//11.   Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
let aa = 'bfcde';
console.log(aa.indexOf('c'));
//Проверьте, есть ли в этой строке символ 'a'.
console.log(aa.indexOf('a')); //-1 - нет
//Проверьте, начинается ли эта строка с символа 'b'.
console.log(aa.indexOf('b')); 
//Проверьте, заканчивается ли эта строка на символ 'a'.
console.log(aa.lastIndexOf('a')); 

//12.   Дана строка. Проверьте, начинается ли эта строка на 'http://'.
let aaa = 'https://code.mu/ru/javascript/book/prime/inbuilt/string/';
console.log(aaa.indexOf('http://')); //-1
console.log(aaa.startsWith('http://')); // False

//13.   Дана строка. Проверьте, заканчивается ли эта строка на '.html'.
let bb = 'index.html';
console.log(bb.lastIndexOf('.html')); // 5
console.log(bb.endsWith('.html')); // true

//14.   Дана строка с цифрами. Найдем сумму цифр из этой строки. Для этого разобьем строку в массив, а затем переберем этот массив и найдем его сумму. Нас ждет подвох: split возвращает строки, поэтому при суммировании преобразуем эти цифры-строки в настоящие числа с помощью Number:
let str = '12345';
let arr = str.split(''); // [ '1', '2', '3', '4', '5' ]
let sum1 = 0;

for (let i = 0; i < arr.length; i++) {
	sum1 += Number(arr[i]);
}
console.log(arr);
console.log(sum1);

//15.   Дано число. Давайте запишем каждую цифру этого числа в отдельный элемент массива. Тут есть подвох - split применяется только к строкам, а у нас число. Преобразуем вначале число к строке с помощью String, а затем применим split:
let num2 = 12345;
let str2 = String(num2); //получаем строку "12345"
let arr2 = str2.split(''); //получаем массив [ '1', '2', '3', '4', '5' ]
console.log(arr2);

//16.   Давайте перевернем символы строки в обратном порядке. Для этого разобьем строку в массив с помощью split по разделителю '' (это разместит каждый символ строки в отдельный элемент массива), перевернем этот массив с помощью reverse и затем сольем перевернутый массив обратно с помощью join:
let str1    = '123456789';
let arr1   = str1.split(''); // ['1', '2', '3','4', '5', '6','7', '8', '9']
let arr3   = arr1.reverse(); // ['9', '8', '7', '6', '5', '4', '3', '2', '1']
let result = arr3.join('');  // 987654321
console.log(result); 

//17.   Дана дата в формате '2025-12-31'. Давайте сделаем из нее формат '31.12.2025'. Для этого разобьем строку в массив с помощью split, перевернем этот массив с помощью reverse и затем сольем перевернутый массив обратно с помощью join:

let date = '2025-12-31';
let result1 = date.split('-').reverse().join('.');
console.log(result1);

// Методы массивов

//18.   Добавьте в конец элементы 4, 5, 6.
let bbb = [1, 2, 3];
bbb.push(4, 5, 6);
console.log(bbb);
//Добавьте в начало элементы 4, 5, 6.
bbb.unshift(-2, -1, 0);
console.log(bbb);

//19.   Пусть дан массив ['1', '2', '3', '4', '5', '6']. Давайте сделаем из него строку '16-25-34'. Для решения задачи используем комбинацию методов shift, pop, push и join:
let arr4 = ['1', '2', '3', '4', '5', '6'];
let result2 = [];
while (arr4.length > 0) { // массив уменьшается в цикле пока не достигнет нуля
	let first = arr4.shift();
	let last  = arr4.pop();
	
	let str = first + last; // тут будет строка '16', потом '25', потом '34' 
	result2.push(str);
}
console.log(result2);// После цикла в result лежит массив ['16', '25', '34']
result2 = result2.join('-');// Сольем его в строку
console.log(result2); //'16-25-34'

//20.   Выведите на экран первый и последний элемент этого массива.
let cc = [1, 2 , 3];
let cc1 = cc.shift();
let cc2 = cc.pop();
console.log(cc1, cc2);

//21.   Сделайте из этого массива следующий: [1, 2, 3]
let ccc = [1, 2, 3, 4, 5];
let ccc1 = ccc.slice(0, 3);
let ccc2 = ccc.slice(3);
console.log(ccc1);
console.log(ccc2);

//22.   С помощью метода splice преобразуйте массив в следующий:
let dd = [1, 2, 3, 4, 5];
dd.splice(1, 2);
console.log(dd);

let dd1 = [1, 2, 3, 4, 5];
dd1.splice(2, 0, 'a', 'b', 'c');
console.log(dd1);

let dd2 = [1, 2, 3, 4, 5];
dd2.splice(1, 0, 'a', 'b');
dd2.splice(6, 0, 'c');
dd2.splice(8, 0, 'e');
console.log(dd2);

//23.   Найдите позицию числа 3 в этом массиве.
let ddd = [1, 2, 3, 4, 5];
console.log(ddd.indexOf(3));

//24.   Проверьте, есть ли в этом массиве число 3.
let ddd1 = [1, 2, 3, 4, 5];
console.log(ddd1.includes(3));

//25.   Преобразуйте последнюю букву строки в верхний регистр.
let str3 = 'london';
let result3 = str3.slice(0, 5) + str3.slice(-1).toUpperCase();
console.log(result3);
//Преобразуйте первые 2 буквы строки в верхний регистр.
let result4 = str3.slice(0, 2).toUpperCase() + str3.slice(2);
console.log(result4);

//26.   Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
let str4 = 'London';
console.log(str4.toLowerCase());

//27.   Напишите код, который преобразует первую букву каждого слова в верхний регистрlet
let str5 = 'word1 word2 word3';
let words = str5.split(' '); // [ 'word1', 'word2', 'word3' ]
for(let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1); // [ 'Word1', 'Word2', 'Word3' ]
}
let result5 = words.join(' '); //'Word1 Word2 Word3'
console.log(result5);

//28.   Преобразуйте строку 'var_test_text' в 'VarTestText'. Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).
let str6 = 'var_test_text';
let ff = str6.split('_');
for(let i = 0; i < ff.length; i++) {
    ff[i] = ff[i].slice(0, 1).toUpperCase() + ff[i].slice(1);
}
let result6 = ff.join(''); // VarTestText
let result7 = result6.slice(0, 1).toLowerCase() + result6.slice(1);
console.log(result6);
console.log(result7);

//29.   Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.
let str7 = 'var test text';
let result8 = str7.split(' ').reverse().join(' ');
console.log(result8); //text test var

//30.   Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
let arr12 = [4, 9, 16, 25];
let result9 = arr12.map(function(item) {
    return Math.sqrt(item);
});
console.log(result9);

//31.   Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let arr13 = ['hi', 'bye'];
let result10 = arr13.map(function(item) {
    return item + '!';
});
console.log(result10);

//32.   Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.
let arr14 = ['ih', 'eyb'];
let result11 = arr14.map(function(item) {
    return item.split('').reverse().join('');
});
console.log(result11);

//33.   Дан следующий массив, Используя метод map преобразуйте этот массив в следующий:
let arr15 = ['123', '456', '789'];
let result12 = arr15.map(function(item) {
    return item.split('');
});
console.log(result12);

//34.   Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let arr16 = [2, 3, 4];
let result13 = arr16.map(function(elem, i) {
    return elem * i;
});
console.log(result13);

//35.   Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента в квадрате
let arr17 = [[2, 3], [4, 5],];
let result14 = arr17.map(function(item) {
    return item.map(function(elem) {
        return elem * elem;
    });
});
console.log(result14);

//36.   Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let arr18 = [2, 3, 4];
let sum5 = 0;
arr18.forEach(elem => sum5 += Math.pow(elem, 2));
console.log(sum5);

//37.   Дан массив с числами. Оставьте в нем только положительные числа.
let arr19 = [-2, 3, -4, 7];
let result15 = arr19.filter(elem => elem >=0);
console.log(result15);

//38.   Дан массив с числами. Оставьте в нем только отрицательные числа.
let arr20 = [-2, 3, -4, 7];
let result16 = arr20.filter(elem =>elem < 0);
console.log(result16);

//39.   Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
let arr21 = [-2, 3, 20, -4, 7, 12];
let result17 = arr21.filter(elem => elem >= 0 && elem < 10);
console.log(result17);

//40.   Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr22 = ['привет', 'пока', 'здравствуйте', 'до свидания'];
let result18 = arr22.filter(elem => elem.length > 5);
console.log(result18);

//41.   Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr23 = [-2, 3, 20, -4, 7, 12];
let result19 = arr23.filter((elem, i) => elem * i < 30 && elem > 0);
console.log(result19);

//42.   Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
let arr24 = [1, 2, [3, 4], 5, [6, 7]];
let result20 = arr24.filter(elem => typeof elem != 'object');
console.log(result20);

//43.   Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
let arr25 = [-2, 3, 20, -4, 7, -12];
let result21 = arr25.filter(elem => elem < 0).length;
console.log(result21);

//44.   Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arr26 = [-2, 3, 20, -4, 7, -12];
let result22 = arr26.every(elem => elem > 0);
console.log(result22); //false

//45.   Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr27 = [2, 3, 4, 7];
let result23 = arr27.every((elem, i) => elem * i < 30);
console.log(result23); //true

//46.   Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let arr28 = [-2, 3, 20, -4, 7, -12];
let result24 = arr28.some(elem => elem > 0);
console.log(result24); //true

//47.   Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.
let arr29 = [2, 3, 4, 7];
let result25 = arr29.some((elem, i) => elem * i > 30);
console.log(result25); //false

//48.   Найдите с помощью функции сумму элементов массива.
let arr30 = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr30));

//49.   Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
let arr31 = [20, 500, 6, 45];
let result26 = Math.min(...arr31);
console.log(result26);

//50.   Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
function average(...nums) {
    let sum = 0;
    nums.forEach(elem => sum += elem);
    let average = sum / nums.length;
    return average;
}

function average(...nums) {
    return nums.reduce((acc, elem) => acc + elem) / nums.length;
}
console.log(average(2, 5, 9, 15, 24, 65));

//51.   Давайте сделаем функцию unite, которая параметрами будет принимать произвольное количество массивов и сливать их в один двухмерный
function unite(...arrs) {
	return arrs;
}
let result27 = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]); 
console.log(result27);

//52.   Давайте теперь реализуем функцию merge, параметрами принимающую произвольное количество массивов и сливающую их элементы в один массив.
function merge(...arrs) {
    return [].concat(...arrs);
}
console.log(merge([1, 2, 3], [4, 5, 6], [7, 8, 9]));

//53.    Дан массив с числами. Используя метод reduce найдите сумму элементов этого массива начиная с 13.
let arr32 = [2, 6, 8, 17];
let result28 = arr32.reduce((acc, elem) => acc + elem, 13);
console.log(result28);

//54.   Дан массив с числами. Используя метод reduce найдите количество повторяющихся элементов и выведите эти элементы с массив
let arr33 = [2, 17, 6, 2, 3, 8, 17, 10, 17];
let result29 = arr33.reduce(function(acc, elem) {
    if(acc[elem]) {
        acc[elem] += 1;
    } else {
        acc[elem] = 1;
    }
    return acc; //{ '2': 2, '3': 1, '6': 1, '8': 1, '10': 1, '17': 3 }
}, {});

function res (obj) {
    for(let key in obj) {
        if(obj[key] <= 1) {
            delete obj[key]; //{ '2': 2, '17': 3 }
        }
    }
    let arr34 = Object.keys(obj); //[ '2', '17' ]
    
    return arr34.map(elem => +elem);
}

console.log(res(result29)); // [ 2, 17 ]








