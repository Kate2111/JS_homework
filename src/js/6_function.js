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

//Нужно еще сделать проверку билетов от 000000 до 100000 НЕ РЕШИЛА


//27.  Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей. НЕ РЕШИЛА


/* 
function arrDivisors(num1, num2) {
    const arr1 = getDivisors(num1);
    const arr2 = getDivisors(num2);
    let result = [];
    for(let i =0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) !== -1) {
            result.push(arr1[i]);
        }
    }
    return result;
}

function inArray(arr, elem) {
    for(let i= 0; i < arr.length; i++) {
        if(arr[i] === elem) {
            return true;
        } else {
            return false;
        }
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
} // 30 = [ 1,  2,  3, 5, 6, 10, 15 ] 18 = [ 1, 2, 3, 6, 9 ]

console.log(getDivisors(30, 18));
 */


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


//28.   Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит. НЕ РЕШИЛА


//29.   Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999. Смотрите пример: func(123); // выведет 'сто двадцать три' НЕ РЕШИЛА



//30.   Сделайте функцию func, которая будет возвращать через return какую-либо строку. Выведите результат работы функции func в консоль.
function func() {
    return 'string';
}
console.log(func());
console.log(func);
//Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.
func = 123;
console.log(func);

//31.   Сделайте функцию func1, которая будет возвращать через return число 3.
function func1() {
    return 3;
}
let func2 = func1;
console.log(func1());
console.log(func2());
console.log(func1() + func2());

//32.   Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.
let func5 = function () {return 1;};
let func6 = function () {return 2;};
console.log(func5() + func6());

//33.   Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.
console.log(func(2, 5));
function func(a, b) {
    return a + b;
}

//34.   Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.
console.log(sum(2, 3));
let sum2 = function (a, b) {return a + b;};

//35.   Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.

let arr = [
    function () {return 1;},
    function () {return 2;},
    function () {return 3;},
];
//let sum = arr[0]() + arr[1]() + arr[2]();
let sum3 = 0;
for(let func of arr) {
    sum3 += func();
} 
console.log(sum3);

//36.   Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
    func1: function () {return 1;},
    func2: function () {return 2;},
    func3: function () {return 3;},
};
let sum4 = obj.func1() + obj.func2() + obj.func3();
console.log(sum4);
for(let func in obj) {
    console.log(obj[func]());
}

//37.   Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.
let obj1 = {
    func1: function (arr) {
        let sum = 0;
        for(let elem of arr) {
            sum += elem;
        }
        return sum;
    },
    func2: function (arr) {
        let sum = 0;
        for(let elem of arr) {
            sum += Math.pow(elem, 2);
        }
        return sum;
    },
    func3: function (arr) {
        let sum = 0;
        for(let elem of arr) {
            sum += Math.pow(elem, 3);
        }
        return sum;
    },
};
for(let func in obj1) {
    console.log(obj1[func]([1, 2, 3]));
}

//38.   Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.
function test(func1, func2, func3) {
    return func1() + func2() + func3();
}
console.log(test(function() {return 1;}, function() {return 2;}, function() {return 3;}));


//39.   Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
function tesr(func1, func2, func3) {
    return func1() + func2() + func3();
}
//Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
let func7 = function () {return 1;};
let func8 = function () {return 2;};
let func9 = function () {return 3;};
console.log(tesr(func7, func8, func9));

//40.   Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.

function test(func) {
	return func(3);
}

console.log(test(function(num) {
    return Math.pow(num, 3);
}));

//41.   Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
function test(func) {
	return func(3);
}
function func(num) {
    return Math.pow(num, 3);
}
console.log(test(func));

//42.   Переделайте передаваемую функцию на Function Expression с тем же именем func.
function test(func) {
	return func(3);
}
let func10 = function (num) {
    return Math.pow(num, 3);
};
console.log(test(func10));

//43.   Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.
function test(func) {
	return func(2, 3);
}
function func11 (num1, num2) {
    return num1 + num2;
}
console.log(test(func11));

//44.   Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.Пусть функция test возвращает сумму результатов переданных функций.Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.

function test(num, func1, func2) {
	return func1(num) + func2(num);
}
let func12 = function (num) {
    return Math.pow(num, 2);
};
let func13 = function (num) {
    return Math.pow(num, 3);
};
console.log(test (3, func12, func13));

//45.   Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию. Переданная функция должна будет применится к каждому элементу массива, возводящую число в квадрат

function test(arr, func) {
    for(i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}
function funcSquare(num) {
    return Math.pow(num, 3);
}
console.log(test([1, 2, 3], funcSquare));

//46.   Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.
function func(num1, num2) {
    function square(num) {
        return Math.pow(num, 2);
    }

    function cube(num) {
        return Math.pow(num, 3);
    }

    return square(num1) + cube(num2);
}

console.log(func(2, 2));

//47.   Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func14 () {
    return function() {
        return 1;
    };
}

function func15 () {
    return function() {
        return 2;
    };
}

function summ (func1, func2) {
    return func1()() + func2()();
}

console.log(summ(func14, func15));

//48.   Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.
function func16() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}
console.log(func16()()()()());

//49.   Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
function func17(num) {
    return function(num2) {
        return function(num3) {
            return num + num2 + num3;
        };
    };
}
console.log(func17(2)(3)(4));

//50.   Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func18(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return function() {
                    return [a, b, c, d];
                };
            };
        };
    };
}
console.log(func18(2)(3)(4)(5)());
    
//51.   Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.
function func19() {
    let num = 1;
    return function() {
        console.log(num);
        num++;
    };
}
let f = func19();
f();
f();
f();

//52.   Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.
function func20() {
    let num = 5;
    return function() {
        if(num >= 0) {
            console.log(num);
            num--;
        } else {
            console.log('отсчет окончен');
        }
    };
}
let f1 = func20();
f1();
f1();
f1();
f1();
f1();
f1();
f1();
f1();

//53.   Допишите следующий код так, чтобы его запуск алертом выводил '!':
(function() {
	return function() {
        return function() {
            console.log('!');
        };
    };
})()()();

//54.   Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function(num1) {
    return function(num2) {
        console.log(num1 + num2);
    };
})(1)(2);

//55.   Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function(num1) {
	return function(num2) {
        return function(num3) {
            console.log(num1 + num2 + num3);
        };
    };
})(1)(2)(3);

//56. Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик. 
let func21 = (function fgh() {
    let num = 1;

    return function() {
        console.log(num);
        num++;
        if(num <= 3) {
           fgh();
        }
    };
})();

func21();
func21();
func21();
func21();
func21();
func21();
//Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала. НЕ РЕШИЛА





//57.   С помощью созданной нами функции each увеличьте каждый элемент в два раза.
function each(arr, callback) {
    let result = [];
    for(let elem of arr) {
        result.push( callback(elem) );
    }
    return result;
}

function callback (num) {
    return num ** 2;
}

let srt = each([1, 2 ,3 ,4], callback);
console.log(srt);

//58.   Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

function each(arr, callback) {
    let result = [];
    for(let elem of arr) {
        result.push( callback(elem) );
    }
    return result;
}

function callback (str) {
    return str.split('').reverse().join('');
}

let srt1 = each(['12', '34' ,'56'], callback);
console.log(srt1);

//59.   Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
function each(arr, callback) {
    let result = [];
    for(let elem of arr) {
        result.push(callback(elem));
    }
    return result;
}

function callback(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

let srt2 = each(['cat', 'dog', 'bird'], callback);
console.log(srt2);

//60.   С помощью рекурсии найдите сумму квадратов элементов этого массива.
let arr12 = [1, 2, 3, 4, 5];
function getSquare(arr) {
    let sum = arr.shift();
    if(arr.length !== 0) {
        sum += getSquare(arr);
    }
    return sum;
}
console.log(getSquare(arr12));

//61.   Дан многомерный объект произвольного уровня вложенности. С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
let obj13 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
function func20 (obj) {
    for(let key in obj) {
        if(typeof obj[key] == 'object') {
            func20(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}
func20(obj13);

//62.   Дан многомерный массив произвольного уровня вложенности. Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так: [1, 2, 7, 8, 3, 4, 5, 6, 7]
let arr13 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let arr15 = [];
function getArr (arr) {
    let arr14 = [];
    for(let elem of arr) {
        if(typeof elem == 'object') {
            arr14.push(getArr(elem));
        } else {
            arr15.push(elem);
        }
    }
    return arr15;
}
console.log(getArr(arr13));

//63.   Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки. С помощью рекурсии слейте элементы этого массива в одну строку:'abcdefgjk'
let arr16 = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
let arr17 = [];
function func20 (arr) {
    let arr18 = [];
    for(let elem of arr) {
        if(typeof elem == 'object') {
            arr18.push(func20(elem));
        } else {
            arr17.push(elem);
        }
    }
    return arr17;
}
console.log(func20(arr16).join(''));

//64.   Дан многомерный массив произвольного уровня вложенности. Возведите все элементы-числа этого массива в квадрат.
let arr19 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
let arr20 = [];
function func22 (arr) {
    let arr21 = [];
    for(let elem of arr) {
        if(typeof elem == 'object') {
            arr21.push(func22(elem));
        } else {
            arr20.push(Math.pow(elem, 2));
        }
    }
    return arr20;
}
console.log(func22(arr19));

//65.   Переделайте этот код через деструктуризацию согласно изученной теории.
let arr22 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr22;
console.log(name);

//66.   Переделайте этот код через деструктуризацию согласно изученной теории.
function func() {
	return ['John', 'Smit', 'development', 
		'programmer', 
		2000]; 
}
let [name, surname, department, position, salary] = func();
console.log(department);

//Пропуск элементов массива при деструктуризации
let arr23 = ['John', 'Smit', 'development', 'programmer', 2000];
let [,, department, position, ] = arr23;
console.log(department);

//Остаток массива с помощью оператора rest
let arr24 = ['John', 'Smit', 'development', 'programmer', 2000]; 
let [name, surname, ...info] = arr24;
console.log(name);
console.log(surname);
console.log(info);

//Значения по умолчанию при деструктуризации 
let arr25 = ['John', 'Smit', 'development'];
let [name, surname, department, position = 'trainee'] = arr25;
console.log(name);
console.log(surname);
console.log(position);

let arr26 = [];
function func() {
	return (new Date).getDate();
}
let [year = 2022, month = 11, day = func()] = arr26;
console.log(year);
console.log(month);
console.log(day);

// Деструктуризация объектов
let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color, width, height} = options;
console.log(color, width, height);

//Имена переменных при деструктуризации объектов 
let options1 = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color: c, width: w, height: h} = options1;
console.log(c, w, h);

//Значения по умолчанию при деструктуризации объектов 
let options2 = {
	width1:  400,
	height1: 500,
};
let {color1 = 'black', width1, height1} = options2;
console.log(color1, width1, height1);

//Переменные и значения по умолчанию 
let options3 = {
	width2:  400,
	height2: 500,
};
let {color2: c2 = 'black', width2, height2} = options3;
console.log(c2, width2, height2);

//67.   Переделайте следующий код через деструктуризацию согласно изученной теории:

function func([name, surname, department, position, salary]) {
	console.log(name, surname, department, position, salary);
}
func( ['John', 'Smit', 'development', 'programmer', 2000] ); 

//
function func([name, surname, ...info]) {
	console.log(name, surname, info);
}
func( ['John', 'Smit', 'development', 'programmer', 2000] ); 

//
function func([name, surname, department]) {
	console.log(name, surname, department, position = 'джуниор');
}
func( ['John', 'Smit', 'development'] );

//
function func(department, employee, hired) {
	console.log(department, employee, hired);
}
func( 'development', ['John', 'Smit'], [2018, 12, 31] ); 

//
function func({color, width, height}) {
	console.log(color, width, height);
}

func( {color: 'red', width: 400, height: 500} );

//
function func({color, width, height}) {
	console.log(color, width, height);
}

func( {color: 'red', width: 400, height: 500} );







