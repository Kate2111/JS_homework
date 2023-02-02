//1 Пусть у нас есть некоторый массив. Пусть у нас есть некоторый массив. Добавьте в наш родитель новые абзацы, текстом которых будут элементы нашего массива. А по клику на абзац к его содержимому прибавлялась единица.
function task1() {
    const parent = document.querySelector('.task14_1 #parent');
    const arr = [1, 2, 3, 4, 5];
     for(let elem of arr) {
        const text = document.createElement('p');
        text.textContent = elem;
        parent.appendChild(text);

        text.addEventListener('click', function plus() {
            text.textContent = ++elem;
        });
     }
}
task1();

//2 Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
function task2() {
    const list      = document.querySelector('.task14_2 #elem');
    const btnAdd    = document.querySelector('.task14_2 .add');
    const btnSort   = document.querySelector('.task14_2 .sort');
    const input     = document.querySelector('.task14_2 input');
    const books     = ['Мастер и Маргарита', ' Собачье сердце', ' Мертвые души', 'Преступление и наказание'];

    input.addEventListener('click', () => {
        input.value = '';
        input.style.color = 'black';
    });
    

    function createGrade(text) {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.textContent = text;
        list.appendChild(li);
        li.appendChild(div);
        const grade = document.createElement('input'); //создаем поля для ввода оценки
        div.append(grade); //добавляем поле оценки вместе с названием книги
    }

    function listBooks () {
        for(let book of books) {
            createGrade(book);
        }
    }
    listBooks();
    
    btnAdd.addEventListener('click', () => {
        createGrade(input.value);

        input.value = 'Название книги';
        input.style.color = 'rgb(143, 141, 141)';
    });

    btnSort.addEventListener('click', () => {
        console.log('как достачаться до переменной grade?');
    });

}
task2();

//3 Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
function task3() {
    const width = document.querySelector('.task14_3 .width input');
    const height = document.querySelector('.task14_3 .height input');
    const table = document.querySelector('.task14_3 #table');
    const btn = document.querySelector('.task14_3 button');

    function createTable () {
        for(let i = 0; i < height.value; i++) {
            const tr = document.createElement('tr');
            tr.style.height = '20px';

            for(let i = 0; i < width.value; i++) {
                const td = document.createElement('td');
                td.style.border = 'solid 1px green';
                td.style.width = '20px';
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        this.removeEventListener('click', createTable);
    }
    btn.addEventListener('click', createTable);

    function greenTd (e) {
        if(e.target.tagName === 'TD') {
            e.target.style.backgroundColor = 'green';
        }
    }    
    table.addEventListener('click', greenTd);
}
task3();

//4. Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли четные числа в промежутке от 2 до 50.
function task4() {
    const table = document.querySelector('.task14_4 #table');
    const btn = document.querySelector('.task14_4 button');

    let num = 1;
    
    function createTable() {
        for( let i = 0; i < 5; i++) {
            let tr = document.createElement('tr');
            
            for(let i = 0; i < 5; i++) {
                let td = document.createElement('td');            
                td.textContent = num++ * 2;
                
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }

    btn.addEventListener('click', createTable);
}
task4();

//5. Выведите на экран HTML таблицу, сделайте так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
function task5() {
    const table = document.querySelector('.task14_5 #table');
    const arr = [[1, 2 , 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

    for(let subArr of arr) {
        const tr = document.createElement('tr');

        for(let elem of subArr) {
            const td = document.createElement('td');
            td.textContent = Math.pow(elem, 2);

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}
task5();

//6. Заполните таблицу данными из объекта, сделайте так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1, а по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
function task6() {
    const table = document.querySelector('.task14_6 #table');
    let employees = [
        {name: 'Имя', age: 'Возраст', salary: 'Зарплата'}, 
        {name: 'employee1', age: 30, salary: 400}, 
        {name: 'employee2', age: 31, salary: 500}, 
        {name: 'employee3', age: 32, salary: 600}, 
    ];

    for(let employee of employees) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = employee.name;
        td1.addEventListener('click', changeName);
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent = employee.age;
        td2.addEventListener('click', addAge);
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = employee.salary;
        td3.addEventListener('click', addSalary);
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    function changeName() {
        let input = document.createElement('input');
        input.style.backgroundColor = 'rgba(252, 250, 125, 0.5)';
        this.textContent = '';
        this.appendChild(input);

        let td = this;
        input.addEventListener('blur', () => {
            td.textContent = input.value;
            td.addEventListener('click', changeName);
        });

        this.removeEventListener('click', changeName);
    }

    function addAge () {
        this.textContent = +this.textContent + 1;
    }

    function addSalary() {
        this.textContent = +this.textContent + (+this.textContent * 0.1);
    }
}
task6();

//7. Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
function task7() {
    const table = document.querySelector('.task14_7 #table');
    const btn = document.querySelector('.task14_7 button');

    btn.addEventListener('click', () => {
        const tr = document.createElement('tr');
        tr.style.height = '20px';

        for(let i = 0; i <= 3; i++) {
            let td = document.createElement('td');
            td.style.width = '20px';
            td.style.border = 'solid 1px green';

            tr.appendChild(td);
        }

        table.appendChild(tr);
    });
    
}
task7();

//8. Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
function task8() {
    const table = document.querySelector('.task14_8 #table');
    const rows = document.querySelectorAll('.task14_8 tr');
    const columns = document.querySelectorAll('.task14_8 td');
    const addRow = document.querySelector('.task14_8 .row');
    const addColumn = document.querySelector('.task14_8 .column');

    function createTD (e) {
        const td = document.createElement('td');
        e.appendChild(td);
    }

    addColumn.addEventListener('click', () => {
        for(let row of rows) {
            createTD (row);
        }
    });

    addRow.addEventListener('click', () => {
        const tr = document.createElement('tr');
        tr.style.height = '20px';

        for(let i =0; i < columns.length - 2; i++) {
            createTD (tr);
        }
        table.appendChild(tr);
    });

   
}
task8();

//9. Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
function task9() {
    const btn = document.querySelector('.task14_9 button');
    const list = document.querySelector('.task14_9 #parent'); 

    btn.addEventListener('click', (e) => {
        const li = document.createElement('li');
        li.textContent = '!';
        list.appendChild(li);
    });

    list.addEventListener('click', function (e) {
        if(e.target.tagName === 'LI') {
            e.target.remove();
        }
    });
}
task9();

//10. Пусть у нас абзац. Давайте рядом с ним сделаем ссылку, с помощью которой этот абзац можно будет удалить.
function task10() {
    const elem = document.querySelector('.task14_10 #elem');
    const remove = document.querySelector('.task14_10 #remove');

    remove.addEventListener('click', function (e) {
        elem.remove();
        e.preventDefault();
    });
}
task10();

//11. Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
function task11() {
    const list = document.querySelectorAll('.task14_11 li');

    for(let li of list) {
        let remove = document.createElement('a');
        remove.href = '';
        remove.textContent = 'del';
        li.appendChild(remove);

        remove.addEventListener('click', function (e) {
            li.remove();
            e.preventDefault();
        });
    }
}
task11();

//12. Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
function task12() {
    const columns = document.querySelectorAll('.task14_12 tr');
    for(let column of columns) {
        let td =document.createElement('td');
        let del = document.createElement('a');
        del.href = '';
        del.textContent = 'del';
        del.addEventListener('click', function (e) {
            column.remove();
            e.preventDefault();
        });
        td.appendChild(del);
        column.appendChild(td);
    }
}
task12();

//13. Пусть у нас даны абзац и инпут, расположенные в одном родителе. Сделайте так, чтобы текст абзаца менялся по мере ввода текста в инпут.
function task13() {
    const input = document.querySelector('.task14_13 #input');
    const text = document.querySelector('.task14_13 #elem');

    input.value = text.textContent;
    text.textContent = '';

    input.addEventListener('click', () => {
        input.value = '';
    });

    input.addEventListener('blur', () => {
        text.textContent = input.value;
        input.value = '';
    });
}
task13();

//14. При клике на абзац добавляйте инпут, сделайте так, чтобы по потери фокуса в инпуте менялся текст абзаца.
function task14() {
    const text = document.querySelector('.task14_14 #elem');
    text.addEventListener('click', function createInput () {
        let input = document.createElement('input');        //создаем инпут
        
        text.textContent = '';                              //прячем текст абзаца
        input.value = 'Введите текст';                      //сохраняем тект в инпут по умолчанию
        input.style.color = 'rgb(143, 141, 141)';
        
        text.appendChild(input);                            //добавляем инпут в абзац
       
        let text1 = this;                                   //записываем контект в переменную
       
        input.addEventListener('click', () => {             //обнуляем значение инпута при клике
            input.value = '';
            input.style.color = 'black';
        });
        
        input.addEventListener('blur', () => {
            text.textContent = input.value;                 //в абзац записываем значение инпута
            text1.addEventListener('click', createInput);   //вкл обратно обработчик собития
        });

        this.removeEventListener('click', createInput);     //откл событие, чтобы не задвоился
    });
}
task14();

//15. Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.
function task15() {
    const list = document.querySelectorAll('.task14_15 li'); 
    const ul = document.querySelector('.task14_15 ul');
    const task = document.querySelector('.task14_15 input');
    const btn = document.querySelector('.task14_15 button');
    
    function clearInput (elem) {
        elem.addEventListener('click', () => {         
            elem.value = '';
            elem.style.color = 'black';
        });
    }

    clearInput (task);

    btn.addEventListener('click', function addTask () {
        let li = document.createElement('li');
        li.innerHTML = `<span>${task.value}</span>`;
        ul.appendChild(li);

        createInput(li);
        removeInput(li);
    });

    function createInput(elem) {
        let edit = document.createElement('a');
        edit.textContent = 'edit';
        edit.style.color = 'green';

        edit.addEventListener('click', function addText() {
            let input = document.createElement('input');
            input.style.color = 'black';
            input.value = elem.textContent;

            elem.textContent = '';
            elem.appendChild(input);

            clearInput (input);

            input.addEventListener('blur', () => {
                elem.textContent = input.value;
                elem.addEventListener('click', addText);
                createInput(elem);
                removeInput(elem);
            });

            elem.removeEventListener('click', addText);
        });

        elem.appendChild(edit);
    }

    function removeInput(elem) {
        let del = document.createElement('a');
        del.textContent = 'del';
        elem.appendChild(del);

        del.addEventListener('click', function remove() {
            elem.remove();
        });
    }

    for(let li of list) {
        createInput(li);
        removeInput(li);
    }
}
task15();

//16. Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
function task16() {
    const list = document.querySelectorAll('.task14_16 p');
   

    function getSpan (arr) {
        for(let elem of arr) {
            elem.innerHTML = `<span>${elem.textContent}</span>`;
            
            const texts = document.querySelectorAll('.task14_16 p span');
            for(let text of texts) {
                text.addEventListener('click', shangeText);
            }
            removeInput(elem);
        }
    }

    getSpan (list);
    
    function shangeText () {
        let input = document.createElement('input');
        input.value = '';
        this.textContent = '';

        this.appendChild(input);
        this.removeEventListener('click', shangeText);
        let text = this;
        input.addEventListener('blur', () => {
            text.textContent = input.value;
        });
    }

    function removeInput(elem) {
        let del = document.createElement('a');
        del.textContent = 'del';
        elem.appendChild(del);

        del.addEventListener('click', function remove() {
            elem.remove();
        });
    }
}
task16();

//17. Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет). Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
function task17() {
    const items = document.querySelectorAll('.task14_17 p');

    function wrapSpan (arr) {
        for(let elem of arr) {
            elem.innerHTML = `<span>${elem.textContent}</span>`;

            addButton(elem);
        }
    }

    wrapSpan (items);

    function addButton(arr) {
        const btn = document.createElement('a');
        btn.textContent = 'cross out';
        arr.appendChild(btn);

        textCrossOutHandler (btn);
    }

    function textCrossOutHandler (button) {
        button.addEventListener('click', function () {
            const item = document.querySelectorAll('.task14_17 span');

            for(let elem of item) {
                if(!elem.matches('line')) {
                    elem.classList.toggle('line');           
                } 
            }
        });
    }    
}
task17();

//18. Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд красило в зеленый фон, а второе нажатие отменяло это действие.
function task18() {
    const tr = document.querySelector('.task14_18 tr');
    const list = document.querySelectorAll('.task14_18 td');

    function createLink () {
        const td = document.createElement('td');
        tr.appendChild(td);

        const link = document.createElement('a');
        link.textContent = 'клик';
        td.appendChild(link);

        colorChangeHandler(link);
    }
    
    function colorChangeHandler(item) {
        item.addEventListener('click', () => {
            list.forEach(elem => elem.classList.toggle('color'));
        });
    }

    createLink ();
}
task18();

//19. Сделайте кнопку для скрытия и показа абзаца
function task19() {
    const elem = document.querySelector('.task14_19 #elem');
    const button = document.querySelector('.task14_19 button');

    button.addEventListener('click', () => {
        elem.classList.toggle('hidden');
    });
}
task19();

//20. Пусть теперь у нас есть много абзацев и у каждого своя кнопка для сокрытия. Сделаем так, чтобы по клику на кнопку скрывался или показывался соответствующий ей абзац(через id и data-elem).
function task20() {
    const buttons = document.querySelectorAll('.task14_20 .wrapper button');

    for(let button of buttons) {
        button.addEventListener('click', function () {
            const item = document.querySelector('#' + this.dataset.elem);
            item.classList.toggle('hidden');
        });  
    }
}
task20();

//21. Расставлять id и data-атрибуты не очень удобно. Давайте сделаем так, чтобы связь была по порядковому номеру: пусть первая кнопка скрывает первый абзац, вторая кнопка - второй и так далее.
function task21() {
    const buttons = document.querySelectorAll('.task14_21 #btn');
    const elems = document.querySelectorAll('.task14_21 p');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            elems[i].classList.toggle('hidden');
        });
    }
}
task21();

//22. Решите предыдущую задачу используя соседа слева(previousElementSibling).
function task22() {
    const buttons = document.querySelectorAll('.task14_22 .wrapper button');

    for(let button of buttons) {
        button.addEventListener('click', function () {
            this.previousElementSibling.classList.toggle('hidden');
        });
    }
}
task22();

//23. Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном. Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
function task23() {
    const list = document.querySelectorAll('.task14_23 li');

    list.forEach(li => {
        li.addEventListener('click', () => { 
            li.classList.toggle('active');
        });
    });
}
task23();

//24. Чередование стилей активации.
function task24() {
    let tds = document.querySelectorAll('.task14_24 td');

    let color = 'color1';
    for (let td of tds) {
        td.addEventListener('click', function() {
            if (color == 'color1') {
                color = 'color2';
            } else {
                color = 'color1';
            }
            
            this.classList.add(color);
        });
    }
}
task24();

//25. Чередование многих цветов из массива
function task25() {
    let tds = document.querySelectorAll('.task14_25 td');
    const color = ['color1', 'color2', 'color3'];
    let i = 0;

    for(let td of tds) {
        td.addEventListener('click', function() {
            this.classList.add(color[i]);
            i++

            if(i == color.length) {
                i = 0;
            }
        });
    }    
}
task25();

//26. Дан массив. Выведите его элементы в виде списка ul. Пусть по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать. Пусть в конце каждой li стояла ссылка 'удалить' и 'перечеркнуть', с помощью которой можно будет удалить эту li из ul.
function task26() {
    const list        = document.querySelector('.task14_26 ul');
    const window      = document.querySelector('.task14_26 input');
    const button      = document.querySelector('.task14_26 button');
    const cartoon     = ['Красавица и чудовище', 'Русалочка', 'Мулан'];

    function createVariable (text) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${text}</span>`;      
        list.appendChild(li);

        const crossOut = document.createElement('a');
        crossOut.textContent = 'перечеркнуть';
        crossOut.classList.add('link', 'crossOut');
        li.appendChild(crossOut);

        const del = document.createElement('a');
        del.textContent = 'удалить';
        del.classList.add('link');
        li.appendChild(del);

        contextChangeHandler (li);
        contextCrossOutHandler ();
        //contextDeleteHandler (del);
    }

    function createList () {
        for(let elem of cartoon) {
            createVariable (elem);
        }
    }

    function editInput (elem, item) {
        elem.addEventListener('blur', function () {
            item.textContent = this.value;
        });
    }

    function createInput () {
        const input = document.createElement('input');
        input.value = this.textContent;
        this.textContent = '';
        const li = this;


        this.appendChild(input);

        editInput (input, li);

        this.removeEventListener('click', createInput);
    }

    function contextChangeHandler (elem) {
        elem.firstElementChild.addEventListener('click', createInput);
    }

    function contextCrossOutHandler () {
        const elems = document.querySelectorAll('.task14_26 li a');
        for(let elem of elems) {
            elem.addEventListener('click', function () {
                this.previousElementSibling.classList.toggle('line');
            });   
        }   

        //НЕ МОГУ получить ссылку на "перечекнуть"
    }

    createList (cartoon);
}
task26();




