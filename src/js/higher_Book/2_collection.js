function task84() {
    let elems = document.querySelectorAll('.task84 p');

    elems.forEach(elem => elem.textContent += ' - ' + typeof(elem));
    //elems.reverse();
    //elems.join(',');
    //elems.push('str');
    //elems.filter(Object);
    //console.log(Array.isArray(elems));
}
task84();

//2. Каким-нибудь способом получите псевдомассив элементов. Преобразуйте его в массив тремя описанными способами.
function task85() {
    let elems = document.querySelectorAll('.task84 p');
    
    //Преобразование с помощью цикла
    //let arr = [];
    //elems.forEach(elem => arr.push(elem));
    
    //Преобразование деструктуризацией
    //const arr = [...elems];

    //Преобразование методом Array.from()
    //const arr = Array.from(elems);
}
task85();

//3. С помощью метода slice получите все абзацы, кроме первого и последнего.
function task86() {
    const parent = document.querySelector('.div');
    let elems = document.querySelectorAll('.task84 p');
    const arr = [...elems];

    const editArr = arr.slice(1, arr.length-1);
    editArr.forEach(elem => {
        const p = document.createElement('p');
        p.textContent = elem.textContentk;
        parent.appendChild(p);
    });
}
task86();

//4. Проверьте, какой тип коллекции будет в свойстве childNodes и в свойстве children.
function task87() {
    const parent = document.querySelector('.div');

    //Свойство childNodes хранит в себе псевдомассив дочерних узлов элемента (теги, комментарии и текстовые узлы).
    const elem1 = parent.childNodes; //NodeList - querySelectorAll

    //Свойство children хранит в себе псевдомассив дочерних элементов. Дочерними элементами считаются все теги, которые непосредственно расположены внутри блока
    const elem2 = parent.children; //HTMLCollection - getElementsByTagName
}
task87();

//5. Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.
function task88() {
    let map = new Map();

    const user1 = [27, 'info@mail.ru', 'Russia'];
    const user2 = [54, 'pochta@gmail.com', 'Georgia'];
    const user3 = [42, 'hello@hi.com', 'USA'];

    map
        .set(user1, 'Alex')
        .set(user2, 'Mugli')
        .set(user3, 'Piter');
}
task88();

//6. Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы.
function task89() {
    let map = new Map();

    const user1 = {1: 'Alex'};
    const user2 = {2: 'Mugli'};
    const user3 = {3: 'Piter'};

    const info1 = [27, 'info@mail.ru', 'Russia'];
    const info2 = [54, 'pochta@gmail.com', 'Georgia'];
    const info3 = [42, 'hello@hi.com', 'USA'];

    map
        .set(user1, info1)
        .set(user2, info2)
        .set(user3, info3);
}
task89();


//7. Пусть дана коллекция Map. Получите массив ее ключей и массив значений и переберите их циклом for-of.
function task90() {
    const block = document.querySelector('.task90 p');
    let map = new Map();

    map
        .set('Alex', 27)
        .set('Mugli', 54)
        .set('Piter', 42);

    let keys = map.keys();
    let values = map.values();

    for(let elem of keys) {
        const p = document.createElement('p');
        p.textContent = `ключ - ${elem}`;
        block.appendChild(p);
    }

    for(let elem of values) {
        const p = document.createElement('p');
        p.textContent = `значение - ${elem}`;
        block.appendChild(p);
    }    
}
task90();

//8. Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map, ключами в которой будут инпуты, а значением - их порядковый номер на странице. Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер. 
function task91() {
    const inputs = document.querySelectorAll('.task91 input');
    const map = new Map();
    let i = 1;

    for(let input of inputs) {map.set(input, i++);}

    for(let input of inputs) {
        input.addEventListener('click', function () {
            this.value += map.get(this);
        });
    }
}
task91();

//9.Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число. Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел. 
function task92() {
    const inputs = document.querySelectorAll('.task92 input');
    const map = new Map();

    inputs.forEach((input) => {
        input.addEventListener('keypress', rememberNum);
        input.addEventListener('blur', showArrNum);
    });

    function rememberNum(e) {
        if(e.code == 'Enter') {
            return map.set(this.value, this.dataset.text);
        }
    }

    function showArrNum() {
        this.value = '';
        console.log(map);
    }
    
}
task92();

//10. Дан массив с числами:let arr = [1, 2, 3, 1, 3, 4]; С помощью этого массива создаейте коллекцию Set.
function task93() {
    let arr = [1, 2, 3, 1, 3, 4];
    let set = new Set(arr);
    //console.log(set);
}
 task93();

 //11. Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.
function task94() {
    let set = new Set();
    set
        .add(1)
        .add(2)
        .add(3);
}
 task94();

//12. Создайте коллекцию Set с начальными значениями 1, 2 и 3. С помощью метода add добавьте в коллекцию еще одно число 2. Выведите содержимое коллекции в консоль, убедитесь, что число 2 не добавилось второй раз.
function task95() {
    let set = new Set([1,2,3]);
    set.add(2);
}
task95();

//13. Дано: let nums = [1, 2, 1, 6, 6, 3, 1, 2, 4] Напишите функцию, которая параметром будет принимать массив и возвращать этот массив без дублей.
function task96() {
    const div = document.querySelector('.task96 .div');
    let nums = [1, 2, 1, 6, 6, 3, 1, 2, 4];
    function removeDoubles(arr) {
        const newArr = [...new Set(arr)];
        newArr.forEach(elem => div.textContent += elem);
    }
    removeDoubles(nums);    
}
task96();

//14. Даны абзацы и кнопка. Пользователь кликает на эти абзацы в произвольном порядке. Сделайте так, чтобы по нажатию на кнопку в конец каждого абзаца, на который был совершен клик, был добавлен восклицательный знак.
function task97() {
    const words = document.querySelectorAll('.task97 p');
    const button = document.querySelector('.task97 button');
    let set = new Set();

    words.forEach(word => word.addEventListener('click', addArr));
    button.addEventListener('click', changeWord);

    function addArr() {
        set.add(this);
    }

    function changeWord() {
        for(let item of set) {
            item.textContent += ' !';
        }
    }
   
}
task97();

//15 Дана строка в формате JSON, содержащая объект с данными. Найдите сумму чисел из представленных данных.
function task98() {
    const div = document.querySelector('.task98 .div');
    let json = `{
        "data1": [1,2,3],
        "data2": [4,5,6],
        "data3": [7,8,9]
    }`;

    let obj = JSON.parse(json);
    let sum = 0;
    for(let key in obj) {
        for(let elem of obj[key]){
            sum += elem;
        }
    }

    div.textContent = `Результат: ${sum}`;
}
task98();

//16 Дана строка в формате JSON, содержащая имена юзеров.        Выведите эти имена в виде списка ul.
function task99() {
    const div = document.querySelector('.task99 .div');
    let json = '["user1","user2","user3","user4","user5"]';

    let arr = JSON.parse(json);

    arr.forEach(elem => {
        const li = document.createElement('li');
        li.textContent = elem;
        div.appendChild(li);
    });
}
task99();

//17 Дана строка в формате JSON, содержащая массив с данными работников. Выведите этих работников на экран в виде HTML таблицы.
function task100() {
    const table = document.querySelector('.task100 table');
    let json = `[
        {
            "name": "user1",
            "age": 25,
            "salary": 1000
        },
        {
            "name": "user2",
            "age": 26,
            "salary": 2000
        },
        {
            "name": "user3",
            "age": 27,
            "salary": 3000
        }
    ]`;

    let arr = JSON.parse(json);

    for(let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr');
        for(let key in arr[i]) {
            const td = document.createElement('td');
            td.textContent = arr[i][key];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}
task100();

//18 Дан список UL с городами. Получите список городов в формате JSON.
function task101() {
    const cities = document.querySelectorAll('.task101 li');
    let arr = [];
    for(let city of cities) {
        arr.push(city.textContent);
    }
    
    let json = JSON.stringify(arr);
}
task101();

//19.  Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.
function task102() {
    let rows = document.querySelectorAll('.task102 tr');

    let employs = [];
    
    for (let i = 1; i < rows.length; i++) {
      let cells = rows[i].querySelectorAll('td');
      let employ = {
        surname: cells[0].textContent,
        name: cells[1].textContent,
        patronymic: cells[2].textContent
      };
      employs.push(employ);
    }
    
    let json = JSON.stringify(employs);
}
task102();

//20.  Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами. Запустите этот скрипт, чтобы данные сохранились. Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму. Запустите второй скрипт и убедитесь в его работоспособности.
function task103() {
    const res = document.querySelector('.task103 .res');
    localStorage.setItem('one', 1);
    localStorage.setItem('two', 2);
    localStorage.setItem('three', 3);

    let key = ['one', 'two', 'three'];
  
    //сохраненные данные получаем в виде строки
    let values = key.map(elem => {
        return Number(localStorage.getItem(elem));
    });

    let sum = values.reduce((acc, elem) => {
        return acc + elem;
    }, 0); 

    res.textContent = `Сумма чисел: ${sum}`;

}
task103();

//21. По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени. Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.
function task104() {
    const res = document.querySelector('.task104 .res');
    let time = localStorage.getItem('time');
    let now = new Date().getTime();

    if(!time) {
        
        localStorage.setItem('time', now);
    }

    if(time) {
        let minutes = Math.round((now - time) / 60000);
        res.textContent = `с предыдущего захода пользователя на сайт, прошло ${minutes} мин.`;
        if(minutes >= 60) {
            res.textContent = `с предыдущего захода пользователя на сайт, прошло ${Math.round(minutes / 60)} ч.`;
        } 
        if (minutes >= 1140) {
            res.textContent = `с предыдущего захода пользователя на сайт, прошло ${Math.round(minutes / 60 / 24)} д.`;
        }
    }
}
task104();

//22. По заходу пользователя на сайт спросите у него дату рождения. При следующем заходе пользователя на сайт, если у него в этот день будет День Рождения - поздравьте его с этим праздником.
function task105() {
    const res = document.querySelector('.task105 .res');
    let birthday;
    let time = localStorage.getItem('HB');

    function addZero(num) {
        if (num > 0 && num <= 9) {return '0' + num;} else {return num;}
    }

    if(!time) {
        birthday = ( prompt('Когда у вас день рожденье? Введите в формате дд.мм.гггг', ''));
        localStorage.setItem('HB', birthday);
        
    } else {
        let now = addZero(new Date().getDate()) + '.' + addZero(new Date().getMonth() + 1);

        if(time.startsWith(now)) {
           res.textContent = 'С Днем Рождения!';
        } else  {
            let year = new Date().getFullYear();
            res.textContent = `Мы поздравим вас ${time.slice(0, 5)}.${year} `;
        }
    }
}
task105();

//23. Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище. При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст.
function task106() {
    const input = document.querySelector('.task106 input');
    const value = localStorage.getItem('value');

    if(!value) {
        input.addEventListener('blur', () => {
            localStorage.setItem('value', input.value);
            input.value = '';
        });
    } else {
        input.value = value;
    }
}
task106();

//24. Пользователь заходит на сайт, затем обновляет страницу, затем еще раз обновляет и так далее. Сделайте счетчик обновления страницы. Каждый раз при обновлении выводите значение счетчика на экран.
function task107() {
    const res = document.querySelector('.task107 .res');

    let counter = localStorage.getItem('counterVisits');
    if(!counter) {
        localStorage.setItem('counterVisits', 0);
    } else {
        counter++;
        localStorage.setItem('counterVisits', counter);
        res.textContent = `Количество обновлений страницы ${counter}`;
    }

    if(counter == 100) {
        localStorage.removeItem(counter);
    }
    
}
task107();

//25. Даны инпуты и кнопка. По нажатию на кнопку получите тексты всех инпутов в виде массива и сохраните этот массив в локальное хранилище. Сделайте так, чтобы при следующем заходе на страницу в инпутах стояли сохраненные в локальном хранилище значения.
function task108() {
    const button = document.querySelector('.task108 button');
    const items = document.querySelectorAll('.task108 input');


    button.addEventListener('click', () => {
        let arr = [...items].map(item => {return item.value;});

        localStorage.setItem('arr', JSON.stringify(arr));
    });

    if(localStorage.getItem('arr')) {
        let res = JSON.parse(localStorage.getItem('arr'));
        items.forEach((item, i)=> {
            item.value = res[i];
        });
    }
}
task108();

//26. Сохраните его в локальное хранилище. Затем сделайте 3 инпута и кнопку. Пусть в инпуты вводятся фамилия, имя и возраст. По нажатию на кнопку запишите нового юзера в конец сохраненного в хранилище массива.
function task109() {
    let users = [
        {
            surname: 'Иванов',
            name: 'Иван',
            age: 31,
        },
        {
            surname: 'Петров',
            name: 'Петр',
            age: 32,
        },
        {
            surname: 'Сидоров',
            name: 'Сидор',
            age: 33,
        }
    ];

    const add = document.querySelector('.task109 button');
    const items = document.querySelectorAll('.task109 input');

    if(!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        add.addEventListener('click', () => {
            const arr = [...items].map(item => {return item.value;});
    
            let user = {
                surname: arr[0],
                name: arr[1],
                age: arr[2]
            };
    
            let employs = JSON.parse(localStorage.getItem('users'));
            employs.push(user);
            localStorage.setItem('users', JSON.stringify(employs));
        });
    }
}
task109();