

//DATE
console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
console.log(date.getDate());     // день

console.log(date.getHours());    // часы
console.log(date.getMinutes());  // минуты
console.log(date.getSeconds());  // секунды

console.log(date.getDay()); //день недели, воскресенье - 0, суббота - 6
console.log(date.getTime()); //формат timestamp, который показывает количество миллисекунд, прошедшее с 1-го января 1970 года по текущий (или заданный) момент времени.


//1.  Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.
let date = new Date();

function addZero (num) {
    if(num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
let nowDay = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getFullYear());

let nowHours = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());

console.log(nowHours + ' ' + nowDay);

//2.    Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
let date1 = '2022-12-01';
let date2 = date1.split('-').reverse().join('.');
console.log(date2);

//3.    Выведите на экран номер текущего дня недели.
let nowDay1 = new Date().getDay();
console.log(nowDay1);

//4.    Определите, является ли текущий день недели выходным или рабочим днем.
function workOrWeekend (day) {
    if(day == 0 || day == 6) {
        return 'сегодня выходной';
    } else {
        return 'сегодня рабочий день';
    }
}
let nowDay2 = new Date().getDay();
console.log(workOrWeekend (nowDay2));

function whatDay (day) {
    let dayNow;
    switch(day) {
        case 0: dayNow = 'воскресенье';
        break;
        case 1: dayNow = 'понедельник';
        break;
        case 2: dayNow = 'вторник';
        break;
        case 3: dayNow = 'среда';
        break;
        case 4: dayNow = 'четверг';
        break;
        case 5: dayNow = 'пятница';
        break;
        case 6: dayNow = 'суббота';
        break;
    }
    return dayNow;
}
let nowDay3 = new Date().getDay();
console.log(whatDay(nowDay3));

//4. Определите сколько дней осталось до ближайшего воскресенья.
let nowDay4 = new Date().getDay();
function st(day) {
    let days = 6 - day + 1;
    if(days == 1) {
        return `до воскресенья осталось ${days} день`;
    } if (days == 2 || days == 3 || days == 4) {
        return `до воскресенья осталось ${days} дня`;
    } else {
        return `до воскресенья осталось ${days} дней`;
    }
}
console.log(st(nowDay4));

//5.    Выведите с помощью этого массива название текущего месяца.
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let nowMonth = new Date().getMonth();
console.log(months[nowMonth]);

//6.    Узнайте, какой день недели был в ваш день рождения.
let myBD = new Date(1994, 11, 21).getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[myBD]);

//7.    Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.
let day2000 = new Date(2000, 1, 10);
let day1988 = new Date(1988, 3, 1);
let dif = (day2000.getTime() - day1988.getTime());
let mitutes = dif / 60000;
let hours = mitutes / 60;
let days1 = hours / 24;
console.log(days1);

//8.    Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
let day2022 = new Date();
let day1994 = new Date(1994, 11, 21);
let dif1 = (day2022.getTime() - day1994.getTime());
let mitutes2 = dif1 / 60000;
let hours2 = mitutes2 / 60;
let days3 = hours2 / 24;
let mounth = days3 / 30;
console.log(mounth);

//9.    Выведите на экран количество миллисекунд, прошедшее между 1 сентября 2000 года и 15 февраля 2010 года.
let d2010 = new Date(2010, 2, 15);
let d2000 = new Date(2000, 9, 1);
let dif2 = d2010 - d2000;
let mitutes3 = dif2 / 60000;
let hours3 = mitutes3 / 60;
let days4 = hours3 / 24;
let year1 = days4 / 365;
console.log(year1);

//10.   Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.
function getDate ( year, mounth) {
    let date = new Date(year, mounth, 0);
    return date.getDate();
}
console.log(getDate (2020, 5));

//11.Определите, какой день недели будет в последнем дне пятого месяца 2025 года.
function getDate ( year, mounth) {
    let date = (new Date(year, mounth, 0)).getDate(); //2020.06.0 или 2020.05.31
    let day = new Date(year, mounth - 1, date);
    return day.getDay();
}
console.log(getDate (2020, 5));

//12.   Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.
function isLeap(year) {
    let date = new Date(year, 2, 0).getDate();
    return date == 29;
}
console.log(isLeap(2024));

//13.   Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января:
function checkDate(year, month, date) {
    let day = new Date(year, month, date);
    return day.getFullYear() == year && day.getMonth() == month && day.getDate() == date;
}
console.log(checkDate(2025, 0, 31));
console.log(checkDate(2025, 0, 32));

//14.   Определите, какой день недели будет 31 декабря текущего года.
function dayWeek() {
    let now = new Date();
    let day = new Date(now.getFullYear(), 12, 31).getDay();
    let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return `31.12.${now.getFullYear()} - ${week[day]}`;
}
console.log(dayWeek());

//Любой год
function dayWeek(year) {
    let day = new Date(year, 12, 31).getDay();
    let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return `31.12.${year} - ${week[day]}`;
}
console.log(dayWeek(2020));

//15.   Определите, какой день недели будет 1 числа текущего месяца.
function dayWeek() {
    let date = new Date();
    let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return `01.${date.getMonth()}.${date.getFullYear()} - ${week[day]}`;
}
console.log(dayWeek());

//16.   Определите, какой день недели будет 31 декабря следующего года
function dayWeek() {
    let date = new Date();
    let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let day = new Date(date.getFullYear() + 1, 11 , 31).getDay();
    return `31.12.${date.getFullYear() + 1} - ${week[day]}`;
}
console.log(dayWeek());

//17.   Определите, какой день недели будет через год в такую же дату, как сегодня.
function dayWeek() {
    let date = new Date();
    let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let day = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate()).getDay();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() + 1} - ${week[day]}`;
}
console.log(dayWeek());

//18.   Определите, какой день недели был год назад в такую же дату, как сегодня.
function dayWeek() {
    let date = new Date();
    let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let day = new Date(date.getFullYear() -1, date.getMonth(), date.getDate()).getDay();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() - 1} - ${week[day]}`;
}
console.log(dayWeek());

//19.   Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.
function week (year, month) {
    let day = new Date(year, month - 1, 1);
    return day.getDay();
}
console.log(week (2022, 0));

//20.   Определите, сколько дней между 1 января и 10 сентября текущего года.
let day1 = new Date(2022, 1, 1);
let day2 = new Date(2022, 9, 10);
let res = (((day1 - day2) / 60000) / 60 ) / 24;
console.log(res);

//21.   Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.
let day3 = new Date(2022, new Date().getMonth(), 20);
let day4 = new Date(2022, new Date().getMonth() + 1, 10);
let res = (((day4 - day3) / 60000) / 60 ) / 24;
console.log(res);

//22.   Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.
let day5 = new Date();
let day6 = new Date(day5.getFullYear(), day5.getMonth(), day5.getDate()-1, 11, 59, 59);
let res = ((day5 - day6) / 60000) / 60;
console.log(res);

//23.   Определите, сколько часов прошло между началом дня и текущим моментом времени.
let day7 = new Date();
let day8 = new Date(day7.getFullYear(), day7.getMonth(), day7.getDate(), 0, 0, 0);
let res = ((day7 - day8) / 60000) / 60;
console.log(res);

//24.   Определите, сколько часов осталось до конца дня.
let day9 = new Date();
let day10 = new Date(day9.getFullYear(), day9.getMonth(), day9.getDate(), 24);
let res = ((day10 - day9) / 60000) / 60;
console.log(res);

//25.   Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.
function newYear() {
    let day01 = [];
    for (let year = 2000; year <= 2022; year++) {
        let date = new Date(year, 0, 1);
        
        if (date.getDay() == 6) {
            day01.push(`01.01.${date.getFullYear()} - суббота`);
        } if (date.getDay() == 0) {
            day01.push(`01.01.${date.getFullYear()} - воскресенье`);
        }
    }    
    console.log(day01.length);
    return day01;
}
console.log(newYear());

//26.   Определите, сколько секунд прошло с начала дня до настоящего момента времени.
let nowMoment = new Date();
let startDay = new Date(nowMoment.getFullYear(), nowMoment.getMonth(), nowMoment.getDate(), 0,0, 0);
console.log((nowMoment - startDay) / 60000);

//27.   Определите, сколько секунд осталось до конца дня.
let day11 = new Date();
let day12 = new Date(day11.getFullYear(), day11.getMonth(), day11.getDate(), 24);
console.log((day12 - day11) / 60000);

//28.   Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше
let date13 = '2020-11-31';
let date14 = '2020-12-01';
function compateDate() {
    if(date14 > date13) {
        return `${date14} больше ${date13}`;
    } else {
        return `${date13} меньше ${date14}`;
    }
}
console.log(compateDate());