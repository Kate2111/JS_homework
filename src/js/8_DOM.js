
const p1 = document.querySelector('#elem1');
const p2 = document.querySelector('#elem2');
const p3 = document.querySelector('#elem3');
//console.log(p1, p2, p3);

let elem = document.querySelector('#parent input');
//console.log(elem);

//3. Получите ссылку на первый абзац из дива с id, равным block.
const block = document.querySelector('#block p');
//console.log(block);

//4.    Получите ссылку на первый абзац из дива с классом block.
const block1 = document.querySelector('.block p');
//console.log(block);

//5.    Получите ссылку на первый абзац с классом www.
const www = document.querySelector('.www');
//console.log(www);

//6.    Cделаем кнопку, по нажатию на которую на экран алертом выведется какой-то текст
const button = document.querySelector('#button');
/* button.addEventListener('click', function() {
    alert('Привет');
}); */

//7.    Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
/* button1.addEventListener('click', function() {
    alert('1');
});
button2.addEventListener('click', function() {
    alert('2');
});
button3.addEventListener('click', function() {
    alert('3');
}); */

//8.    Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');

function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}

/* button4.addEventListener('click', func1);
button5.addEventListener('click', func2);
 */
//9.    Привяжите эту функцию ко всем 5-ти абзацам.
const elem1 = document.querySelector('#elem1'),
      elem2 = document.querySelector('#elem2'),
      elem3 = document.querySelector('#elem3'),
      elem4 = document.querySelector('#elem4'),
      elem5 = document.querySelector('#elem5');

function func() {
    console.log('message');
}

/* elem1.addEventListener('click', func);
elem2.addEventListener('click', func);
elem3.addEventListener('click', func);
elem4.addEventListener('click', func);
elem5.addEventListener('click', func);
 */
//10.   Привяжите все эти функции к нашему абзацу.
//const elem6 = document.querySelector('#elem6');
function func1() {
	console.log('1');
}

function func2() {
	console.log('2');
}

function func3() {
	console.log('3');
}

/* elem6.addEventListener('click', func1);
elem6.addEventListener('click', func2);
elem6.addEventListener('click', func3); */

//11.   Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
//const elem6 = document.querySelector('#elem6');
function func4() {
	alert('Ура! Сработало!');
}
//elem6.addEventListener('dblclick', func4);

//12.   Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
//const button6 = document.querySelector('#but');

function func5() {
	alert('Hi');
}

//button6.addEventListener('mouseover', func5);

//13.   Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.
//const button6 = document.querySelector('#but');
function func6() {
	console.log('Hi');
}
function func7() {
	console.log('bye');
}
//button6.addEventListener('mouseover', func6);
//button6.addEventListener('mouseout', func7);

//14.   Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
//const button6 = document.querySelector('#but');
//const elem6 = document.querySelector('#elem6');
/* button6.addEventListener('click', function() {
    console.log(elem6.textContent);
}); */

//15.   Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
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

//66.Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
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
/* const parent = document.querySelector('#elem');
const text = parent.firstElementChild.classList.add('color');
 */

//71. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
/* const parent = document.querySelector('#elem');
const text = parent.lastElementChild.classList.add('color'); */

//Свойство children хранит в себе псевдомассив дочерних элементов. Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока.
//72. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
/* const parent = document.querySelector('#elem');
const text = parent.children;
for(let elem of text) {
    elem.textContent = elem.textContent + ' !';
} */

//Свойство parentElement содержит родительский элемент.
//73. Найдите его родителя и задайте ему красную границу.
/* const elem30 = document.querySelector('#elem');
const parent = elem30.parentElement;
parent.style.border = 'solid 1px red'; */

//Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор, при этом сам элемент тоже включается в поиск.
//74. Найдите ближайшего родителя этого элемента, являющегося тегом div.
/* const elem30 = document.querySelector('#elem');
const parent = elem30.closest('div');
console.log(parent); */

//75. Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
/* const elem30 = document.querySelector('#elem');
const parent = elem30.closest('.www');
console.log(parent.id); */

//Свойство previousElementSibling содержит предыдущий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.
//Свойство nextElementSibling содержит следующий элемент, находящийся в этом же родителе. Если такого элемента нет - возвращается null.

//76. Найдите его соседа сверху и добавьте ему в конец текст '!'.
/* const elem30 = document.querySelector('#elem');
const sibling = elem30.previousElementSibling;
sibling.textContent = sibling.textContent + '  - это сосед сверху' */

//77. Найдите его соседа снизу и добавьте ему в конец текст '!'.
/* const elem30 = document.querySelector('#elem');
const sibling = elem30.nextElementSibling;
sibling.textContent = sibling.textContent + ' - это сосед снизу' */

//78. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
/* const elem30 = document.querySelector('#elem');
const sibling = elem30.nextElementSibling.nextElementSibling;
sibling.textContent = sibling.textContent + ' - это сосед соседа' */

//79. Поменяйте местами текст его соседа сверху и текст его соседа снизу. НЕ РЕШИЛА
/* const elem30 = document.querySelector('#elem');
const previous = elem30.previousElementSibling;
const next = elem30.nextElementSibling;
previous.textContent = next.textContent;
next.textContent = previous.textContent; */

//80. Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
/* const elem30 = document.getElementById('elem');
elem30.textContent = 'Hello'; */

//81. Получите все теги li по имени тега и сделайте их текст красного цвета.
/* const elem30 = document.getElementsByTagName('li')
for(let elem of elem30) {
    elem.classList.add('color');
} */

//82. Получите эти элементы по имени класса и сделайте их текст красного цвета.
/* const elem30 = document.getElementsByClassName('www');

for (let elem of elem30) {
	elem.style.color = 'red';
} */

//83. Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
const parent = document.querySelector('#parent');
const elems1 = parent.querySelectorAll('.www');
const elems2 = parent.querySelectorAll('.ggg');
for (let elem of elems1) {
	console.log(elem.textContent);
}
console.log(elems1, elems2);

