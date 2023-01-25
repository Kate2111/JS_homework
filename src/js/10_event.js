//1. Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора

function task1() {
    const elem = document.querySelector('.task10_1 div');

    document.addEventListener('mousemove', function(event) {
        elem.innerHTML = event.clientX + ' : ' + event.clientY;
    });
}
task1();

//2. Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
function task2() {
    const btn = document.querySelector('.task10_2 button');

    btn.addEventListener('click', func);
    btn.addEventListener('dblclick', func);

    function func(event) {
        if(event.type == 'click') {
            btn.style.color = 'rgb(33, 210, 6)';
        } if(event.type == 'dblclick'){
            btn.style.color = 'rgb(243, 18, 18)';
        }
    }
}
task2();

//3. Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.
function task3() {
    const elem = document.querySelector('.task10_3 #elem');

    elem.addEventListener('click', function(event) {
        let newElem = event.target.tagName;
        if(newElem === 'UL') {
            let li = document.createElement('li');
            li.innerHTML = 'text';
            elem.appendChild(li);
        }
        if(newElem === 'LI') {
            event.target.textContent += '!';
        }
    });
}
task3();

//this всегда содержит элемент, к которому было привязано событие, а свойство target - элемент, по которому реально был клик.

//4. Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
function task4() {
    const input = document.querySelector('.task10_4 input');
    
    input.addEventListener('keypress', function(event) {
        input.value = event.key + ' - ' + event.code;
    });
}
task4();

//5. Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
function task5() {
    const input = document.querySelector('.task10_5 input');
    const div = document.querySelector('.task10_5 div');

    input.addEventListener('keypress', function(event) {
        if (event.code === 'Enter') {
            div.textContent = input.value;
            input.value = '';
        }
    });
}
task5();

//С помощью объекта Event можно узнать, были ли нажаты в момент события клавиши Ctrl, Alt и Shift. Это делается с помощью свойств ctrlKey, altKey и shiftKey - они имеют значение true или false в зависимости от того, была ли нажата эта клавиша в момент события или нет.

//6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
function task6() {
    const input = document.querySelector('.task10_6 input');
    input.addEventListener('click', function(e) {
        if(e.altKey) {
            input.style.color = 'rgb(243, 18, 18)';
        }
    });
}
task6();

//7. Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
function task7() {
    const elems = document.querySelectorAll('.task10_7 li');
    
    elems.forEach(elem => {
        elem.addEventListener('click', function(e) {
            if(e.ctrlKey) {
                elem.textContent += 1;
            }
            if(e.shiftKey) {
                elem.textContent += 2;
            }
        });
    });
}
task7();

// метод preventDefault() - Отмена действия по умолчанию производится с помощью объекта Event

//8. Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
function task8() {
    const link = document.querySelector('.task10_8 a');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.textContent += '. Ссылка на него: ' + link.href;
    });
}
task8();

//9. Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
function task9() {
    const inputs = document.querySelectorAll('.task10_9 input');
    const btn    = document.querySelector('.task10_9 a');
    const res    = document.querySelector('.task10_9 div');

    inputs.forEach(input => {
        input.addEventListener('click', () => {
            input.value = '';
        });
    });

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        let sum = 0;
        inputs.forEach(input => {
            sum += +input.value;
        });
        res.textContent += sum;
    });
}
task9();

//10. Самостоятельно напишите код, который будет демонстрировать всплытие событий. Проверьте на нем всплытие различных типов событий.
function task10() {
    const form = document.querySelector('.task10_10 form');
    
    form.addEventListener('click', (e) => {
        alert('target = ' + e.target.tagName + ', this = ' + e.currentTarget.tagName);
    });  
}
task10();

//11. 11 Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.  Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul - ей в конец добавлялась новая li.
function task11() {
    const div = document.querySelector('.task10_11 div');
    const ul = document.querySelector('.task10_11 ul');
    const li = document.querySelector('.task10_11 li');

    div.addEventListener('click', (e) => {
        if(e.target.matches('div')) {
            div.style.border = 'solid 3px red';
        }
        if(e.target.matches('ul')) {
            ul.style.border = 'solid 3px orange';
            let newLi = document.createElement('li');
            ul.appendChild(newLi);
        }
        if(e.target.matches('li')) {
            e.target.style.border = 'solid 3px green';
            e.target.textContent += '!';
        } 
    });
}
task11();

//12. Пусть внутри одного родителя у нас есть кнопка и некоторый блок. Блок изначально скрыт. Сделате так, чтобы по клику на кнопку наш блок показался
function task12() {
    const parent = document.querySelector('.task10_12 #parent');
    const button = document.querySelector('.task10_12 button');
    const block  = document.querySelector('.task10_12 #block');

    button.addEventListener('click', (e) => {
        block.classList.add('active');
        e.stopPropagation();
    });

    parent.addEventListener('click', (e) => {
        block.classList.remove('active');
        //e.stopImmediatePropagation();
    });
}
task12();

//13. Навешайте на див обработчик клика. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак
function task13() {
    const ul = document.querySelector('.task10_13 ul');
    ul.addEventListener('click', (e) => {
        let li = e.target.closest('li'); //ищем родителя по селектору li и получаем этот же элемент

        if(li) {
            li.textContent += '!';
        }
        //e.target.textContent += '!'; //Если кликнуть по <i>italic</i>, то ! добавится в конце этого элемента , а не li
    });
}
task13();