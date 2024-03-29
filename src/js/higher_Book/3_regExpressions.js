//1. Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' по шаблону: буква 'a', любой символ, буква 'b'.
function task1() {
    let str = 'ahb acb aeb aeeb adcb axeb';
    document.querySelector('.task1 div').textContent += str.match(/a.b/g);   
}
task1();

//2. Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' по шаблону: буква 'a', 2 любых символа, буква 'a'.
function task2() {
    let str = 'aba aca aea abba adca abea';
    document.querySelector('.task2 div').textContent += str.match(/a..a/g); 
}
task2();

//3. Напишите регулярку, которая найдет строки 'abba' и 'abea', не захватив 'adca'.
function task3() {
    let str = 'aba aca aea abba adca abea';
    document.querySelector('.task3 div').textContent += str.match(/ab.a/g); 
}
task3();

//4. Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
function task4() {
    let str = 'aa aba abba abbba abca abea';
    document.querySelector('.task4 div').textContent += str.match(/ab+a/g); 
}
task4();

//5. Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
function task5() {
    let str = 'aa aba abba abbba abca abea';
    document.querySelector('.task5 div').textContent += str.match(/ab*a/g); 
}
task5();

//6. Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
function task6() {
    let str = 'aa aba abba abbba abca abea';
    document.querySelector('.task6 div').textContent += str.match(/ab?a/g); 
}
task6();

//7. Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз.
function task7() {
    let str = 'ab abab abab abababab abea';
    document.querySelector('.task7 div').textContent += str.match(/(ab)+/g); 
}
task7();

//8. Напишите регулярку, которая найдет строку 'a.a', не захватив остальные.
function task8() {
    let str = 'a.a aba aea';
    document.querySelector('.task8 div').textContent += str.match(/a\.a/g); 
}
task8();

//9. Напишите регулярку, которая найдет строку '2+3', не захватив остальные.
function task9() {
    let str = '2+3 223 2223';
    document.querySelector('.task9 div').textContent += str.match(/2\+3/g); 
}
task9();

//10. Напишите регулярку, которая найдет строки '2+3', '2++3', '2+++3', не захватив остальные (+ может быть любое количество).
function task10() {
    let str = '23 2+3 2++3 2+++3 345 567';
    document.querySelector('.task10 div').textContent += str.match(/2(\+)+3/g); 
}
task10();

//11. Напишите регулярку, которая найдет строки '23', '2+3', '2++3', '2+++3', не захватив остальные.
function task11() {
    let str = '23 2+3 2++3 2+++3 445 677';
    document.querySelector('.task11 div').textContent += str.match(/2(\+)*3/g); 
}
task11();

//12. Напишите регулярку, которая найдет строки '*q+', '*qq+', '*qqq+', не захватив остальные.
function task12() {
    let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
    document.querySelector('.task12 div').textContent += str.match(/\*q+\+/g); 
}
task12();

//13. Напишите регулярку, которая найдет строки в квадратных скобках и заменят их на '!'.
function task13() {
    let str = '[abc] {abc} abc (abc) [abc]';
    document.querySelector('.task13 div').textContent += str.replace(/\[...\]/g, '!'); 
}
task13();

//14. Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
function task14() {
    let str = 'aa aba abba abbba abbbba abbbbba';
    document.querySelector('.task14 div').textContent += str.match(/ab{2,4}a/g); 
}
task14();

//15. Напишите регулярку, которая найдет строки 'abba', 'abbba', 'abbbba' и только их.
function task15() {
    let str = 'aa aba abba abbba abbbba abbbbba';
    document.querySelector('.task15 div').textContent += str.match(/ab{1,3}a/g); 
}
task15();

//16. Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' встречается более 4-х раз (включительно).
function task16() {
    let str = 'aa aba abba abbba abbbba abbbbba';
    document.querySelector('.task16 div').textContent += str.match(/ab{4,}a/g); 
}
task16();

//17. Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме 'a').
function task17() {
    let str = 'aba accca azzza wwwwa';
    document.querySelector('.task17 div').textContent += str.replace(/a.+?a/g, '!'); 
}
task17();

//18. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра.
function task18() {
    let str = 'a1a a2a a3a a4a a5a aba aca';
    document.querySelector('.task18 div').textContent += str.match(/a\d{1}a/g); 
}
task18();

//19. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр.
function task19() {
    let str = 'a1a a22a a333a a4444a a55555a aba aca'; 
    document.querySelector('.task19 div').textContent += str.match(/a\d+a/g); 
}
task19();

//20. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').
function task20() {
    let str = 'aa a1a a22a a333a a4444a a55555a aba aca'; 
    document.querySelector('.task20 div').textContent += str.match(/a\d*a/g); 
}
task20();

//21. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не число.
function task21() {
    let str = 'avb a1b a2b a3b a4b a5b abb acb';
    document.querySelector('.task21 div').textContent += str.match(/a\D+b/g); 
}
task21();

//22. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.
function task22() {
    let str = 'ave a#b a2b a$b a4b a5b a-b acb';
    document.querySelector('.task22 div').textContent += str.match(/a\W+b/g); 
}
task22();

//23. Напишите регулярку, которая заменит все пробелы на '!'.
function task23() {
    let str = 'ave a#a a2a a$a a4a a5a a-a aca';
    document.querySelector('.task23 div').textContent += str.replace(/\s/g, '!'); 
}
task23();

//24. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква 'b', 'e' или 'x'.
function task24() {
    let str = 'aba aea aca aza axa';
    document.querySelector('.task24 div').textContent += str.match(/a[bex]a/g); 
}
task24();

//25. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - цифра от 3-х до 6-ти..
function task25() {
    let str = 'a1a a3a a7a a9a aba';
    document.querySelector('.task25 div').textContent += str.match(/a[3-6]a/g); 
}
task25();

//26. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до g.
function task26() {
    let str = 'aba aea afa aha aga';
    document.querySelector('.task26 div').textContent += str.match(/a[a-g]a/g); 
}
task26();

//27. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от j до z.
function task27() {
    let str = 'aba aea afa aha aga aka';
    document.querySelector('.task27 div').textContent += str.match(/a[a-f,j-z]a/g); 
}
task27();

//28. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - буква от a до f и от A до D.
function task28() {
    let str = 'aAa aea aEa aJa a3a';
    document.querySelector('.task28 div').textContent += str.match(/a[a-f,A-D]a/g); 
}
task28();

//29. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных..
function task29() {
    let str = 'aAXa aeffa aGha aza ax23a a3sSa';
    document.querySelector('.task29 div').textContent += str.match(/a[a-z]a/g); 
}
task29();

//30. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие и большие латинские буквы, не затронув остальных.
function task30() {
    let str = 'aAXa aeffa aGha aza ax23a a3sSa';
    document.querySelector('.task30 div').textContent += str.match(/a[a-z,A-Z]+a/g); 
}
task30();

//31. Напишите регулярку, которая найдет по следующему шаблону: по краям стоят буквы 'a', а между ними - маленькие латинские буквы и цифры, не затронув остальных.
function task31() {
    let str = 'aAXa aeffa aGha aza ax23a a3sSa';
    document.querySelector('.task31 div').textContent += str.match(/a[a-z,0-9]+a/g); 
}
task31();

//32. Напишите регулярку, которая найдет строки по шаблону: цифра '1', затем символ не 'e' и не 'x', цифра '2'.
function task32() {
    let str = 'aAXa 1eff2 aGha 1z2 ax23a 13sS2';
    document.querySelector('.task32 div').textContent += str.match(/1[^ex]2/g); 
}
task32();

//33. Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.
function task33() {
    let str = 'x189z 1eff2 x9az x1z 1z2 x23z x09z';
    document.querySelector('.task33 div').textContent += str.match(/x[^2-7]z/g); 
}
task33();

//34. Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.
function task34() {
    let str = 'x1F89z xef3fz x9az xGbz 1z2 x2S3z xuez';
    document.querySelector('.task34 div').textContent += str.match(/x[^A-Z]+z/g); 
}
task34();

//35. Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ большая маленькая латинская буква и не цифра от 1 до 5 от 1 и более раз, буква 'z'.
function task35() {
    let str = 'xF89z xef3fz x9az xG6z 1z2 x7S3z xuez';
    document.querySelector('.task35 div').textContent += str.match(/x[^a-z,^1-5]+z/g); 
}
task35();

//36. Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'w', а между ними - буква кириллицы.
function task36() {
    let str = 'wйw wяw wёw wqw';
    document.querySelector('.task36 div').textContent += str.match(/w[а-яё]w/g); 
}
task36();

//37. Напишите регулярку, которая найдет все слова по шаблону: любая кириллическая буква любое количество раз.
function task37() {
    let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
    document.querySelector('.task37 div').textContent += str.match(/[а-яё]+/g); 
}
task37();

//38. Напишите регулярку, которая найдет строки 'a.a', 'a+a', 'a*a', не затронув остальных.
function task38() {
    let str = 'aba aea aca aza axa a.a a+a a*a';
    document.querySelector('.task38 div').textContent += str.match(/a[.+*]a/g); 
}
task38();

//39. Напишите регулярку, которая найдет строки по шаблону: буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'.
function task39() {
    let str = 'xaz x.z x3z x@@z x$z xrz';
    document.querySelector('.task39 div').textContent += str.match(/x[^.@$]z/g); 
}
task39();

//40. Напишите регулярку, которая найдет строки по шаблону: цифра или точка от 1 и более раз.
function task40() {
    let str = 'xaz x.z x3z x@z x45z x..9z';
    document.querySelector('.task40 div').textContent += str.match(/x[\d.]+z/g); 
}
task40();

//41. Напишите регулярку, которая найдет строки по шаблону: не цифра и не буква от 'a' до 'g' от 3 до 7 раз.
function task41() {
    let str = 'xklz x.z x3z xvfz x$z xr45zzz';
    document.querySelector('.task41 div').textContent += str.match(/x[^\da-g]{3,7}z/g); 
}
task41();

//42. Напишите регулярку, которая найдет все слова по шаблону: буква 'x', затем любое количество любых скобок, затем буква 'z'.
function task42() {
    let str = 'x[]z x{}z x.z x()z';
    document.querySelector('.task42 div').textContent += str.match(/x[(){}\[\]]+z/g); 
}
task42();

//43. Напишите регулярку, которая найдет строки в любых скобках и заменят их на '!'.
function task43() {
    let str = '!abc! !abc! abc !abc! !abc!';
    document.querySelector('.task43 div').textContent += str.replace(/[(){}\[\]]+/g,'!').replace(/![abc]+!/g, '!'); 
}
task43();

//44. Напишите регулярку, которая найдет строки по шаблону: шляпка или собака, а затем две латинских буквы.
function task44() {
    let str = '^xx axx ^zz bkk @ss';
    document.querySelector('.task44 div').textContent += str.match(/[\^@][a-z]{2}/g); 
}
task44();

//45. Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка и не собака, а затем две латинских буквы.
function task45() {
    let str = '^xx axx ^zz bkk @ss';
    document.querySelector('.task45 div').textContent += str.match(/[\^][a-z]{2}/g); 
}
task45();

//46. Напишите регулярку, которая найдет строки по шаблону: НЕ шляпка, а затем две латинских буквы.
function task46() {
    let str = '^xx axx ^zz bkk';
    document.querySelector('.task46 div').textContent += str.match(); 
}
task46();

//47. Найдите все строки по следующему шаблону: буква 'x', большая или маленькая буква или дефис, буква 'z'.
function task47() {
    let str = 'xaz xBz xcz x-z x@z';
    document.querySelector('.task47 div').textContent += str.match(/x[a-zA-Z-]z/g); 
}
task47();

//48. Найдите все строки по следующему шаблону: буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'.
function task48() {
    let str = 'xaz x$z x-z xcz x+z x%z x*z';
    document.querySelector('.task48 div').textContent += str.match(/x[$\-+]z/g); 
}
task48();

//49. Напишите регулярку, которая найдет первую подстроку из букв.
function task49() {
    let str = 'abc def xyz';
    document.querySelector('.task49 div').textContent += str.match(/^[a-z]+/g); 
}
task49();

//50. Напишите регулярку, которая найдет последнюю подстроку из букв.
function task50() {
    let str = 'abc def xyz';
    document.querySelector('.task50 div').textContent += str.match(/[a-z]+$/g); 
}
task50();

//51. Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или буква 'x' любое количество раз.
function task51() {
    let str = 'aeeea aeea aea axa axxa axxxa';
    document.querySelector('.task51 div').textContent += str.match(/a(e+|x+)a/g); 
}
task51();

//52. Напишите регулярку, которая найдет строки по шаблону: по краям стоят буквы 'a', а между ними - или буква 'e' два раза или буква 'x' любое количество раз.
function task52() {
    let str = 'aeeea aeea aea axa axxa axxxa';
    document.querySelector('.task52 div').textContent += str.match(/a(e{2}|x+)a/g); 
}
task52();

//53. Определите, начинается ли переданная строка с 'http://'.
function task53() {
    let str = 'https://www.code.mu/';
    const text = document.querySelector('.task53 div');
    const flag = /^http:\/\//.test(str);

    (flag) ? text.textContent += 'true': text.textContent += 'false';
}
task53();

//54. Определите, начинается ли переданная строка с 'http://' или с 'https://'.
function task54() {
    let str = 'https://www.code.mu/';
    const text = document.querySelector('.task54 div');
    const flag = /^http:\/\/|^https:\/\//.test(str);

    (flag) ? text.textContent += 'true': text.textContent += 'false';
}
task54();

//55. Определите, что ли заканчивается переданная строка расширением 'txt', 'html' или 'php'.
function task55() {
    let str = 'index.html';
    const text = document.querySelector('.task55 div');
    const flag = /txt$|html$|php$/.test(str);

    (flag) ? text.textContent += 'true': text.textContent += 'false';
}
task55();

//56. Определите, что ли заканчивается переданная строка расширением 'jpg' или 'jpeg'.
function task56() {
    let str = 'cat.jpg';
    const text = document.querySelector('.task56 div');
    const flag = /jpg$|jpeg$/.test(str);

    (flag) ? text.textContent += 'true': text.textContent += 'false';
}
task56();

//57. Определите, является ли строка 'числом, длиной от 5 до 12 цифр'.
function task57() {
    let str = '123';
    const text = document.querySelector('.task57 div');
    const flag = /\d{5,12}/.test(str);
    (flag) ? text.textContent += 'число, длиной от 5 до 12 цифр': text.textContent += 'число, длиной менее 5 цифр';
}
task57();


//58. Определите, является ли переданная строка датой в формате год-месяц-день.
function task58() {
    let str = '2023-03-07';
    const text = document.querySelector('.task58 div');
    const flag = /\d{4}-\d{2}-\d{2}/.test(str);
    (flag) ? text.textContent += 'является': text.textContent += 'не является';
}
task58();

//59. Определите, является ли переданная строка датой в формате день.месяц.год.
function task59() {
    let str = '2023-03-07';
    const text = document.querySelector('.task59 div');
    const flag = /\d{4}\.\d{2}\.\d{2}/.test(str);
    (flag) ? text.textContent += 'является': text.textContent += 'не является';
}
task59();

//60. Определите, является ли переданная строка датой в формате день.месяц.год.
function task60() {
    let str = '18:48:25';
    const text = document.querySelector('.task60 div');
    const flag = /\d{2}:\d{2}:\d{2}/.test(str);
    (flag) ? text.textContent += 'является': text.textContent += 'не является';
}
task60();

//61. Определите, является ли переданная строка корректным емэйлом.
function task61() {
    let str = 'address@gmail.com';
    const text = document.querySelector('.task61 div');
    const flag = /\w+@(gmail|mail)\.(ru|com)/.test(str);
    (flag) ? text.textContent += 'является': text.textContent += 'не является';
}
task61();

//62. Получите массив доменных имен из этой строки.
function task62() {
    let str = 'site.ru sss site.com zzz site.net';
    const text = document.querySelector('.task62 div');
    text.textContent += str.match(/[a-z]+\.[a-z]+/g);
}
task62();

//63. Найдите сумму всех чисел этой строки.
function task63() {
    let str = 'a1b c34d x567z';
    const text = document.querySelector('.task63 div');
    const arr = str.match(/\d/g);
    const res = arr.reduce((sum, item) => {return sum + parseInt(item);}, 0);
    text.textContent += `сумма чисел [${arr}]  равна ${res}`;
}
task63();

//64. Найдите этот домен и положите его имя в первый карман, а зону - во второй.
function task64() {
    let str = 'sss domain.ru zzz';
    const text = document.querySelector('.task64 div');
    const arr = str.match(/(\w+)\.([a-z]+)/);
    text.textContent += `${arr[0]}, 1й карман - (${arr[1]}), 2й карман - (${arr[2]})`;
}
task64();

//65. Положите день в первый карман, месяц - во второй, а год - в третий.
function task65() {
    let str = '31.12.2025';
    const text = document.querySelector('.task65 div');
    const arr = str.match(/(\d+)\.(\d+)\.(\d+)/);
    text.textContent += `['${arr[0]}', '${arr[1]}', '${arr[2]}', '${arr[3]}', index: ${arr.index}, input: ${arr.input}]`;
}
task65();

//66. Поменяйте местами цифры во всех двухзначных числах.
function task66() {
    let str = '12 34 56 78';
    const text = document.querySelector('.task66 div');
    text.textContent += str.replace(/(\d)(\d)/g, '$2$1');
}
task66();

//67. Преобразуйте эту дату в '2025.12.31'
function task67() {
    let str = '31.12.2025';
    const text = document.querySelector('.task67 div');
    text.textContent += str.replace(/(\d+)\.(\d+)\.(\d+)/g, '$3.$2.$1');
}
task67();

//68. Напишите регулярку, которая рядом с каждой цифрой напишет такую же
function task68() {
    let str = 'a1b2c3';
    const text = document.querySelector('.task68 div');
    text.textContent += str.replace(/(\d)/g, '$&$&');
}
task68();

//69. Напишите регулярку, которая рядом с каждой цифрой напишет такую же
function task69() {
    let str = '123@456';
    const text = document.querySelector('.task69 div');
    text.textContent += str.replace(/@/g, "($`@$')");
}
task69();

//70. Найдите все подстроки, в которых есть три одинаковые буквы подряд
function task70() {
    let str = 'aaa bbb ccc xyz';
    const text = document.querySelector('.task70 div');
    text.textContent += str.replace(/([a-z])\1\1/g, "!");
}
task70();

//71. Найдите все подстроки, в которых есть две и более одинаковые буквы подряд.
function task71() {
    let str = 'a aa aaa aaaa aaaaa';
    const text = document.querySelector('.task71 div');
    text.textContent += str.replace(/[a-z]{2,}/g, "!");
}
task71();

//72. Найдите все подстроки, в которых есть два одинаковых слова подряд.
function task72() {
    let str = 'aaa aaa bbb bbb ccc ddd';
    const text = document.querySelector('.task72 div');
    text.textContent += str.match(/([a-z]+\s)\1/g);
}
task72();

//73. Получите массив имен функций из строки.
function task73() {
    let str = 'func1() func2() func3()';
    const text = document.querySelector('.task73 div');
    text.textContent += str.match(/[a-z]+[0-9]\(\)/g);
}
task73();

//74. Получите массив имен атрибутов этого тега.
function task74() {
    let str = '<a href="" class="eee" id="zzz">';
    const text = document.querySelector('.task74 div');
    text.textContent += str.match(/("[a-z]+")/g);
}
task74();

//75. Найдите числа, стоящие в скобках и увеличьте их в два раза. То есть из нашей строки должна получится следующая:'aaa [4] bbb [6] ccc [24] ddd'
function task75() {
    let str = 'aaa [2] bbb [3] ccc [12] ddd';
    const text = document.querySelector('.task75 div');
    text.textContent += str.replace(/(\d+)/g, function (num) {
        return num*2;
    });
}
task75();

//76. Найдите все числа и переверните их цифры в обратном порядке. То есть из нашей строки должна получится следующая:'321 654 987'
function task76() {
    let str = '123 456 789';
    const text = document.querySelector('.task76 div');
    text.textContent += str.replace(/(\d{1,3})/g, function (num) {
        return num.split('').reverse().join('');
    });
}
task76();

//77. Найдите все даты и преобразуйте их в другой формат так, чтобы получилась следующая строка:'2025-12-31 2024-11-30 2023-10-29'
function task77() {
    let str = '31.12.2025 30.11.2024 29.10.2023';
    const text = document.querySelector('.task77 div');
    text.textContent += str.replace(/(\d+)\.(\d+)\.(\d+)/g, '$3-$2-$1');
}
task77();

//78. Найдите позицию первого числа, состоящего из трех цифр.
function task78() {
    let str = '1 23 456 789';
    const text = document.querySelector('.task78 div');
    text.textContent += `Позиция ${str.search(/\d{3}/g)}`;
}
task78();

//79. Разбейте эту строку так, чтобы все части даты и времени были в одном массиве. То есть у вас должен получится следующий массив:['2025', '12', '31', '12', '59', '59']; 
function task79() {
    let str = '2025-12-31 12:59:59';
    const text = document.querySelector('.task79 div');
    text.textContent += str.split(/[-:]/g);
}
task79();

//80. Определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения. 
function task80() {
    let str = '2023';
    const text = document.querySelector('.task80 div');
    text.textContent += /(19|20)\d{2}/.test(str);
}
task80();

//81. Определите, что переданная строка является корректным временем вида часы:минуты. Часы и минуты не должны выходить за диапазон времени. 
function task81() {
    let str = '23:56';
    const text = document.querySelector('.task81 div');
    text.textContent += /([01]\d|2[0-3]):([0-5]\d|00)/.test(str);
}
task81();

//82. Удалите одной регуляркой все повторяющиеся слова из строки.
function task82() {
    let str = 'work job work bbb ccc job';
    const text = document.querySelector('.task82 div');
    text.textContent += str.replace(/\b(\w+)\b(?=.*?\1)/g, '');
}
task82();

//83. 
function task83() {
    let str = 'worrk job work bbb ccc job';
    const text = document.querySelector('.task83 div');
    text.textContent += str.replace(/\b\w*([a-z])\1\w*\b/g, '');
}
task83();


