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

    function greenTd (e) {
        if(e.target.tagName === 'TD') {
            e.target.style.backgroundColor = 'green';
        }


        let arr = [];

        for(let elem of arr) {
            elem = Math.random();
            arr.push(elem);
        }
       

        console.log(arr);
       
    }

    btn.addEventListener('click', createTable);

    table.addEventListener('click', greenTd);
  
}
task3();

//4. Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
function task4() {
   
}
task4();

//5. Сделайте так, чтобы любая li удалялась по клику на нее.
function task5() {
  
}
task5();

//6. Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
function task6() {
   
}
task6();

//7. Сделайте так, чтобы по каждому клику на кнопку add добавлялся элемент, а по клику на кнопку del удалялся последний элемент.
function task7() {
    
}
task7();

//8. Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
function task8() {
   
}
task8();

//9. Вставьте в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
function task9() {
   
}
task9();

//10. Дан элемент #elem. Вставьте перед этим элементом элемент с текстом 'new'.
function task10() {
   
}
task10();

//11. Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
function task11() {
}
task11();

//12. Дан элемент. Вставьте перед ним абзац с текстом '!!!'.
function task12() {
   
}
task12();

//13. Дан элемент. Вставьте после него абзац с текстом '!!!'.
function task13() {
   
}
task13();

//14. Дан элемент. Вставьте ему в начало и в конец абзац с текстом 'Оглавление', 'Заключение'.
function task14() {
    
}
task14();

//15. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
function task15() {
    
}
task15();

//16. Проверьте, является ли этот элемент элементом с классом www. Проверьте, является ли этот элемент абзацем.
function task16() {
  
}
task16();

//17. Даны две переменные elem1 и elem2, содержащие два элемента. Проверьте, является ли элемент из elem2 потомком элемента из elem1.
function task17() {
    
}
task17();