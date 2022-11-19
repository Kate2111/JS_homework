"use strict";

//1.    Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.
let sum = 0;
function summa () {
    for(let i =0; i < 100; i++) {
        sum += i;
    }
    console.log(sum);
}
summa();

//2.    Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
function func (num) {
    console.log(Math.pow(num, 3));
}
func(2);
func(5);

//3.    Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.
function funcNum (num) {
    if(num >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}
funcNum (2);
funcNum (-3);

//4.    Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
function func3 (num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
func3 (1, 2, 3);
func3 (2, 6, 2);

//5.    Сделайте функцию func, которая параметром будет принимать 3 числа и выводить в консоль их сумму. Пусть даны 3 переменные с числами:
let param1 = 1;
let param2 = 2;
let param3 = 3;

function func4 (num1, num2, num3) {
    console.log(num1 + num2 + num3);
}

func4 (param1, param2, param3);

//6.    Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.
function pow(num) {
    return Math.pow(num, 3);
}
let res = pow(3);
console.log(res);

//7.    Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
function sqrt(num) {
    return Math.sqrt(num);
}
let res1 = Math.round(sqrt(3) + sqrt(4));
console.log(res1);

//8.   Найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
function sqrt(num) {
    return Math.sqrt(num);
}
function round(num) {
    return num.toFixed(3);
}
let res2 = round(sqrt(2));
console.log(res2);

//9.    Найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.
function sqrt(num) {
    return Math.sqrt(num);
}
function summa(num1, num2, num3) {
    return num1 + num2 + num3;
}
function round(num) {
	return num.toFixed(3);
}
let res4 = round(summa(sqrt(2), sqrt(3), sqrt(4)));
console.log(res4);

//10.   Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
function func(num) {
    for(i = 0; i < num; i++) {
        num = num / 2;
        if(num < 10) {
            return i + 1;
        }
    }
}
console.log(func(40)); // 20/10/5  i = 3

//11.   Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
function evenNumber(arr) {
    for(let elem of arr) {
        if(elem % 2 == 0) {
            return true;
        } 
    }
    return false;
}
console.log(evenNumber([1, 3, 5]));

//12.   Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
function evenDigit(num) {
    num = String(num);
    for(i = 0; i <num.length; i++) {
        if(num[i] % 2 > 0) {
            return '+++';
        }
    }
    return '---';
}
console.log(evenDigit(226));

//13.   Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
function func(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j <arr.length; j++) {
            if(arr[i] === arr[j]) {
                return arr[i], arr[j];
            }
        }
    }
    return 'нет одинаковых чисел';
}
console.log(func([1, 4, 10, 10, 5]));

//14.   Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function sumElemArr(arr) {
    let sum = 0;
    for(let elem of arr) {
        sum += elem;
    }
    return sum;
}
console.log(sumElemArr([2, 3, 5]));

//15.   Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function dividersNum(num) {
    let arr = [];
    for(i = 1; i <= num; i++) {
        if(num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(dividersNum(6));

//16.   Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function getArr(str) {
    return str.split('');
}
console.log(getArr('123'));

//17.   Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function reverseStr(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr('321'));

//18.   Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function strUpperCase(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(strUpperCase('привет'));

//19.   Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
function strWords(str) {
    let arr = str.split(' ');
    for(i = 0; i < arr.length; i++) {
        arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}
console.log(strWords('всему миру привет'));

//20.   Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function fillArr(arr) {
    for(i = 1; i < 10; i++) {
        arr.push(i)
    }
    return arr;
}
console.log(fillArr([]));

//21.   Сделайте функцию, которая будет возвращать случайный элемент из массива.
function randomNum(arr) {
    return Math.random(arr);
}
console.log([1, 2, 3, 4]);

//22.   Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function primeNumber(num) {
    for(i = 0; i < Math.pow(num, 2); i++) {
        if(num % i == 0) {
            return 'число простое';
        } else {
            return 'число составное';
        }
    }
}
console.log(primeNumber(4));

//23.   Сделайте функцию, которая будет проверять пару чисел на дружественность. Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу.
function numberFrieds(num1, num2) {
    let sum1 = 0;
    let sum2 = 0;
    for(i = 0; i < num1; i++) {
        if(num1 % i == 0) {
            sum1 += i;
        }
    }
    for(j = 0; j < num2; j++) {
        if(num2 % j == 0) {
            sum2 += j;
        }
    }
    if(sum1 == num2 && sum2 == num1) {
        return 'Дружественные числа';
    } else {
        return 'попробуйте еще';
    }
}
console.log(numberFrieds(220, 284));


//решение автора
console.log(isFriendly(496, 28));

function isFriendly(num1, num2) {
    return getDivisorsSum(num1) == num2 && getDivisorsSum(num2) == num1;
}

function getDivisorsSum(num) {
    return getSum(getDivisors(num));
}

function getDivisors(num) {
    let arr = [];
    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function getSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//24.   Используя созданную вами функцию из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000.

function getFriendlyNumber () {
    let arr = [];
    for(i = 0; i <= 2000; i++){
        for(j = i+1; j <= 2000; j++) {
            if(isFriendly(i, j)) {
                arr.push([i, j]);
            }
        }
    }
    return arr;
}

function isFriendly(num1, num2) {
    return getDivisorsSum(num1) == num2 && getDivisorsSum(num2) == num1;
}

function getDivisorsSum(num) {
    return getSum(getDivisors(num));
}

function getDivisors(num) {
    let arr = [];
    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function getSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(getFriendlyNumber ());

//25.   Сделайте функцию, которая будет проверять число на совершенность. Совершенное число - это число, сумма собственных делителей которого равна этому числу.
function prefectNumber(num) {
    return num == sumDivisors(getDivisors(num));
}

function sumDivisors(arr) {
    let sum = 0;
    for(let elem of arr) {
        sum += elem;
    }
    return sum;
}

function getDivisors(num) {
    let arr = [];
    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(prefectNumber(6));

//26.   Найдите все счастливые билеты. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.
//Проверка одного билета
function happyTicket(num) {
    let arr = sumSubarr(num);
    return arr[0] == arr[1];  
}

function sumSubarr(num) { //Получаем сумму подмассивов
    let arr = chunkArr(getArrayNumbers(num));
    let leftsum = 0; 
    let rightsum = 0; 
    let sum = [];
    for(i = 0; i <3; i++) {
        leftsum += +arr[0][i]; 
        rightsum += +arr[1][i]; 
    }
    sum.push(leftsum, rightsum);
    return sum;
}

function chunkArr(arr) {
    let subarr = [];
    for(i = 0; i < 2; i++) {
        subarr[i] = arr.slice((i*3), (i*3)+3);
    }
    return subarr; //получаем дввумерный массив по три цифры
}

function getArrayNumbers(num) {
    return String(num).split(''); //Получем массив числа
}

console.log(happyTicket(133223));

//Проверка билетов от 000000 до 100000


//27.  Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей.



function arrDivisors(num1, num2) {
    const arr1 = getDivisors(num1);
    const arr2 = getDivisors(num2);
    let result = [];
    for(let i =0; i < arr1.length; i++) {
        if(inArray(arr2, arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

function inArray(arr, elem) {
    for(let i= 0; i < arr.length; i++) {
        return arr[i] === elem;
    }
}

function getDivisors(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        if(num % i == 0) {
            arr.push(i);
        }
    } 
    return arr;
}

console.log(arrDivisors(30, 18));



  /*   let result = [];

    let map = arr1.reduce((acc, i) => {
        if(acc[i]) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
    }, {});

    for(let i = 0; i < arr2.length; i++) {
        const current = arr2[i];
        let count = map[current];

        if(count && count > 0) {
            result.push(current);
            map[current] -= 1;
        }
    } */

