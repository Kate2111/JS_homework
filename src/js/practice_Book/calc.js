"use strict";

//1. Сделайте калькулятор, который будет находить площадь и периметр квадрата.

function task1 () {
    const square = document.querySelector('.task1 .square');
    const perimeter = document.querySelector('.task1 .perimeter');
    const side = document.querySelector('.task1 .side');
    const btn = document.querySelector('.task1 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        square.textContent = `Площадь квадрата (S): ${Math.pow(+side.value, 2)} см2`;
        perimeter.textContent = `Периметр квадрата (P): ${(+side.value) * 4} см`;
    }
}

task1 ();

//2. Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

function task2 () {
    const square = document.querySelector('.task2 .square');
    const perimeter = document.querySelector('.task2 .perimeter');
    const side1 = document.querySelector('.task2 .side1');
    const side2 = document.querySelector('.task2 .side2');
    const btn = document.querySelector('.task2 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        const squareFormula = +side1.value * (+side2.value);
        square.textContent = `Площадь прямоугольника (S): ${squareFormula} см2`;
        const perFormula = (+side1.value * 2) + (+side2.value * 2);
        perimeter.textContent = `Периметр прямоугольника (P): ${perFormula} см`;
    }
}

task2 ();

//3. Сделайте калькулятор, который будет находить площадь круга и длину окружности

function task3 () {
    const square = document.querySelector('.task3 .square');
    const perimeter = document.querySelector('.task3 .perimeter');
    const side = document.querySelector('.task3 .side');
    const btn = document.querySelector('.task3 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        const squareFormula = Math.round(3.14 * Math.pow(+side.value, 2));
        square.textContent = `Площадь круга (S): ${squareFormula} см2`;
        const perFormula = Math.round(2 * 3.14 * (+side.value));
        perimeter.textContent = `Длина окружности (P): ${perFormula} см`;
    }
}

task3 ();

//4. Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

function task4 () {
    const square = document.querySelector('.task4 .square');
    const side1 = document.querySelector('.task4 .side1');
    const side2 = document.querySelector('.task4 .side2');
    const side3 = document.querySelector('.task4 .side3');
    const btn = document.querySelector('.task4 button');
    
    btn.addEventListener('click', getResult);

    function getResult() {
        let a = +side1.value;
        let b = +side2.value;
        let c = +side3.value;
        const p = (a + b + c) / 2;
        console.log(p);
        const squareFormula = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
        square.textContent = `Площадь треугольника (S): ${squareFormula} см2`;
    }
}

task4 ();

//5. Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

function task5() {
    const a = document.querySelector('.task5 .a');
    const b = document.querySelector('.task5 .b');
    const c = document.querySelector('.task5 .c');
    const btn = document.querySelector('.task5 button');
    let result = document.querySelector('.task5 .result');

    btn.onclick = () => {
        let res1;
        let res2;
        const discr = (Math.pow(+b.value, 2) - (4 * (+a.value) * (+c.value)));
        console.log(discr);

        if(discr === 0) {
            res1 = (-(+b.value) + Math.sqrt(discr)) / (2 * (+a.value));
            result.textContent = `D = 0 ⇒ уравнение имеет один корень. X = ${res1}`;
        } if(discr > 0) {
            res1 = (-(+b.value) + Math.sqrt(discr)) / (2 * (+a.value));
            res2 = (-(+b.value) - Math.sqrt(discr)) / (2 * (+a.value));
            result.innerHTML = `D > 0 ⇒ уравнение имеет два корня. X<sub>1</sub> = ${res1}, X<sub>2</sub> = ${res2}`;
        } if(discr < 0) {
            result.textContent = 'Корней нет';
        }
    };

}

task5();

//6. Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.
function task6() {
    const elems = document.querySelectorAll('.task6 input');
    const button = document.querySelector('.task6 button');
    const nums = document.querySelector('.task6 .nums');

    button.addEventListener('click', () => {
        let arr = [];
        for(let i = 0; i < elems.length; i++) {
            arr.push(elems[i].value);
        }
        
        function compareNumeric(a, b) {
            return a - b;
        }

        arr.sort(compareNumeric);

        for(let i = 0; i < arr.length; i++) {
            let a = Math.pow(+arr[0], 2);
            let b = Math.pow(+arr[1], 2);
            let c = Math.pow(+arr[2], 2);

            console.log(a, b, c);

            if(c === a + b) {
                nums.textContent = 'Числа являются тройкой Пифагора';
            } else {
                nums.textContent = 'Попробуйте еще';
            }
        }
       
        console.log(arr);
    });
    
}
task6();

//7. Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа
function task7() {
    const input = document.querySelector('.task7 input');
    const res = document.querySelector('.task7 .result');
    const btn = document.querySelector('.task7 button');

    btn.addEventListener('click', () => {
        let arr = [];
        let items = [];
        for(let i = +input.value; i > 0; i--) {
            arr.push(i);
        }

        arr.map(elem => {
            if(+input.value % elem === 0) {
                items.push(elem);
            }
        });

        res.textContent += items.join(', ');
    });

    input.onclick = () => {res.textContent = 'Список делителей числа: ';};
    input.onselect = () => {res.textContent = 'Список делителей числа: ';};
}
task7();

//8. Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.

function task8() {
    const input1 = document.querySelector('.task8 .num1');
    const input2 = document.querySelector('.task8 .num2');
    const res = document.querySelector('.task8 .result');
    const btn = document.querySelector('.task8 button');
    let itemDivider1 = [];
    let itemDivider2 = [];

    btn.addEventListener('click', findDividerHalder);
    input1.addEventListener('click', clearWindow);
    input2.addEventListener('click', clearWindow);

    function findDividerHalder () {
        getDivider(input1, itemDivider1);
        getDivider(input2, itemDivider2);

        compareDivider(itemDivider1, itemDivider2);

        btn.removeEventListener('click', findDividerHalder);
    }

    function clearWindow () {
        res.textContent = 'Список общих делителей чисел: ';
        itemDivider1 = [];
        itemDivider2 = [];
        btn.addEventListener('click', findDividerHalder);
    }

    function getDivider(input, items) {
        let arr = [];
        for(let i = +input.value; i > 0; i-- ) {
            arr.push(i);
        }
        
        arr.forEach(elem => {
            if(+input.value % elem === 0) {
                items.push(elem);
            }
        });
    }

    function compareDivider(item1, item2) {
        let generalArr = [...item1, ...item2];
        generalArr.sort((a, b) => a - b);

        let removed = [];

        for(let i = 0; i < generalArr.length; i++) {
            if(generalArr[i] === generalArr[i - 1]) {
                removed.push(generalArr.splice(i, 1));
                i--;
            }
        }

        let result = [].concat(...removed).join(',');
        res.textContent += result;
    }    
}
task8();

//9.  Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
function task9() {
    const input1 = document.querySelector('.task9 .num1');
    const input2 = document.querySelector('.task9 .num2');
    const res1 = document.querySelector('.task9 .result1');
    const res2 = document.querySelector('.task9 .result2');
    const btn = document.querySelector('.task9 button');

    btn.addEventListener('click', findMoreDeneralDivider);
    input1.addEventListener('click', clearWindow);
    input2.addEventListener('click', clearWindow);

    function findMoreDeneralDivider() {
        let item1 = getDivider (input1); 
        let item2 = getDivider (input2);

        generalDivider (item1, item2);

        btn.removeEventListener('click', findMoreDeneralDivider);
    }

    function clearWindow () {
        res1.textContent = 'Наибольший общий делитель: ';
        res2.textContent = 'Наименьший общий делитель: ';
        btn.addEventListener('click', findMoreDeneralDivider);
    }

    function getDivider (input) {
        let arr = [];
        for(let i = +input.value; i > 1; i--) {
            arr.push(i);
        }

        let elems = arr.filter(elem => +input.value % elem === 0);
        return elems;
    }

    function generalDivider (arr1, arr2) {
        let generalArr = [...arr1, ...arr2].sort((a, b) => a - b);

        let removed = [];

        for(let i = 0; i < generalArr.length; i++) {
            if(generalArr[i] === generalArr[i - 1]){
                removed.push(generalArr.splice(i, 1));
                i--;
            }
        }

        let maxNum = Math.max.apply(null, ([].concat(...removed)));
        let minNum = Math.min.apply(null, ([].concat(...removed)));

        res1.textContent += maxNum;
        res2.textContent += minNum;
    }
}
task9();

//10. Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том:
//- сколько в этом тексте слов
//- сколько в тексте символов
//- сколько в тексте символов за вычетом пробелов
//- сообщение о процентном содержании каждого символа в тексте.
function task10() {
    const text = document.querySelector('.task10 textarea');
    const words = document.querySelector('.task10 .words_text');
    const simbol = document.querySelector('.task10 .simbol_text');
    const simbolSpace = document.querySelector('.task10 .space_text');
    const wrapper = document.querySelector('.task10');
    const flags = document.querySelectorAll('.task10 input');
    
    for(let flag of flags) {
        flag.addEventListener('click', function func() {
            const counterWords = text.value.split(' ');
            if(flag.parentElement.className == 'words') {
                counterWord (counterWords);
            } 
            if(flag.parentElement.className == 'simbol') {
                counterSimbol (text.value);
            }
            if(flag.parentElement.className == 'simbolSpaces') {
                counterSimbolSpaces (counterWords);
            } 
            if(flag.parentElement.className == 'percent') {
                percentSimbol (counterWords);
            }
        });
    }

    function counterWord (arr) {
        let lastWord = arr[arr.length - 1];
        if(lastWord == '') {
            //counterWord.pop(lastWord, 1);
            arr.splice(-1, 1);
        }

        words.textContent = `Количество слов в тексте: ${arr.length}`;
    }

    function counterSimbol (str) {
        let sum = str.length;
        simbol.textContent = `Количество символов в тексте: ${sum}`;
    } 

    function counterSimbolSpaces (arr) {
        let sum = 0;
        for(let elem of arr) {
            sum += elem.length;
        } 
        simbolSpace.textContent = `Количество символов в тексте(без пробелов): ${sum}`;
    } 

    function percentSimbol (arr) {
        let simbols = arr.join('').split('').sort();

        let sum = simbols.reduce((obj, i) => {
            obj[i] ? obj[i] += 1 : obj[i] = 1;
            return obj;
        }, {});

        for(let key in sum) {
            let a = Math.round((sum[key] * 100) / simbols.length);

            let percent = document.createElement('div');
            percent.textContent = `Количество символа ${key} в тексте = ${a}%`;
            wrapper.appendChild(percent);
        }
    }
}
task10();

//11. Игра угадай число
function task11() {
    const inputNumber = document.querySelector('.task11 .number');
    const inputName = document.querySelector('.task11 .name');
    const massage = document.querySelector('.task11 .massage');
    const parent = document.querySelector('.task11 .game');
    const number = Math.round(Math.random() * 100)
    let counter = 7;
    let showCounter = document.createElement('div');
    parent.appendChild(showCounter);

    inputNumber.focus();

    inputNumber.addEventListener('blur',guessNumber);
    inputNumber.addEventListener('click',clearInput);
    inputName.addEventListener('blur', showRules);

    function guessNumber () {
        let guess = Number.parseInt(inputNumber.value);

        if(guess > number) {
            massage.textContent = 'введите число поменьше';
        } if (guess < number) {
            massage.textContent = 'введите число побольше';
        } if (guess == number) {
            massage.textContent = 'Ты молодец!';
            inputNumber.classList.add('win');
        }

        
        showCounter.textContent = `Осталось попыток ${counter -= 1}`;
        if(counter == 0) {
            massage.textContent = 'GAME OVER';
            massage.style.color = 'red';
            showCounter.textContent = '';
            inputNumber.classList.add('lose');
        }
    }

    function clearInput () {
        inputNumber.value = '';
    }

    function showRules() {
        let rules = document.createElement('div');
        rules.textContent = `${inputName.value}, правила игры: загадано число от 1 до 100, у тебя есть всего 7 попыток его угадать.`;
        parent.prepend(rules);
        inputName.remove();
    }
    
}
task11();

//12. Игра угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

function task12() {
    const table = document.querySelector('.task12 #field');
    const timer = document.querySelector('.task12 .timer');
    const rows = 10;
    const column = 10;
    let items = [];
    let arrTd = [];
    let counter = 0;
    let time = 40;

    createTable();
    createArrTd ();
    createArrRandomNumber();
    getClassName (arrTd);
    counterClassYesHandler ();
    table.addEventListener('click', countDownTimerHandler);

    function createTable() {
        for(let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');

            for(let k = 0; k < column; k++) {
                let td = document.createElement('td');
                tr.append(td);

                td.addEventListener('click', cellPaintHandler);
            }

            table.append(tr); 
        } 
    }

    function createArrTd () {
        let elems = table.querySelectorAll('td');
        for(let i = 0; i < rows; i++) {
            arrTd[i] = [];
            for(let j = 0; j < column; j++) {
                arrTd[i].push(elems[(i * column) + j]);
            }
        } 
    }

    //Создаем массив с рандомным положением классов 'no' и 'yes'
    function createArrRandomNumber() {
        for(let i = 0; i < 10; i++) {
            items[i] = [];
            for(let j = 0; j < 9; j++) {
                items[i].push('no');
            }
        }

        for(let i = 0; i < 10; i++) {
            let num = Math.round(Math.random() * 9);
            items[i].splice(num, 0, 'yes');
        }
    }

    //Присваеваем каждому элементу Td класс по индексу нахождения в массиве
    function getClassName (list) {
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++) {
                list[i][j].classList.add(items[i][j]);
            }  
        }  
    } 

    function cellPaintHandler() {
        if(this.className == 'yes') {
            this.style.backgroundColor = 'green';
        } else {
            this.style.backgroundColor = 'gold';
        }
    }

    function counterClassYesHandler () {
        const yesTd = table.querySelectorAll('.yes');
        yesTd.forEach(yes => {
            yes.addEventListener('click', function() {
                if(time > 0) {
                    counter++;
                    console.log(counter);
                }
            });
        });
    }

    function countDownTimerHandler() {
        let timerID = setInterval(function() {
            timer.textContent = `До конца игры осталось ${--time} секунд`;
            if(time < 10) {
                timer.textContent = `До конца игры осталось 0${--time} секунд`;
            }
            if(time === 0) {
                clearInterval(timerID);
                if(counter === 10) {
                    timer.textContent = 'Всемя закончилось. Ты выйграл';
                } else {
                    timer.textContent = 'Всемя закончилось. Попробуй еще раз';
                }
                
            }
        }, 1000); 
        this.removeEventListener('click', countDownTimerHandler);
    }
    
}
task12();

//13. Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера. Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.

//14. Линейный календарь. Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд. Сделайте так, чтобы :
//-текущий день в календаре был выделен каким-нибудь цветом.
//-над списком было написано название текущего месяца по-русски и номер года.
//-над календарем появились ссылки вперед и назад, позволяющие менять месяц. Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.

function task14() {
    const next = document.querySelector('.task14 .next');
    const prev = document.querySelector('.task14 .back');
    const calendar = document.querySelector('.task14 .calendar');
    const yearList = document.querySelector('.task14 .year-list');
    const monthList = document.querySelector('.task14 .month-list');
    let showMonth = new Date().getMonth();
    let showYear = new Date().getFullYear();
    let lastDate;

    initCalendar(showYear, showMonth);

    function initCalendar(year, month) {
        showInfo();
        drawCalendar(year, month);
    }
    
    //Активируем стрелочки
    next.addEventListener('click', nextMonthYearHandler);
    prev.addEventListener('click', prevMonthYearHandler);

    //Активируем блок с выбором месяца и года
    selectedMonthYear ();


    //Получаем блок с выбором месяца и года
    function showInfo() {
        const arr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
        getListMonthAndYear (0, arr.length, monthList, arr);
        getListMonthAndYear (1970, 2030, yearList);
        getCurrentMonthAndYear('.month-list', showMonth);
        getCurrentMonthAndYear('.year-list', showYear);
    }

    //Создаем календарь
    function drawCalendar(year, month) {
        getLastDay(year, month);
        createCalendar(calendar);
        shiftFreeItem (year, month, calendar);
    }
    
   
    //Получаем блок с выбором месяца и года
    function getListMonthAndYear (start, length, selector, list) {
        selector.innerHTML = '';
        for(let i = start; i < length; i++) {
            const option = document.createElement('option');
            option.value = i;
            if(selector == monthList) {
                option.innerHTML = list[i];
            } else {
                option.innerHTML = i;
            }
            selector.appendChild(option);
        }  
    }

    function getCurrentMonthAndYear(selector, currentMoment) {
        const elems = document.querySelectorAll(`.task14 ${selector} option`);
        
        for(let elem of elems) {
            if(elem.value == currentMoment) {
                elem.selected = true;
            }
        }
    }
    
    //Создаем календарь
    function getLastDay(year, month) {
        lastDate = new Date(year, month + 1, 0).getDate();
    }

    function createCalendar (parent) {
        parent.innerHTML = '';
        for(let i = 0; i < lastDate; i++) {
            const li = document.createElement('li');
            li.textContent = i + 1;
            let nowDay = li.textContent == new Date().getDate();
            if(nowDay) {
                li.style.backgroundColor = 'rgba(109, 158, 249, 0.838)';
            }
            parent.appendChild(li); 
        } 
    }

    function shiftFreeItem (year, month, parent) {
        let dayOfWeek = new Date(year, month, 1).getDay(); 
        if (dayOfWeek == 0) {
            createFreeLi (6, parent);
        }
        if(dayOfWeek >= 1) {
            createFreeLi (dayOfWeek - 1, parent);
        } 
        
    }

    function createFreeLi (length, parent) {
        for(let i = 0; i < length; i++) {
            const freeLi = document.createElement('li');
            freeLi.textContent = '';
            parent.prepend(freeLi);
        } 
    }
    
     //Активируем блок с выбором месяца и года
     function selectedMonthYear () {
        yearList.addEventListener('change', function(){
            showYear = this.value;
            initCalendar(showYear, showMonth);
        });
        monthList.addEventListener('change', function(){
            showMonth = this.value;
            initCalendar(showYear, showMonth);
        });    
    }


    //Активируем стрелку назад
    function prevMonthYearHandler(e) {
       e.preventDefault();
        showYear = getPrevYear(showYear, showMonth);
        showMonth = getPrevMonth(showMonth);
        
        initCalendar(showYear, showMonth);
    }

    function getPrevYear(year, month) {
        if(month == 0) {
            return year - 1;
        } else {
            return year;
        }
    }

    function getPrevMonth(month) {
        if(month == 0) {
            return 11;
        } else {
            return month - 1;
        }
    }

    //Активируем стрелку вперед
    function nextMonthYearHandler(e) {
        e.preventDefault();
        showYear = getNextYear(showYear,showMonth);
        showMonth = getNextMonth(showMonth);
        
        initCalendar(showYear, showMonth);
    }

    function getNextYear(year, month) {
        if(month == 11) {
            return year + 1;
        } else {
            return year;
        }
    }

    function getNextMonth(month) {
        if(month == 11) {
            return 0;
        } else {
            return month + 1;
        }
    }
}

task14();

//15. Сейчас мы сделаем сайт, который будет помогать определить значение HTML тега. Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега. После этого по нажатию на Enter под инпутом пусть выдается описание этого тега

function task15() {
    const input = document.querySelector('.task15 input');

    filterSelect();
    
    function filterSelect() {
        const select = document.querySelector('.task15 select');
        const nameTag = document.querySelectorAll('.task15 .name_tag');
        const category = document.querySelectorAll('.task15 .category');
        const descr = document.querySelectorAll('.task15 .descr');

        select.addEventListener('blur', () => {
            for(let elem of select) {
                hasElemValue('name_tag', elem, nameTag);
                hasElemValue('category', elem, category);
                hasElemValue('descr', elem, descr);
            }
        });    
    }

    function hasElemValue(nameValue, select, nameList) {
        if(select.selected && select.value == nameValue) {
            input.addEventListener('input', searchTagHandler.bind(input,nameList));
        }
    }

    function searchTagHandler(arr) {
        let val = this.value.trim();
        if(val != '' ) {
            searchTag(arr, val);
        }  
    }

    function searchTag(arr, text) {
        const header = document.querySelector('.task15 .header');
        console.log(arr);
        arr.forEach(elem => {
            if(elem.textContent.search(text) == 0) {
                header.classList.add('activ');
                elem.parentElement.classList.add('activ');
            } else {
                elem.parentElement.classList.remove('activ');
            }  
        });
    }
}   
task15();

//16. Поиск исторических события на JavaScript
function task16() {
    const input = document.querySelector('.task16 #input');
    const table = document.querySelector('.task16 #table');
    const dataStory = {
        2010: [
            ['27.01.2010', 'iPhone 4 и iPad', 'Первая версия iPad была представлена Стивом Джобсом.'],
            ['06.10.2010', 'Instagram ', 'Выпущено приложение Instagram. Уже к декабрю количество зарегистрировавшихся пользователей перевалило за 1 млн.'],
            ['01.11.2010', 'Хит Adele', 'выпущен сингл Adele Rolling in the Deep']
        ],
        2011: [
            ['17.04.2011', 'Игра престолов', 'Мировая премьера сериала состоялась 17 апреля 2011 года. '],
            ['02.05.2011', 'Убийство Усама бен Ладена', 'Лидера «Аль-Каиды» выслеживали более 10 лет американские спецслужбы. Сенсационную новость в экстренном эфире объявил президент США Барак Обама']
        ],
        2012: [
            ['15.07.2012', 'Gangnam Style', 'Клип PSY 2012 года стал одним из самых просматриваемых в истории YouTube. Благодаря песне PSY, южнокорейский музыкальный жанр K-Pop начал пользоваться большой популярностью.'],
            ['11.09.2012', 'Конец света', 'Согласно календарю майя, в 2012 году должен был наступить конец света. Но выпущен фильм-катастрофа «2012»  в котором, собственно, и показали конец света.']
        ]
    };

    input.addEventListener('keypress', function showEvents(event) {
        table.textContent = '';
        const year = this;
        if (event.code === 'Enter') {
            checkValue(year, dataStory, table);
        }
    });

    function checkValue(input, obj, parent) {
        for(let key in obj) {
            if(key == input.value) {
                const arrStory = obj[key];
                createTable(arrStory.length, arrStory, parent);
            }
        }
    }

    function createTable(length, arr, parent) {
        for(let i = 0; i < length; i++) {
            const tr = document.createElement('tr');

            for(let k = 0; k < 3; k++) {
                const td = document.createElement('td');
                td.textContent = arr[i][k];
                tr.appendChild(td); 
            }
            parent.appendChild(tr);
        }
    }
}
task16();

//17. Гороскоп на JavaScript
function task17() {
    const horoscope = [
        'Благоприятный день для дрессуры домашней живности - клопов, муравьёв, мух, паучков', 
        'Не лучший день для покупки лошади. Да и крокодила сегодня лучше не покупать.', 
        'Сегодня не бросайтесь огрызками в проезжающие полицейские машины.', 
        'Хороший день для покупки билета моментальной лотереи! Правда, для выигрыша не очень...', 
        'Неблагоприятный день для борьбы с тараканами, особенно с теми, что в голове.', 
        'Cегодня поменьше общайтесь - есть опасность заразиться коклюшем, энурезом и желанием стать депутатом.', 
        'Не ковыряйте в зубах металлическими предметами, особенно если это зубы не ваши.', 
        'Благоприятный день, чтобы сойти с ума. Но лучше не надо.', 
        'Ни в коем случае не начинайте сегодня политическую карьеру! Да и вообще не нужно...', 
        'Сегодня не крутите хвосты незнакомым собакам.', 
        'Избегайте ссор, драк, никого не бейте по голове батоном или шваброй.', 
        'Для тех, кто за рулем или едет пассажиром: сегодня избегайте поворотов налево!', 
        'Cегодня опасайтесь вампиров! Выходите из дома с осиновым колом.', 
        'Cегодня опасайтесь вампиров! Выходите из дома с осиновым колом.', 
        'Сегодня следует воздержаться от покупки верблюдов, лысых кошек, футбольных клубов.'
    ];
    const picture = ['../../../img/calc/0cat_aquarius.png', '../../../img/calc/1cat_pisces.png', '../../../img/calc/2cat_aries (1).png', '../../../img/calc/3cat_taurus (1).png', '../../../img/calc/4cat_gemini.png', '../../../img/calc/5cat_cancer.png', '../../../img/calc/6cat_leo.png', '../../../img/calc/7cat_virgo.png', '../../../img/calc/8cat_libra.png', '../../../img/calc/9cat_scorpio.png', '../../../img/calc/10cat_sagittarius.png', '../../../img/calc/11cat_capricorn.png'];
    const zodiac = ['Водолей', 'Рыбы', 'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог'];
    const dataZodiac =[ 
        ['01/21', '02/19'],
        ['20/02', '03/20'],
        ['03/21', '04/20'],
        ['04/21', '05/21'],
        ['05/22', '06/21'],
        ['06/22', '07/22'],
        ['07/23', '08/23'],
        ['08/24', '09/22'],
        ['09/23', '10/22'],
        ['10/23', '11/22'],
        ['11/23', '12/21'],
        ['12/22', '01/20'], 
    ]; 
    const wrapper = document.querySelector('.task17 .wrapper');
    const inputDay = document.querySelector('.task17 input');
    const button = document.querySelector('.task17 button');
    const radio = document.querySelectorAll('.task17 [name="dayOfWeek"]');

    button.addEventListener('click', showHoroscope);
    choiceRadioButton(radio);

    function showHoroscope(){
        wrapper.textContent = '';
        createElemTextAndPicture(wrapper, dataZodiac, zodiac);
        findOutPrediction(horoscope);
    }   

    function createElemTextAndPicture(parent, arrMonth, arrZodiac) {
        const textZodiac = document.createElement('div');
        textZodiac.classList.add('text_zodiac');
        parent.appendChild(textZodiac);

        const catPicture = document.createElement('img');
        parent.appendChild(catPicture);

        findOutYouZodiac(arrMonth, arrZodiac, textZodiac, catPicture);
    }

    function findOutYouZodiac(arrMonth, arrZodiac, text, img) {
        const data = inputDay.value.split('-').slice(1, 3).join('/');
        for (let i = 0; i < arrMonth.length; i++) {
            const isWhichMonth = data >= arrMonth[i][0] && data <= arrMonth[i][1];
            if (isWhichMonth) {
                text.innerHTML = `
                    <span>${arrZodiac[i]}</span>
                `; 
                img.src = `${picture[i]}`;
                break;
            }
        }   
    }

    function findOutPrediction(arr) {
        const textHoroscope = document.createElement('div');
        const num = Math.round(Math.random() * arr.length);

        textHoroscope.classList.add('text_horoscope');
        textHoroscope.textContent = arr[num];

        wrapper.appendChild(textHoroscope);
    }

    function choiceRadioButton(items) {
        items.forEach(elem => {
            elem.addEventListener('change', function() {
                showHoroscope();
            });
        });
    }
    
}
task17();

