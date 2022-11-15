"use strict";

//1.    Выведите столбец чисел от 1 до 100.
let q = 1;

while (q <= 100) {
    //document.write(q + "<br>");
    q++;
}  

for(let w = 0; w <= 100; w++) {
    //document.write(w + '<br>');
}

//2.     Выведите столбец чисел от 11 до 33.

let r = 11;
while (r < 34) {
    //document.write(r + "<br>");
    r++;
} 

for(let i = 11; i <=33; i++) {
    //document.write(i + ',' + ' ');
}
 
//2.1   Выведите d строку через запятую числа от 25 до 1.
let p = 25;
while(p >= 1) {
    //document.write(p + "," + " ");
    p--;
}    

//3.    Выведите столбец четных чисел в промежутке от 0 до 100.
let o = 0;
while(o <= 100) {
    //document.write(o + "<br>");
    o+=2;
} 

let num = 1;
for(k = 0; k < 100; k++) {
    num++;
    if(num % 2 == 0) {
        console.log(num);
    }
} 

//4.  С помощью цикла найдите сумму чисел от 1 до 100.
let sum1 = 0;
for(i = 0; i <=100; i++) {
    sum += i;
}

console.log(sum1); 


//5.    Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
let y = [1, 2, 3, 4, 5];
for(let i = 0; i < 5; i++) {
    console.log(y[i]);
}



//6.    Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
let u = [1, 2, 3, 4, 5];
let result = 0;
for(let i = 0; i < u.length; i++) {
    result = result + u[i];   
}
console.log(result);  



//7.    Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта
let color = {green: 'зеленый', red: 'красный', blue: 'голубой'};

for(key in color) {
    console.log(key + ':' + color[key]);
} 

// key - это переменная, в которую последовательно будут ложится ключи объекта 
//console.log(key) - выведем все ключи объекта
//console.log(color[key]) - выведем все значения объекта
 

//8.    Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.
let boy = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};

for(salary in boy) {
    console.log(salary + ' ' + '- зарплата' + ' ' + boy[salary] + ' ' + 'долларов');
}

//9.    Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
let s = [2, 5, 9, 15, 0, 4];

for(let i = 0; i <= 5; i++) {
    if(s[i] > 3 && s[i] < 10) {
        document.write(s[i] + '<br>');
    }
}
    

//10.    Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let f = [1, -2, 3, 5, -4];
let sum2 = 0;
for(let i = 0; i < f.length; i++) {
    if(f[i] > 0) {
        sum2 = sum2 + f[i]; 
    }
}
console.log(sum2);


//11.   Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
let g = [1, 2, 5, 9, 13, 4, 10];
for(let i = 0; i < g.length; i++) {
    if(g[i] === 4) {
        console.log('Есть!');
    }
    break;
}


//12.   Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let h = [10, 20, 30, 50, 235, 3000];
for(let i = 0; i < h.length; i++) {
    let num = String(h[i]); //из массива сделали объект
    let j = num[0];
    if(j == 1 || j == 2 || j == 5) {
        console.log(num);
    } 
}


//13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
let k1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < 1; i++) {
    let l = '-' + k1.join('-') + '-';
    console.log(l);
    console.log(typeof(l));
}

//14.   Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
//15. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
//16.Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

//17.   С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
let qw = 0;
for(i = 0; i < 99; i++) {
    qw++;
    if(qw % 2 > 0) {
        console.log(qw);
    }
}

//18.   Выведите в консоль все элементы следующего массива:
let arr = ['a', 'b', 'c', 'd', 'e'];
for(let elem of arr) {
    console.log(elem);
}

//19.   Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.



//20.   Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего:
let arr1 = ['a', 'b', 'c', 'd', 'e'];
for(i =1; i < arr1.length - 1; i++) {
    console.log(arr1[i]);
}

//21.   Выведите в консоль элементы следующего массива в обратном порядке:
let arr2 = ['a', 'b', 'c', 'd', 'e'];
for(i = arr2.length; i >= 0; i--) {
    console.log(arr2[i]);
}

//22.   Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
let arr3 = [2, 5, 9, 15, 1, 4];
for(let elem of arr3) {
    if(elem > 3 && elem < 10) {
        console.log(elem);
    }
}

//23.   Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for(let key in obj) {
    if(obj[key] % 2 > 0) {
        console.log(obj[key]);
    }
}

//24.   Найдите сумму четных чисел от 2 до 100.
let res = 0;
for(i = 2; i <= 100; i++) {
    if(i % 2 == 0) {
        res += i;
    }
}
console.log(res);

//25.   Найдите сумму нечетных чисел от 1 до 99.
let res1 = 0;
for(i = 1; i < 100; i++) {
    if(i % 2 > 0) {
        res1 += i;
    }
}
console.log(res1);

//26.   Найдите произведение целых чисел от 1 до 20.
let res2 = 1;
for(i = 1; i <=20; i++) {
    res2 *= i;
}
console.log(res2);

//27.   Найдите сумму элементов элементов, являющихся четными числами.
let arr4 = [2, 5, 9, 3, 1, 4];
let res3 = 0;
for(i = 0; i < arr4.length; i++) {
    if(arr4[i] % 2 == 0) {
        res3 += arr4[i];
    }
}
console.log(res3);

//28.   Найдите сумму квадратов элементов этого массива.
let arr5 = [2, 5, 9, 3, 1, 4];
let res4 = 0;
for(i = 0; i < arr5.length; i++) {
    res4 += arr5[i] ** 2;
}
console.log(res4);

//29.   Найдите произведение элементов этого массива.
let arr6 = [2, 5, 9, 3, 1, 4];
let res5 = 1;
for(i = 0; i < arr6.length; i++) {
    res5 *= arr6[i];
}
console.log(res5);

//30.   С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = '';
for(i = 0; i <= 5; i++) {
    str += '-';
}
console.log(str);

//31.   С помощью цикла сформируйте строку '123456789'.
let str1 = '';
for(i = 1; i < 10; i++) {
    str1 += i;
}
console.log(str1);

//32.   С помощью цикла сформируйте строку '987654321'.
let str2 = '';
for(i = 9; i > 0; i--) {
    str2 += i;
}
console.log(str2);

//33.   С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str3 = '-';
for(i = 1; i < 10; i++) {
    str3 += i + '-';
}
console.log(str3);

//34.   Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
for(i = 10; i <= 1000; i++) {
    let str = String(i);
    console.log(str[0] + ',');
}

//35.   Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
for(i = 10; i <= 1000; i++) {
    let str = String(i);
    if(str[0] === '1') {
        console.log(i);
    }
}

//36.   Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for(i = 10; i <= 1000; i++) {
    let str = Number(String(i)[0]) + Number(String(i)[1]);
    if(str == 5) {
        console.log(i);
    }
}

//37.   Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
const a1 = [2, 5, 0, 4, 7];
for(i = 0; i < a1.length; i++) {
    console.log(a1[i]);
    if(a1[i] === 0) {
        break;
    }
}

for(let elem of a1) {
    console.log(elem);
    if(elem === 0) {
        break;
    }
}

//38.   Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
const a2 = [2, 5, 6, -4, 7];
let sum3 = 0;
/* for(i = 0; i < a2.length; i++) {
    if (Number(a2[i]) > 0) {
        sum3 += Number(a2[i]);
    }
    if(Number(a2[i]) < 0) {
        break;
    }
}*/
for(let elem of a2) {
    if (Number(elem) > 0) {
        sum3 += Number(elem);
    }
    if(Number(elem) < 0) {
        break;
    }
}
console.log(sum3);

//39.   Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).
const a3 = [2, 3, 6, 3, 7];
for(let elem of a3) {
    if(elem == 3) {
        console.log(a3.indexOf(elem));
        break;
    }
}

//40.   Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let sum4 = 0;
for(i = 1; i < 100; i++) {
    sum4 += i;
    if(sum4 >=100) {
        console.log(i);
        break;
    }
}

//41.   С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33
for(let i = 1; i <=3; i++) {
    for(let j = 1; j <= 3; j++) {
        console.log(String(i) + String(j) + ' ');
    }
}

//42.   Используя цикл и метод push заполните массив числами от 1 до 10.
let arr7 = [];
for(i = 1; i <= 10; i++) {
    arr7.push(i);
}
console.log(arr7);

//43.   Используя цикл и метод push заполните массив 10-ю буквами 'x'.
let arr8 = [];
for(i = 1; i <= 10; i++) {
    arr8.push('x');
}
console.log(arr8);

//44.   Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr9 = [1, 3, -2, -5, 6, -9, 8];
let t = [];
for(let elem of arr9) {
    if(elem > 0) {
        t.push(elem);
    }
}
console.log(t);
 
//45. Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
let arr10 = [1, 3, 2, 5];
for(i = 0; i < arr10.length; i++) {
    arr10[i] += 10;
}
console.log(arr10);

//46.   Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами. С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

let brr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let brr2 = [1, 2, 3, 4, 5, 6, 7];
let obj1 = {};

for(let i = 0; i < 7; i++) {
    obj1[brr1[i]] = brr2[i];
}
console.log(obj1);

//47.   Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
let obj3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj4 = {};

for(let key in obj3) {
    if(obj3[key] % 2 == 0) {
        obj4[key] = obj3[key];
    }
}
console.log(obj4);

//48.  Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.
let obj5 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let obj6 = {};

for(let key in obj5) {
    obj6[obj5[key]] = key;
}
console.log(obj6);

//49.   Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
let obj7 = {x: 1, y: 2, z: 3};
for(let i in obj7) {
    obj7[i] += 1;
}
console.log(obj7);

//50.   Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr11 = ['a', 'b', 'c', 'd', 'e'];
let flag1 = false;
for(let elem of arr11) {
    if(elem == 'c') {
        flag1 = true;
    }
}

if(flag1 == true) {
    console.log('+++');
} else {
    console.log('---');
}

//51.   Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.
let a = 21;
let flag = true;
for(let i = 2; i ** 2 <= a; i++) {
    if(a % i === 0) {
            flag = false;
            break;
    }
}
if(flag == true) {
    console.log('число простое');
} else {
    console.log('число составное');
}

//52.   Подсчитайте количество цифр 3 в этом массиве.
let brr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let container = 0;
for (let elem of brr) {
    if(elem == 3) {
        container++;
    }
}
console.log(container);

//53.   Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.
let nbb = [1, 2, 3, 2, 4, 2, 2, 3, 5, 6, 3, 2, 3];
let container2 = 0;
let container3 = 0;
for(let elem of nbb) {
    switch(elem) {
        case 2:
            container2++;
            break;
        case 3:
            container3++;
            break;
    }
}
console.log(container2, container3);

//54.   Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
/* let str4 = 'asppps';
let bdd = Array.from(str4);
let count = {};
for(let elem of bdd) {
    if (count[elem] === undefined) {
		count[elem] = 1;
	} else {
		count[elem]++;
	}
}
console.log(count); */

let str4 = 'asppps';
let bdd = Array.from(str4);
let count = { a: 0, s: 0, p: 0};
for(let elem of bdd) {
    count[elem]++;
}
console.log(count);

//55.   Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
let crr = [1, 2, 3, 4, 5];
for(i = 0; i < crr.length; i++) {
    console.log(crr[i] + 1);
}

//56.   Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.
let vrr = [1, 2, 3, 4, 5];
for(i = 0; i < 4; i++) {
    console.log(vrr[i] + ( vrr[i] + 1));
}

//57.   Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.
let nrr = [1, 2, 3, 4, 5, 6, 7, 8];
for(i = 2; i < nrr.length; i++) {
    console.log(nrr[i] - 2, nrr[i] - 1);
}

//58.   Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.
let xrr = [1, 2, 3, 4, 5, 6, 7, 8];
for(i = 2; i < xrr.length; i++) {
    let a = xrr[i] - 2;
    let b = xrr[i] - 1;
    console.log(a + '+' + b + '=' + (a + b));
}

//59.   Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.
let zrr = [1, 2, 3, 4, 5, 6, 7, 8];
for(i = 2; i < zrr.length; i++) {
    let a = zrr[i];
    let b = zrr[i] - 1;
    let c = zrr[i] + 1;
    console.log(b + '+' + a + '+' + c + '=' + (a + b + c));
}

//60.   Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.
let mrr = [10, 20, 30, 40, 21, 32, 51];
let sum5 = 0;
for(elem of mrr) {
    let a = String(elem);
    if(a[0] == 1 || a[0] == 2) {
        console.log(a); // '10, 20, 21'
        sum5 += Number(a);
    }
}
console.log(sum5);




let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
    let num1 = String(obj[elem])[0];
	if (num1 === "1" || num1 === "2") {
		console.log(obj[elem]);
        sum += obj[elem];
	}
}
console.log(sum);




//8
let arr = ['1', '2', '3', '4', '5'];
let sum = '';

for (let elem of arr) {
	sum = sum +  +elem;
}

console.log(sum);


let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i <= arr.length; i++) {
    console.log(+arr[i]);
	sum += +arr[i];
}

console.log(sum);