
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