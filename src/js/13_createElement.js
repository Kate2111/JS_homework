//1 Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
function task1() {
    const lists = document.querySelector('.task13_1 ol');
    const btn   = document.querySelector('.task13_1 button');

    btn.addEventListener('click', () => {
        const li = document.createElement('li');
        li.textContent = 'item';
        lists.appendChild(li);
    });
}
task1();

//2 Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак
function task2() {
    const lists = document.querySelector('.task13_2 ol');
    const btn   = document.querySelector('.task13_2 button');

    btn.addEventListener('click', () => {
        const li = document.createElement('li');
        lists.appendChild(li);

        li.addEventListener('click', () => {
            li.textContent = '!';
        });
    });
}
task2();

//3 Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
function task3() {
    const lists = document.querySelector('.task13_3 ol');

    for(let i = 0; i <= 9; i++) {
        let li = document.createElement('li');
        li.textContent = i + 1;
        lists.appendChild(li);
    }
}
task3();

//4. Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
function task4() {
    const wrapper = document.querySelector('.task13_4 .wrapper');
    const text    = document.querySelector('.task13_4 .text');

    for(let i = 0; i <=4; i++) {
        const input = document.createElement('input');
        wrapper.appendChild(input);

        input.addEventListener('blur', () => {
            text.textContent += input.value;
        });
    }
}
task4();

//5. Сделайте так, чтобы любая li удалялась по клику на нее.
function task5() {
    const list = document.querySelectorAll('.task13_5 li');

    for(let li of list) {
        li.addEventListener('click', () => {
            li.remove();
        });
    }
}
task5();

//6. Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
function task6() {
    const del = document.querySelector('.task13_6 button');
    const parent = document.querySelector('.task13_6 ul');

    del.addEventListener('click', () => {
        parent.removeChild(parent.lastElementChild); 
    });
}
task6();

//7. Сделайте так, чтобы по каждому клику на кнопку add добавлялся элемент, а по клику на кнопку del удалялся последний элемент.
function task7() {
    const input = document.querySelector('.task13_7 input');
    const add   = document.querySelector('.task13_7 .add');
    const del   = document.querySelector('.task13_7 .del');
    const list  = document.querySelector('.task13_7 #parent');

    input.addEventListener('click', () => {
        input.value = '';
        input.style.color = 'black';
    });

    add.addEventListener('click', function func() {
        let task = document.createElement('li');
        task.textContent = input.value;
        list.appendChild(task);

        input.value = '';
        input.style.color = 'rgb(143, 141, 141)';

        input.focus();
    });   
    
    del.addEventListener('click', () => {
        list.removeChild(list.lastElementChild); 
    });
}
task7();

//8. Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
function task8() {
    let parent = document.querySelector('#table');

for (let i = 1; i <= 3; i++) {
	let tr = document.createElement('tr'); // создаем tr-ку 
	
	// Заполняем tr-ку td-шками:
	for (let j = 1; j <= 3; j++) {
		let td = document.createElement('td'); // создаем td-шку 
		td.innerHTML = j; // пишем в нее текст 
		
		tr.append(td); // добавляем созданную td-шку в конец tr-ки 
	}
	
	parent.append(tr); // добавляем созданную tr-ку в конец таблицы 
}
}
task8();

//9. Вставьте в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
function task9() {
    const ul = document.querySelector('.task13_9 ul');
    let start = document.createElement('p');
    let finish = document.createElement('p');
    start.textContent = 'start';
    finish.textContent = 'finish';
    ul.prepend(start);
    ul.append(finish);

}
task9();

//10. Дан элемент #elem. Вставьте перед этим элементом элемент с текстом 'new'.
function task10() {
    const elem = document.querySelector('.task13_10 #elem');
    const parent = document.querySelector('.task13_10 #parent');

    let li = document.createElement('li');
    li.textContent = 'new';
    //parent.insertBefore(li, elem);  // родитель.insertBefore(элемент, перед кем вставить)
    //parent.insertBefore(li, parent.firstElementChild); //если в элементе нет дочерних элементов, firstElementChild возвращает null, тогда используем firstChild
    parent.insertBefore(li, parent.firstChild);

}
task10();

//11. Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
function task11() {
    const elem = document.querySelector('.task13_11 #elem');
    const parent = document.querySelector('.task13_11 #parent');

    let li = document.createElement('li');
    li.textContent = 'new';
    parent.insertBefore(li, elem);

    li.addEventListener('click', () => {
        li.textContent += '!';
    });

}
task11();

//12. Дан элемент. Вставьте перед ним абзац с текстом '!!!'.
function task12() {
    const elem = document.querySelector('.task13_12 #elem');

    let text = document.createElement('p');
    text.textContent = '!!!';
    elem.insertAdjacentElement('beforebegin', text);
}
task12();

//13. Дан элемент. Вставьте после него абзац с текстом '!!!'.
function task13() {
    const elem = document.querySelector('.task13_13 #elem');

    let text = document.createElement('p');
    text.textContent = '!!!';
    elem.insertAdjacentElement('afterend', text);
}
task13();

//14. Дан элемент. Вставьте ему в начало и в конец абзац с текстом 'Оглавление', 'Заключение'.
function task14() {
    const elem = document.querySelector('.task13_14 #elem');

    let start = document.createElement('p');
    let finish = document.createElement('p');
    start.textContent = 'Оглавление';
    finish.textContent = 'Заключение';

    elem.insertAdjacentElement("afterbegin", start);
    elem.insertAdjacentElement("beforeend", finish);
}
task14();

//15. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
function task15() {
    const input   = document.querySelector('.task13_15 input');
    const btn     = document.querySelector('.task13_15 button');
    const wrapper = document.querySelector('.task13_15 .wrapper');


    btn.addEventListener('click', () => {
        let clone = input.cloneNode(true);
        wrapper.appendChild(clone);
    });
}
task15();

//16. Проверьте, является ли этот элемент элементом с классом www. Проверьте, является ли этот элемент абзацем.
function task16() {
    const elem = document.querySelector('.task13_16 #elem');
    
    console.log(elem.matches('div.www'));
    if(elem.tagName === 'P') {
        console.log('этот элемент является абзацем');
    } else {
        console.log('этот элемент не является абзацем');
    }
}
task16();

//17. Даны две переменные elem1 и elem2, содержащие два элемента. Проверьте, является ли элемент из elem2 потомком элемента из elem1.
function task17() {
    const elem1 = document.querySelector('#elem1');
    const elem2 = document.querySelector('#elem2');

    console.log(elem1.contains(elem2));
}
task17();