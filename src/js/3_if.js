"use strict";

//1.     Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3

const a = 0; 
if(a == 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//2.    Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
const b = -3;
if(b > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//3.  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
const c = 1;
if(c < 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//4.     Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
const d = ['test', 'тест', 3];
if(d[2] == 'test') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//5.    Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

const test = true;
if(test) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//6.    Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
const e = 2;
if(e > 0 && e < 5) {console.log('Верно');} else {console.log('Неверно');}

//7.    Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
const f = 5;
if(f == 0 || f == 2) {
    console.log(f + 7);
} else {
    console.log( f / 10);
}

//8. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
const g = 3;
const i = 5;
if(g <= 1 && i >= 3) {
    console.log(g + i);
} else {
    console.log( g - i);
}

//9.    Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
const h = 12;
const l = 4;

if(h > 2 && h < 11 || l >= 6 && l < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//10.   Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
const j = [1, 2, 3, 4];
switch(j[1]) {
    case 1: console.log('Зима');
    break;
    case 2: console.log('Весна');
    break;
    case 3: console.log('Лето');
    break;
    case 4: console.log('Осень');
    break;
}

//11.   В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const day = 25;
if(day >= 1 && day <= 10) {
    console.log('Первая декада месяца');
} if (day >= 11 && day <= 21) {
    console.log('Вторая декада месяца');
} if (day >= 22 && day <= 31) {
    console.log('Третья декада месяца');
}

//12.   В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const month = 10;
if(month >= 1 && month <= 2) {
    console.log('зима');
} if(month == 12) {
    console.log('зима');
} if(month >= 3 && month <= 5) {
    console.log('весна');
} if(month >= 6 && month <= 8) {
    console.log('лето');
} if(month >= 9 && month <= 11) {
    console.log('осень');
}

//13.   Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
const z = '123456';
const x = Number(z[0]) + Number(z[1]) + Number(z[2]);
const v = Number(z[3]) + Number(z[4]) + Number(z[4]);
console.log(x);
console.log(v);
if(x == z)  {
    console.log('Да');
} else {
    console.log('Нет');
}

//14.   Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.

const ar = 95;
if(ar > 10 && ar < 99) {
    const br = Number(String(ar)[0]) + Number(String(ar)[1]);
    console.log(br);
    if(br <= 9) {
        console.log('сумма цифр однозначна');
    } else {
        console.log('сумма цифр двухзначна');
    }
}

//15.   Перепишите следующий код через switch-case:
const lang = 'de';

switch(lang) {
    case 'ru':
        console.log('рус');
    break;
    case 'en':
        console.log('анг');
    break;
    case 'de':
        console.log('нем');
    break;
    default:
        console.log('язык не поддерживается');
    break;
}

//16.   В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
const rr = [5, 2, 3];
if(rr.length == 3) {
    console.log(Number(rr[0]) + Number(rr[1]) + Number(rr[2]));
}

//17.   Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.
const jj = 'abc';
if(jj[0] == 'a') {
    console.log('Ok');
}

//18.   Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'.
const vv = 'flx';
const vf = vv[vv.length - 1];
if(vf == 'x') {
    console.log('Ok');
}

//19.   Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'.
const jk = 'abc';
if(jk[0] == 'a' || jk[0] == 'b') {
    console.log('Ok');
}

//20.   Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
const ad = 526;
const dd = String(ad)[2];
if(dd == 0) {
    console.log('Ok');
} else {
    console.log('No');
}

//21.   Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
const lum = 30;
const lu = String(lum); 
const la = lu[lu.length - 1];
console.log(la);
if(la == 0 || la == 2 || la == 4 || la == 6) {
    console.log('четное число');
}

//22.   Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число. С помощью оператора % и конструкции if проверьте четное это число или нет.
const rt = 26;
const rest = rt % 2;
if(rest == 0) {
    console.log('четное число');
} else {
    console.log('нечетное число');
}

//23.   Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
const cv = 12345;
const cb = String(cv);
if(cb[0] == 1 || cb[0] == 2 || cb[0] == 2) {
    console.log('да');
}

//24.   Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
const nm = 423162;
const mk = String(nm);
const sum1 = Number(mk[0]) + Number(mk[1]) + Number(mk[2]);
const sum2 = Number(mk[3]) + Number(mk[4]) + Number(mk[5]);
if(sum1 == sum2) {
    console.log('да');
} else {
    console.log('нет');
}