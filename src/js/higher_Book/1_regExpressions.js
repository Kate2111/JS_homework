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