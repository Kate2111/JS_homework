
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
const button6 = document.querySelector('#but');
const elem6 = document.querySelector('#elem6');
button6.addEventListener('click', function(){
    elem6.textContent = elem6.textContent + '!';
});