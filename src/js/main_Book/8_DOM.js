//1.    Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.
function task1() {
    const p1 = document.querySelector('.task8_1 #elem1');
    const p2 = document.querySelector('.task8_1 #elem2');
    const p3 = document.querySelector('.task8_1 #elem3');
    console.log(p1, p2, p3);
}
task1();

//2.    Давайте получим ссылку на инпут, находящийся внутри блока #parent:
function task2() {
    let elem = document.querySelector('.task8_2 #parent input'); 
    console.log(elem);
}
task2();

//3. Получите ссылку на первый абзац из дива с id, равным block.
function task3() {
    const block = document.querySelector('.task8_3 #block p');
    console.log(block);
}
task3();

//4.    Получите ссылку на первый абзац из дива с классом block.
function task4() {
    const block = document.querySelector('.task8_4 .block p');
    console.log(block);
}
task4();

//5.    Получите ссылку на первый абзац с классом www.
function task5() {
    const www = document.querySelector('.task8_5 .www');
    console.log(www);
}
task5();

//6.    Cделаем кнопку, по нажатию на которую на экран алертом выведется какой-то текст
function task6() {
    const button = document.querySelector('.task8_6 #button');
    button.addEventListener('click', function() {
    alert('Привет');
    });
}
task6();

//7.    Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.
function task7() {
    const button1 = document.querySelector('.task8_7 #button1');
    const button2 = document.querySelector('.task8_7 #button2');
    const button3 = document.querySelector('.task8_7 #button3');
    button1.addEventListener('click', function() {
        alert('1');
    });
    button2.addEventListener('click', function() {
        alert('2');
    });
    button3.addEventListener('click', function() {
        alert('3');
    });
}
task7();

//8.    Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
function task8() {
    const button4 = document.querySelector('.task8_8 #button1');
    const button5 = document.querySelector('.task8_8 #button2');
    
    function func1() {
        console.log(1);
    }
    
    function func2() {
        console.log(2);
    }

    button4.addEventListener('click', func1);
    button5.addEventListener('click', func2);
}
task8();

//9.    Привяжите эту функцию ко всем 5-ти абзацам.
function task9() {
    const elem1 = document.querySelector('.task8_9 #elem1'),
      elem2 = document.querySelector('.task8_9 #elem2'),
      elem3 = document.querySelector('.task8_9 #elem3'),
      elem4 = document.querySelector('.task8_9 #elem4'),
      elem5 = document.querySelector('.task8_9 #elem5');

    function func() {
        console.log('message');
    }

    elem1.addEventListener('click', func);
    elem2.addEventListener('click', func);
    elem3.addEventListener('click', func);
    elem4.addEventListener('click', func);
    elem5.addEventListener('click', func);
}
task9();


//10.   Привяжите все эти функции к нашему абзацу.
function task10() {
    const elem6 = document.querySelector('.task8_10 #elem6');
    function func1() {
        console.log('1');
    }

    function func2() {
        console.log('2');
    }

    function func3() {
        console.log('3');
    }
    elem6.addEventListener('click', func1);
    elem6.addEventListener('click', func2);
    elem6.addEventListener('click', func3);
}
task10();

//11.   Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
function task11() {
    const elem = document.querySelector('.task8_11 .elem');
    function func4() {
        alert('Ура! Сработало!');
    }
    elem.addEventListener('dblclick', func4);
}
task11();


//12.   Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
function task12() {
    const button = document.querySelector('.task8_12 #but');
    function func5() {
        alert('Hi');
    }
    button.addEventListener('mouseover', func5);
}
task12();

//13.   Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.
function task13() {
    const button = document.querySelector('.task8_13 #but');
    function func6() {
        console.log('Hi');
    }
    function func7() {
        console.log('bye');
    }
    button.addEventListener('mouseover', func6);
    button.addEventListener('mouseout', func7);
}
task13();

//14.   Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
function task14() {
    const button = document.querySelector('.task8_14 #but');
    const elem = document.querySelector('.task8_14 #elem');
    button.addEventListener('click', function() {
        console.log(elem.textContent);
    });
}
task14();


//15.   Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
function task15() {
    //Урок 247 задача2
}
task15();
/* button6.addEventListener('click', function() {
    elem6.textContent = 'текст';
}); */

//16.   Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
/* const button6 = document.querySelector('#but');
const elem6 = document.querySelector('#elem6');
const elem7 = document.querySelector('#elem7');
button6.addEventListener('click', function() {
    const sum = +elem6.textContent + (+elem7.textContent);
    console.log(sum);
}); 
 */

//17.   Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
/* const button6 = document.querySelector('#but');
const elem6 = document.querySelector('#elem6');
const elem7 = document.querySelector('#elem7');
const elem8 = document.querySelector('#elem8');
const sum = document.querySelector('.sum');
button6.addEventListener('click', function(){
    const sum1 = +elem6.textContent + (+elem7.textContent) + (+elem8.textContent);
    sum.textContent = sum1;
});
 */

//18.   Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
/* const button6 = document.querySelector('#but');
const elem6 = document.querySelector('#elem6');
button6.addEventListener('click', function(){
    elem6.textContent = +elem6.textContent + 1;
}); */

//19.   Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
/* const button6 = document.querySelector('#but');
const elem6 = document.querySelector('#elem6');
button6.addEventListener('click', function(){
    elem6.textContent = elem6.textContent + '!';
}); */

//20.   Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
/* const button6 = document.querySelector('#but');
const elem6 = document.querySelector('#elem6');
button6.addEventListener('click', function() {
    console.log(elem6.innerHTML);
}); */

//21.   Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.
/* const button6 = document.querySelector('#but');
const elem6 = document.querySelector('#elem6');
button6.addEventListener('click', function() {
    elem6.innerHTML = '<b>жирный</b>';
}); */

//22.   Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
/* const sum = document.querySelector('.sum');
const elem7 = document.querySelector('#elem');
elem7.addEventListener('click', function() {
    sum.textContent = elem7.type;
}); */

//23.   Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.
/* const elem7 = document.querySelector('#elem');
const button6 = document.querySelector('#but');
button6.addEventListener('click', function() {
    elem7.type = 'submit';
}); */

//24.   Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
/* const button6 = document.querySelector('#but');
const elem8 = document.querySelector('#elem8');
const link = document.querySelector('.link');
button6.addEventListener('click', function() {
    elem8.textContent = link.href;
}); */

//25.   Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
/* const button6 = document.querySelector('#but');
const link = document.querySelector('.link');
button6.addEventListener('click', function() {
    link.textContent = link.textContent + '(' + link.href + ')';
}); */

//26.   Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
/* const button6 = document.querySelector('#but');
const img = document.querySelector('.img');
const elem9 = document.querySelector('#elem9');
button6.addEventListener('click', function() {
    elem9.textContent = img.src;
}); */

//27.   Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
/* const button6 = document.querySelector('#but');
const img = document.querySelector('.img');
button6.addEventListener('click', function() {
    img.width = '300';
}); */

//28.   Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
/* const button6 = document.querySelector('#but');
const img = document.querySelector('.img');
button6.addEventListener('click', function() {
    img.width = img.width * 2;
}); */

//29.   Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.
/* const button7 = document.querySelector('#but1');
const button8 = document.querySelector('#but2');
const img = document.querySelector('.img');
button7.addEventListener('click', function() {
    img.src = 'img/Beran.jpg';
});
button8.addEventListener('click', function() {
    img.src = 'img/hroznys.jpg';
}); */

//30.   Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
/* const button9 = document.querySelector('#but3');
const elem10 = document.querySelector('#elem10');
button9.addEventListener('click', function() {
    elem10.value = 'введите email';
}); */

//31.   Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
/* const button9 = document.querySelector('#but3');
const elem10 = document.querySelector('#elem10');
const elem11 = document.querySelector('#elem11');
button9.addEventListener('click', function() {
    elem11.textContent = elem10.value;
    elem10.value = ' ';
}); */

//32.   Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
/* const button9 = document.querySelector('#but3');
const elem10 = document.querySelector('#elem10');
const elem12 = document.querySelector('#elem12');
button9.addEventListener('click', function() {
    elem12.value = Math.pow(elem10.value, 2);
}); */

//33.   Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов. НЕ РЕШИЛА
/* const button9 = document.querySelector('#but3');
const elem10 = document.querySelector('#elem10');
const elem12 = document.querySelector('#elem12');
button9.addEventListener('click', function() {
    elem12.value = elem10.value;
    elem10.value = elem12.value;
}); */

//34.   Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац. НЕ РЕШИЛА
/* const button9 = document.querySelector('#but3');
const elem11 = document.querySelector('#elem11');
const elem12 = document.querySelectorAll('#elem');

function sum5 (elem) {
    let sum = 0; 
    let arr = [];
    for(i = 0; i <= elem.lengt; i++) {
        arr.push(elem[i].value);
    }
    console.log(arr);
}

button9.addEventListener('click', sum5);
 */

//35.   Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
/* const elem12 = document.querySelector('#elem12');
elem12.addEventListener('focus', function() {
    elem12.value = '1';
});
elem12.addEventListener('blur', function() {
    elem12.value = '2';
}); */

//36.   Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
/* const elem12 = document.querySelector('#elem12');
elem12.addEventListener('blur', function() {
    elem12.value = Math.pow(elem12.value, 2);
}); */

//37.   Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
/* const elem12 = document.querySelector('#elem12');
elem12.addEventListener('focus', function() {
    elem12.value = null;
}); */

//38.   Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
/* const button9 = document.querySelector('#but3');
const content = document.querySelector('#elem');
button9.addEventListener('click', function() {
    console.log(content.className);
}); */

//39.   Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
/* const button9 = document.querySelector('#but3');
const div = document.querySelector('#elem13');
button9.addEventListener('click', function() {
    div.className = 'elem';
}); */

//40.   Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
/* const button9 = document.querySelector('#but3');
const elem14 = document.querySelector('#elem14');
button9.addEventListener('click', function() {
    console.log(elem14.className.split(' '));
}); */

//41.   Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
/* const elem15 = document.querySelector('#elem15');
elem15.addEventListener('focus', function() {
    this.value = '1';
});
elem15.addEventListener('blur', function() {
    this.value = '2';
}); */

//42.   Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
/* const elem16 = document.querySelector('#elem16');
const elem17 = document.querySelector('#elem17');
const elem18 = document.querySelector('#elem18');
const elem19 = document.querySelector('#elem19');
const elem20 = document.querySelector('#elem20');
function func() {
    this.textContent = this.textContent + '!';
}

elem16.addEventListener('click', func);
elem17.addEventListener('click', func);
elem18.addEventListener('click', func);
elem19.addEventListener('click', func);
elem20.addEventListener('click', func); */

//43.   Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
/* const elem21 = document.querySelector('#elem21');
const elem22 = document.querySelector('#elem22');
const elem23 = document.querySelector('#elem23');
function func() {
    this.value = Math.pow(this.value, 2);
}
elem21.addEventListener('blur', func);
elem22.addEventListener('blur', func);
elem23.addEventListener('blur', func);
 */

//44.   Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение 'text'.
/* const elem17 = document.querySelectorAll('#elem17');
const button9 = document.querySelector('#but3');
button9.addEventListener('click', function() {
    for(let elem of elem17) {
        elem.textContent = 'text';
    }
}); */

//45.   Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
/* const elem17 = document.querySelectorAll('#elem17');
const button9 = document.querySelector('#but3');
button9.addEventListener('click', function() {
    for(i = 0; i <= elem17.length; i++) {
        elem17[i].textContent = elem17[i].textContent + i;
    }
}); */

//46.   Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
/* const button9 = document.querySelector('#but3');
const elem24 = document.querySelectorAll('.elem24');
const elem25 = document.querySelector('#elem25');

console.log(typeof(+elem24[0].value));

console.log(typeof(+elem24.value));
button9.addEventListener('click', function() {
    let sum = 0;
    for(i = 0; i <= 2; i++) {
        sum += Number(elem24[i].value);
    }
    elem25.textContent = sum;

}); */

//47.   Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
/* const elem24 = document.querySelectorAll('.elem24');
for(elem of elem24) {
    elem.addEventListener('blur', func);
}
function func () {
    this.value = Number(this.value) + 1;
} */

//48.   Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
/* const elem25 = document.querySelectorAll('#elem25');

for (let elem of elem25) {
	elem.addEventListener('click', func);
}
function func() {
    this.textContent = Math.pow(+this.textContent, 2);
} */

//49.   Сделайте функцию-обработчик анонимной.
/* let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', function() {
        this.textContent++;
    });
} */


//50.   Дана ссылка и кпнока. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
/* const button10 = document.querySelector('#but4');
const link = document.querySelector('a');
button10.addEventListener('click', func);
function func() {
    link.textContent = link.textContent + '(' + link.href + ')';
    this.removeEventListener('click', func);
}  */

//51.Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
/* const button10 = document.querySelector('#but5');
button10.addEventListener('click', func);
function func() {
    this.textContent++;
    if(this.textContent == 10) {
        this.removeEventListener('click', func)
    }
}  */

//52.Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
/* const elems = document.querySelectorAll('p');
for(let elem of elems) {
    elem.addEventListener('click', func);
}
function func(){
    this.textContent = this.textContent + '!';
    this.removeEventListener('click', func)
} */

//53.Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.
/* const li = document.querySelectorAll('li');
for(let elem of li) {
    elem.addEventListener('click', function func() {
        this.textContent++;
    });
} */

//54.Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только по первому нажатию на нее.
/* const li = document.querySelectorAll('li');
for(let elem of li) {
    elem.addEventListener('click', function func() {
        this.textContent++;
        this.removeEventListener('click', func);
    });
} */

//55.Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10.
/* const li = document.querySelectorAll('li');
for(let elem of li) {
    elem.addEventListener('click', function func() {
        this.textContent++;
        if(this.textContent == 10) {
            this.removeEventListener('click', func);
        } 
    });
} */

//56.Получите значение его атрибута value.
/* const elem26 = document.querySelector('#elem');
const value = elem26.getAttribute('value');
console.log(value); */

//57.Получите значение его атрибута class.
/* const elem27 = document.querySelector('#elem');
const eee = elem27.getAttribute('class');
console.log(eee); */

//58.Дан элемент:<input id="elem"> Установите его атрибут value в значение 'text'.
/* const elem27 = document.querySelector('#elem');
elem27.setAttribute('value', 'text') */

//59.Дан элемент:<input id="elem"> Установите ему атрибут class в значение 'valid'.
/* const elem27 = document.querySelector('#elem');
elem27.setAttribute('class', 'valid'); */

//60. Дан элемент:<input id="elem" value="text"> Проверьте наличие у него атрибута value.
/* const elem27 = document.querySelector('#elem');
console.log(elem27.hasAttribute('value')); */

//Свойство classList содержит псевдомассив CSS классов элемента, а также позволяет добавлять и удалять классы элемента, проверять наличие определенного класса среди классов элемента.

//61. Дан элемент:<p id="elem" class="www ggg zzz"></p>. Узнайте количество его классов.
/* const elem27 = document.querySelector('#elem');
const classNames = elem27.classList;
console.log(classNames.length); */

//62.Переберите в цикле его классы.
/* const elem27 = document.querySelector('#elem');
const classNames = elem27.classList;
for(let elem of classNames) {
    document.write(elem + '<br>');
} */

//63. Добавьте ему класс xxx.
/* const elem27 = document.querySelector('#elem');
const classNames = elem27.classList.add('xxx'); */

//64. Удалите у него класс www и класс zzz.
/* const elem27 = document.querySelector('#elem');
const classNames = elem27.classList.remove('www', 'zzz'); */

//65.Проверьте наличие у него класса ggg.
/* const elem27 = document.querySelector('#elem');
const classNames = elem27.classList.contains('ggg');
console.log(classNames); */

//66. урок 263. Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
/* const elem27 = document.querySelector('#elem');
elem27.addEventListener('click', func);
function func() {
    elem27.classList.toggle('www');
} */

//67.Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
/* const elem27 = document.querySelector('#elem');
const div = document.querySelector('div');
elem27.addEventListener('click', function () {
    div.style.width = '100px';
    div.style.height = '60px';
    div.style.border = 'solid';
}); */

//68.Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.
/* const elem27 = document.querySelector('#elem');
const div = document.querySelector('div');
elem27.addEventListener('click', function () {
    div.style.fontSize = '20px';
    div.style.borderTop = 'solid 1px';
    div.style.backgroundColor = 'green';
}); */

//68.Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.
/* const elem27 = document.querySelector('#elem');
const elem28 = document.querySelectorAll('li');
for(let elem of elem28) {
    elem27.addEventListener('click', function () {
        elem.style.cssFloat = 'left';
    })
} */

//69. Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
/* const elem29 = document.querySelector('p');
const line = document.querySelector('.but1');
const bold = document.querySelector('.but2');
const color = document.querySelector('.but3');

line.addEventListener('click', function func() {
    elem29.classList.toggle('line-through');
});

bold.addEventListener('click', function func() {
    elem29.classList.toggle('bold');
});

color.addEventListener('click', function func() {
    elem29.classList.toggle('color');
}); */

//70. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
/* 
const parent = document.querySelector('#elem');
const text = parent.firstElementChild.classList.add('color');
 */

//71. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
/* 
const parent = document.querySelector('#elem');
const text = parent.lastElementChild.classList.add('color');
 */
//Свойство children хранит в себе псевдомассив дочерних элементов. Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока.
//72. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
/* 
const parent = document.querySelector('#elem');
const text = parent.children;
for(let elem of text) {
    elem.textContent = elem.textContent + ' !';
} 
*/

//Свойство parentElement содержит родительский элемент.
//73. Найдите его родителя и задайте ему красную границу.
/* 
const elem30 = document.querySelector('#elem');
const parent = elem30.parentElement;
parent.style.border = 'solid 1px red'; 
*/

//Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск.
//74. Найдите ближайшего родителя этого элемента, являющегося тегом div.
/* 
const elem30 = document.querySelector('#elem');
const parent = elem30.closest('div');
console.log(parent); 
*/

//75. Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
/* 
const elem30 = document.querySelector('#elem');
const parent = elem30.closest('.www');
console.log(parent.id); 
*/

//Свойство previousElementSibling содержит предыдущий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.
//Свойство nextElementSibling содержит следующий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.

//76. Найдите его соседа сверху и добавьте ему в конец текст '!'.
/* 
const elem30 = document.querySelector('#elem');
const sibling = elem30.previousElementSibling;
sibling.textContent = sibling.textContent + '  - это сосед сверху' 
*/

//77. Найдите его соседа снизу и добавьте ему в конец текст '!'.
/* 
const elem30 = document.querySelector('#elem');
const sibling = elem30.nextElementSibling;
sibling.textContent = sibling.textContent + ' - это сосед снизу' 
*/

//78. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
/* 
const elem30 = document.querySelector('#elem');
const sibling = elem30.nextElementSibling.nextElementSibling;
sibling.textContent = sibling.textContent + ' - это сосед соседа' 
*/

//79. Поменяйте местами текст его соседа сверху и текст его соседа снизу. НЕ РЕШИЛА
/* 
const elem30 = document.querySelector('#elem');
const previous = elem30.previousElementSibling;
const next = elem30.nextElementSibling;
previous.textContent = next.textContent;
next.textContent = previous.textContent; 
*/

//80. Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
/* 
const elem30 = document.getElementById('elem');
elem30.textContent = 'Hello'; 
*/

//81. Получите все теги li по имени тега и сделайте их текст красного цвета.
/* 
const elem30 = document.getElementsByTagName('li')
for(let elem of elem30) {
    elem.classList.add('color');
} 
*/

//82. Получите эти элементы по имени класса и сделайте их текст красного цвета.
/* 
const elem30 = document.getElementsByClassName('www');

for (let elem of elem30) {
	elem.style.color = 'red';
} 
*/

//83. Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
/*
const parent = document.querySelector('#parent');
const elems1 = parent.querySelectorAll('.www');
const elems2 = parent.querySelectorAll('.ggg');
for (let elem of elems1) {
	console.log(elem.textContent);
}
console.log(elems1, elems2); 
*/

//84. Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
/* 
const elem30 = document.querySelector('div');
elem30.addEventListener('click', function() {
    elem30.textContent = elem30.textContent + ' ' + elem30.dataset.text;
}); 
*/

//85. Даны дивы, содержащие в атрибуте data-num свой порядковый номер. Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
/* 
const divs = document.querySelectorAll('div');
for(let div of divs) {
    div.addEventListener('click', function func() {
        div.textContent = div.textContent + div.dataset.num;
    });
} 
*/

//86. Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
/* 
const butClick = document.querySelector('#click');
const butTotal = document.querySelector('#total');
const total = document.querySelector('div');
let count = 0;
butClick.addEventListener('click', function func() {
    total.dataset.num = count++;
    console.log(total.dataset.num);
})
butTotal.addEventListener('click', function func() {
    total.textContent = total.textContent + ' ' + total.dataset.num;
}) 
*/

//87. В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
/* 
const input = document.querySelector('#elem');
input.addEventListener('blur', function func() {
    console.log(typeof(input.value));
    if(input.value.length != input.dataset.length) {
        input.value = 'введите 5 символов';
    }
}) 
*/

//88. В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
/* 
const input = document.querySelector('#elem');
input.addEventListener('blur', function func() {
    if(input.value.length < input.dataset.min || input.value.length > input.dataset.max) {
        input.value = 'мин 5, мах 10 символов';
    }
}) 
*/


//89. Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
/* 
const apple = document.querySelector('#elem');
apple.addEventListener('click', function() {
    let cost = apple.dataset.productPrice * apple.dataset.productAmount;
    apple.textContent = apple.textContent + ' стоимость ' + cost + ' руб.';
}) 
*/

//90. Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.
/* 
const elems = document.querySelectorAll('p');
for(i = 0; i < elems.length; i++) {
    elems[i].dataset.num = i + 1; 
}  

//91. К пользовательским атрибутам можно также обращаться с помощью методов типа getAttribute, в этом случае следует писать полное название атрибута:
/* 
let elem = document.querySelector('#elem');
console.log(elem.getAttribute('data-num'));  
console.log(elem.getAttribute('data-my-num'));
 */

//92. Напишите код, который покажет разницу между lastChild и lastElementChild.
/* 
const elem = document.querySelector('#elem');
console.log(elem.lastChild);        // Заголовок
console.log(elem.lastElementChild); //<ul>...</ul>
 */

//93. Напишите код, который покажет разницу между nextSibling и nextElementSibling.
//const elem = document.querySelector('#elem');
/* 
console.log(elem.nextSibling);        //?
console.log(elem.nextElementSibling); // <nav>меню</nav>
 */

//94.  Напишите код, который покажет разницу между previousSibling и previousElementSibling.

function task94() {
    const elem = document.querySelector('.task94 #elem');

    console.log(elem.previousSibling);        //?
    console.log(elem.previousElementSibling); //<h3>8.92</h3>
}
task94();

//95. Переберите циклом все узлы этого дива и выведите их в консоль.

function task95() {
    const child = document.querySelector('.task95 #elem').childNodes;
    for(let node of child) {
        console.log(node);

    }
}
task95();

//96. Переберите циклом все узлы этого дива и выведите в консоль их названия.

function task96() {
    const child = document.querySelector('.task96 #elem').childNodes;
    for(let node of child) {
        console.log(node.nodeName); // #text B #comment #text B #comment
    }
}
task96();

//97. Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.

function task97() {
    const child = document.querySelector('.task97 #elem').childNodes;
    for(let node of child) {
        if(node.nodeType == 1 || node.nodeType == 3) {
            console.log(node);
        }
    }
}
task97();

//98. Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.

function task98() {
    const child = document.querySelector('.task98 #elem').childNodes;
    for(let node of child) {
        console.log(node.textContent);
    }
}
task98();

//99. Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.

function task99() {
    const child = document.querySelector('.task99 #elem').childNodes;
    for(let node of child) {
        if(node.nodeType == 3 || node.nodeType == 8) {
            console.log(node.nodeValue);
        }
    }
}
task99();

//100. Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.

function task100() {
    const child = document.querySelector('.task100 #elem').childNodes;
    for(let node of child) {
        if(node.nodeType == 1 || node.nodeType == 3) {
            console.log(node.textContent);
        }
    }
}
task100();

//101. Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.

function task101() {
    const child = document.querySelector('.task101 #elem').childNodes;
    for(let node of child) {
        node.textContent  = node.nodeName + ' - тип № ' + node.nodeType;
    }
}
task101();

//102. Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.

function task102() {
    const elems = document.querySelectorAll('li');
    const res = document.querySelector('.task102 p');
    const but = document.querySelector('.task102 button');
    let sumYear = 0;
    let years = [];

    for(let elem of elems) {
        let sum = 0;
        let arr = elem.textContent.split('');  //['2', '0', '0', '0']
        for(let i = 0; i < arr.length; i++) {
            sum += +arr[i];    
        } 
        if( sum == 6) {
            years.push(elem.textContent);
        }  
    }
    for(let year of years) {
        sumYear += +year;
    }

    but.addEventListener('click', function() {
        res.textContent += sumYear;
    }); 
    console.log(years); //года, сумма цифр которых равна 6
    console.log(sumYear); //сумма полученных годов 
}

task102();

//103. Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

function task103 () {
    const inp = document.querySelector('.task103 input');
    const res = document.querySelector('.task103 p');

    inp.addEventListener('blur', function() {
        res.textContent = res.textContent + ' ' + inp.value;
    }); 
}

task103 ();

//104. Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
function task104() {
    const inputs = document.querySelectorAll('.task104 input');
    const res = document.querySelector('.task104 p');
    const but = document.querySelector('.task104 button');
    but.addEventListener('click', function() {
        let sum = 0;
        for(let input of inputs) {
            sum += +input.value;
        }
        res.textContent = res.textContent + ' ' + sum;
    });
}

task104 ();

//105. Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

function task105() {
    const input = document.querySelector('.task105 input');
    const res = document.querySelector('.task105 p');

    input.addEventListener('blur', function () {
        let sum = 0;
        let nums = input.value.split('');
        for(let num of nums) {
            sum += +num;
        }
        res.textContent = res.textContent + ' ' + sum;
    });
    
}

task105();

//106. Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

function task106() {
    const input = document.querySelector('.task106 input');
    const res = document.querySelector('.task106 .res');

    input.addEventListener('blur', function() {
        let nums = input.value.split(',');
        let sum = 0;
        for(let num of nums) {
            sum += +num;
        }
        let sumMedium = Math.round(sum / nums.length);
        console.log(sumMedium);
        res.textContent = sumMedium;
    });
    input.addEventListener('click', function() {
        input.value = '';
        res.textContent = '';
    });
}

task106();

//107. Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

function task107() {
    const fullName = document.querySelector('.task107 #main');
    const name = document.querySelectorAll('.task107 #name');
    const arr = ['Ваша фамилия', 'Ваше имя', 'Ваше отчество'];

    function standartName () {
        for(let i = 0; i < arr.length; i++) {
            for(let k = 0; k < name.length; k++) {
                name[k].value = arr[k];
            }
        } 
    }

    fullName.addEventListener('click', function() {
        fullName.value = '';
        if(name) {
            standartName ();
        }
    });

    fullName.addEventListener('blur', function func() {
        let nameArr = fullName.value.split(' ');
        if(nameArr.length > 2) {
            for(let i = 0; i < nameArr.length; i++) {
                nameArr[i] = nameArr[i].slice(0, 1).toUpperCase() + nameArr[i].slice(1);
                for(let k = 0; k < name.length; k++) {
                    name[k].value = nameArr[k];
                }
            } 
            fullName.value = nameArr.join(' ');
        } else {
            fullName.value = 'Введите ФИО';
            standartName ();
        }
    });

}
task107();

//108. Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

function task108() {
    const input = document.querySelector('.task108 input');
    const res = document.querySelector('.task108 .res');
    input.addEventListener('blur', function() {
        const inputArr = input.value.split(' ');
        console.log(inputArr.length);
        if(inputArr.length == 1) {
            res.textContent = `В этом тексте ${inputArr.length} слово`;
        } if (inputArr.length >= 2 && inputArr.length <= 4) {
            res.textContent = `В этом тексте ${inputArr.length} слова`;
        } if (inputArr.length >= 5) {
            res.textContent = `В этом тексте ${inputArr.length} слов`;
        }
        
    });
}

task108();

//109. Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

function task109() {
    const input = document.querySelector('.task109 input');
    input.addEventListener('blur', function() {
        input.value = input.value.split('.').join('-');
    });
}
task109();

//110. Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
function task110() {
    const input = document.querySelector('.task110 input');
    const btn = document.querySelector('.task110 button');
    const res = document.querySelector('.task110 .res');
    btn.addEventListener('click', function() {
        const num1 = input.value.split('').join('');
        const num2 = input.value.split('').reverse().join('');
        if(num1 == num2) {
            res.textContent += 'верно';
        } else {
            res.textContent += 'попробуйте другое слово';
        }
    });
    input.addEventListener('click', function () {
        input.value = '';
        res.textContent = 'Результат: ';
    });
}
task110();

//111. Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

function task111() {
    const input = document.querySelector('.task111 input');
    const res = document.querySelector('.task111 .res');
    input.addEventListener('blur', function() {
        const arr = input.value.split('');
        if(arr.includes('3')) {
            res.textContent += 'Число содержит цифру 3';
        } else {
            res.textContent += 'Попробуйте еще';
        }
    });
    input.addEventListener('click', function () {
        input.value = '';
        res.textContent = 'Результат: ';
    });

}
task111();

//112. Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
function task112() {
    const text = document.querySelectorAll('.task112 p');
    const btn = document.querySelector('.task112 button');
    btn.addEventListener('click', function() {
        for(let i=0; i < text.length; i++) {
            console.log();
            text[i].textContent += `порядковый номер - ${i+1}`;
        }
    });
}
task112();

//113. Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
function task113() {
    const links = document.querySelectorAll('.task113 a');
    for(let link of links) {
        link.addEventListener('click', function() {
            this.textContent += ` ссылка на данный урок ( ${this.href} )`;
            this.href = '#';
        });
    }
}
task113();

//114. Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
function task114() {
    const links = document.querySelectorAll('.task114 a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            if(link.href.startsWith('http://')) {
                this.innerHTML += '&rarr;';
                this.href = '#';
            } else {
                this.href = '#';
                console.log('несодержит');
            }  
        });
    });
}
task114();

//115. Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
function task115() {
    const elems = document.querySelectorAll('.task115 p');
    elems.forEach(elem => {
        elem.addEventListener('click', function() {
            elem.textContent = Math.pow(+elem.textContent, 2);
        });
    });
}
task115();

//116. Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
function task116() {
    const input = document.querySelector('.task116 input');
    const nowDay = document.querySelector('.task116 .nowDay');
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    input.addEventListener('blur', function() {
        const arr = input.value.split('.').reverse();  //['12', '10', '2021']
        let newArr = [];
        arr.forEach(elem => newArr.push(+elem)); //[2021, 10, 12]

        function func(year, month, day) {
            let numberDay = new Date(year, month - 1, day).getDay();
            nowDay.textContent = days[numberDay];
        }
        func(...newArr);
    });
    input.addEventListener('click', function() {
        input.value = '';
    });
}
task116();

//117. Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
function task117() {
    let input = document.querySelector('.task117 input');
    const plus = document.querySelector('.task117 .plus');
    const minus = document.querySelector('.task117 .minus');
    const source = document.querySelector('.task117 .source');

    plus.addEventListener('click', function() {
        input.value = +input.value + 1;
    });

    minus.addEventListener('click', function() {
        if(input.value == 0) {
            input.value == 0;
        } else {
            input.value = +input.value - 1;
        }
    });

    source.addEventListener('click', function() {
        input.value = '2';
    });
}
task117();

//118. Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
function task118() {
    const clicks = document.querySelectorAll('.task118 p');
    const input = document.querySelector('.task118 input');
    let counter = 0;

    clicks.forEach(function func(click) {
        click.addEventListener('click', function() {
            counter++;
            input.value = counter;
        });
    });    
}
task118();

//119. На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
function task119 () {
    const texts = document.querySelectorAll('.task119 .text');
    const btn = document.querySelector('.task119 button');
    
    btn.addEventListener('click', function() {
        for(let i = 0; i < texts.length; i++) {
            let textLength = texts[i].textContent.length;
            if(textLength >= 10) {
                texts[i].innerHTML = texts[i].innerHTML.substring(0, 10) + '&#8230;';
            }
        }
    });
}
task119();

//120. Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

function task120() {
    const input = document.querySelector('.task120 input');
    input.addEventListener('blur', function() {
        const num = +input.value;
        if(num >=1 && num <=100) {
            input.style.backgroundColor = 'rgb(53, 220, 20)';
        } else {
            input.style.backgroundColor = 'rgba(244, 29, 29, 0.708)';
        }
    });
}
task120();

//121. Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
function task121() {
    const input = document.querySelector('.task121 input');
    const btn = document.querySelector('.task121 button');
    
    btn.addEventListener('click', function() {
        let result = '';
        const str = 'abcdefghijklmnopqrstuvwxyz1234567890/-_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for(let i = 0; i <= 8; i++) {
            result += str[strRandom(0, str.length - 1)];
        }
        input.value = result;
    });

    function strRandom (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
task121();

//122. Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
function task122() {
    const input = document.querySelector('.task122 input'); //'a,b,c,d'
    const btn = document.querySelector('.task122 button');

    btn.addEventListener('click', function() {
        const arr = input.value.split(''); //[a,b,c,d]
       
        let newArrs = arr.map(i => [Math.random(), i]).sort(); //создаем пары массивов в виде ([0.3673263719784776, 'a']) и тд, после возвращаем массив с сортировкой по первому элементу, которое нам дает метод Math.random()

        let result = newArrs.map(i => i[1]).join(''); //Создаем один массив только из вторых элементов наший парных массивов и преобразуем обратно в строку

        input.value = result;
    });
}
task122();

//123. Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
function task123() {
    const degFarLeft = document.querySelector('.task123 #Fahrenheit-left'); 
    const degCelRight = document.querySelector('.task123 #Celsius-right'); 
    const degFarRight = document.querySelector('.task123 #Fahrenheit-right'); 
    const degCelLeft = document.querySelector('.task123 #Celsius-left'); 
    const btnF = document.querySelector('.task123 .degFar');
    const btnC = document.querySelector('.task123 .degCel');

    btnF.addEventListener('click', function() {
        degCelRight.value = Math.round((+degFarLeft.value - 32) / 1.8);
    });

    btnC.addEventListener('click', function() {
        degFarRight.value = Math.round((+degCelLeft.value * 1.8) + 32);
    });
}
task123();

//124. Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
function task124() {
    const input = document.querySelector('.task124 input');
    let res = document.querySelector('.task124 p');
    const btn = document.querySelector('.task124 button');

    btn.addEventListener('click', function() {
        let factorial = 1;
       for(let i = 1; i <= +input.value; i++) {
        factorial*= i;
       }  
       res.textContent += factorial;
    });
    input.addEventListener('click', function() {
        input.value = '';
        res.textContent = 'Результат: ';
    });
}
task124();

//125. Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
 function task125() {
    const coefA = document.querySelector('.task125 #a');
    const coefB = document.querySelector('.task125 #b');
    const coefC = document.querySelector('.task125 #c');
    const btn = document.querySelector('.task125 button');
    const res = document.querySelector('.task125 p');

    btn.addEventListener('click', function() {
        const a = +coefA.value;
        const b = +coefB.value;
        const c = +coefC.value;
        let root1 = 0;
        let root2 = 0;

        if(a == 0) {
            return res.textContent += 'Попробуйте еще раз. Коэффицент а не может быть равен 0';
        }

        let discr = (b ** 2) - (4 * a * c);
        console.log(discr);

        if(discr < 0) {
            res.textContent += 'У данного уравнения нет корней. Попробйте еще раз';
        } if (discr == 0 ) {
            root1 = Math.round( -b + Math.sqrt(discr)) / (2 * a);
            res.textContent += root1;
        } if( discr > 0) {
            root1 = Math.round( -b + Math.sqrt(discr)) / (2 * a);
            root2 = Math.round( -b - Math.sqrt(discr)) / (2 * a);
            res.textContent += root1 + ', ' + root2;
        }      
    });

    coefA.addEventListener('click', remove);
    coefB.addEventListener('click', remove);
    coefC.addEventListener('click', remove);

    function remove() {
        this.value = '';
        res.textContent = 'Результат: ';
    }
 }
 task125();

//126. Сделайте функцию, которая первым параметром будет принимать CSS селектор, а вторым - текст элемента, и будет устанавливать этому элементу новый текст.
function task126() {
    function changeText(selector, text) {
        const p = document.querySelector(`.task126 ${selector}`);
        const button = document.querySelector('.task126 button');

        button.onclick = () => {p.textContent = text;};
    }
    changeText('p', 'TEXT1');
}
task126();

//127. Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.
function task127() {
    function satAttr (selector, atribute, value) {
        const button = document.querySelector('.task127 button');
        const div = document.querySelector('.task127 div');
        const p = document.querySelector(`.task127 ${selector}`);

        div.textContent = p.getAttribute(`${atribute}`);
        button.onclick = () => {
            p.setAttribute(`${atribute}`,`${value}`);
            div.textContent = p.getAttribute(`${atribute}`);
        };
    }
    satAttr ('p', 'id', 'elem2');
}
task127();

//128. Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
function task128() {
    function appendText (selector, text) {
        const elems = document.querySelectorAll(`.task128 ${selector}`);
        const button = document.querySelector('.task128 button');

        button.onclick = () => {
            elems.forEach(elem => {elem.textContent += text;});
        };
    }

    appendText ('p', ' - это цвет');
}
task128();

//129. Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.
function task129() {
    function forEach(selector, callBack) {
        let elems = document.querySelectorAll(`.task129 ${selector}`);
        
        for (let elem of elems) {
            callBack(elem);
        }
    }

    function appendText(elem) {
        elem.textContent += '!'; 
    }

    forEach('.elem', appendText);
}
task129();

//130. Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.
function task130() {
    function forEach(selector, callBack) {
        const elems = document.querySelectorAll(`.task130 ${selector}`);

        for(let i = 0; i < elems.length; i++) {
            callBack(elems[i], i);
        }
    }

    function callBack(elem, index) {
        elem.textContent += ' - порядковый номер ' + (index + 1);
    }

    forEach('.elem', callBack);
}
task130();

//131. Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
function task131() {
    const item = document.querySelector('.task131 input');
    function setValue (input, text) {
        input.value = text;
    }

    setValue (item, 'New text');
}
task131();

//132. Дан массив и ul. Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом из массива.
function task132() {
    const list = document.querySelector('.task132 ul');
    const birds = ['кукушка', 'сорока', 'дятел', 'сапсан'];

    function appendElem(selector, text) {
        let li = document.createElement('li');
        li.textContent = text;
        selector.appendChild(li);
    }

    function arrBirds () {
        for(let bird of birds) {
            appendElem(list, bird);
        }
    } 

    arrBirds ();
}
task132();

//133. Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

function task133() {
    const items = document.querySelectorAll('.task133 .elem');

    function appendText (elems, text) {
        for(let elem of elems) {
            elem.textContent += text;
        }
    }

    appendText(items, 'это текст');
}
task133();


//134. Сделайте функцию createTable, которая будет будет создавать таблицу заданного размера и добавлять ее в конец заданного элемента.

function task134() {
    const parent = document.querySelector('.task134 div');
    function createTable(rows, cols, parent) {
        let table = document.createElement('table');

        for(let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
                for(let i = 0; i < cols; i++) {
                    let td = document.createElement('td');
                    tr.appendChild(td);
                }
            table.appendChild(tr);
        }

        parent.appendChild(table);
    }

    createTable(3, 4, parent);
}
task134();

//135. Модифицируйте функцию из предыдущей задачи так, чтобы она не добавляла таблицу в какой-то элемент, а просто возвращала ее через return.
function task135() {
    const div = document.querySelector('.task135 #elem');
    
    function createTable(rows, cols) {
       let table = document.createElement('table');

        for(let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
                for(let i = 0; i < cols; i++) {
                    let td = document.createElement('td');
                    tr.appendChild(td);
                }
            table.appendChild(tr);
        }

        return table; 
    }

    //div.appendChild(createTable(2, 4));
    const table = createTable(2, 4);
    table.style.backgroundColor = 'green';
    div.appendChild(table);
}
task135();

//136. Сделайте функцию createTableByArr, которая параметром будет принимать двухмерный массив и строить на его основе таблицу.
function task136() {
    const div = document.querySelector('.task136 #elem');
    let elems = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    function createTable(arr) {
       let table = document.createElement('table');

        for(let subarr of arr) {
            let tr = document.createElement('tr');
                for(let elem of subarr) {
                    let td = document.createElement('td');
                    td.textContent = elem;
                    tr.appendChild(td);
                }
            table.appendChild(tr);
        }

        return table; 
    }

    div.appendChild(createTable(elems));
}
task136();

//137. Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.

;(function (selector1, selector2) {
    const btn = document.querySelector(`.task137 ${selector1}`);
    const elems = document.querySelectorAll(`.task137 ${selector2}`);
    const res = document.querySelector('.task137 p');

    function sum() {
        let sum = 0;
        for(let elem of elems) {
            sum += +elem.value;
        }
        
        res.textContent = `Результат: ${sum}`;
    }

    btn.addEventListener('click', sum);

})('button', 'input');

//138. Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.

;(function() {
    let modul = {};
	modul.str1 = 'переменная модуля';
	modul.str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	modul.func1 = function () {
		alert('функция модуля');
	};
	modul.func2 = function () {
		alert('функция модуля');
	};
	modul.func3 = function () {
		alert('функция модуля');
	};
	modul.func4 = function () {
		alert('функция модуля');
	};
	modul.func5 = function () {
		alert('функция модуля');
	};

    window.modul = modul;
})();

;(function() {
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
	
	//window.module = {func1: func1, func2:func2, func3: func3};
    window.module = {func1, func2, func3}; 
})();