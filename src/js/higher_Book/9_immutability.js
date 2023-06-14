//Иммутабельное добавление элементов в массив в JavaScript
//  1. Сделайте кнопку, по нажатию на которую будет происходить иммутабельное добавление нового элемента в массив.

function task1() {
    const btn = document.querySelector('.task1 button');
    const input = document.querySelector('.task1 input');
    const list = document.querySelector('.task1 ul');
    const arrData = ['это', 'просто', 'слова']
    const copyArr = [...arrData];

    function createElem ( value) {
        const li = document.createElement('li');
        li.textContent = value;
        list.appendChild(li);

    }
    
    copyArr.forEach(value => {
        createElem ( value)
    })

    btn.addEventListener('click', () => {
        const valueInput = input.value.trim();
        if(valueInput !== '') {
            copyArr.push(valueInput)
            createElem (valueInput)
        }
    })
}
task1();

//Иммутабельное удаление элементов массива в JavaScript
//  2. Сделайте кнопку, по нажатию на которую будет происходить удаление элемента из массива. Пусть номер элемента для удаления хранится в переменной.

function task2() {
    const btn = document.querySelector('.task2 button');
    const list = document.querySelector('.task2 ul')
    const arrData = ['это', 'просто', 'слова'] 
    const copyArr = [...arrData];

  
    function createElem (arr) {
        list.innerHTML = '';
       
        arr.forEach((value) => {
            const li = document.createElement('li');
            li.textContent = value;
            list.appendChild(li)
        })
    }
    
    createElem (copyArr)
    
    const ind = 1;

    btn.addEventListener('click', () => {
        let res = [
            ...copyArr.slice(0, ind),
            ...copyArr.slice(ind + 1)
        ];
        /* copy.splice(ind, 1);
        let res = copy; */
        createElem (res) 
    })
}
task2();

//Иммутабельное изменение элементов массива в JavaScript
//3. Сделайте кнопку, по нажатию на которую будет происходить изменение элемента массива. Пусть номер элемента для изменения хранится в переменной.
function task3() {
    const btn = document.querySelector('.task3 button');
    const list = document.querySelector('.task3 ul')
    const arrData = ['это', 'просто', 'слова'] 
    const copyArr = [...arrData];

  
    function createElem (arr) {
        list.innerHTML = '';
       
        arr.forEach((value) => {
            const li = document.createElement('li');
            li.textContent = value;
            list.appendChild(li)
        })
    }
    
    createElem (copyArr)
    
    const ind = 1;

    btn.addEventListener('click', () => {
        copyArr[ind] = 'чудестные';
        /* let res = [
            ...copyArr.slice(0, ind),
            'чудестные',
            ...copyArr.slice(ind + 1)
        ]; */
      
        createElem (copyArr) 
    })
}
task3();

//Добавление элемента с id в JavaScript
//Дан массив объектов. Сделайте кнопку, по нажатию на которую в него будет добавляться новый элемент. Пусть id генерируется функцией.
function task4() {
    const list = document.querySelector('.task4 ul')

    let arr = [
        {
            id: getId(),
            prop1: 'value11',
            prop2: 'value12',
            prop3: 'value13',
        },
        {
            id: getId(),
            prop1: 'value21',
            prop2: 'value22',
            prop3: 'value23',
        },
        {
            id: getId(),
            prop1: 'value31',
            prop2: 'value32',
            prop3: 'value33',
        },
    ];

    const copyArr = [...arr]

    let newElem = {
        id: getId(),
        prop1: 'value41',
        prop2: 'value42',
        prop3: 'value43',
    };

    function getId(length = 5) {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        let res = '';
        
        for (let i = 0; i < length; i++) {
            res += chars[Math.floor(Math.random() * chars.length)];
        }
        
        return res;
    }
    
    function createElem (arr) {
        list.innerHTML = '';
       
        arr.forEach((value) => {
            const li = document.createElement('li');
            li.textContent = value.prop1;
            list.appendChild(li);

            const btnDel = document.createElement('button');
            btnDel.textContent = 'del';
            btnDel.setAttribute('data-id', value.id)
            li.appendChild(btnDel);
        })
    }

    createElem (copyArr);
    
    document.querySelector('.task4 .btnAdd').addEventListener('click', () => {
        copyArr.push(newElem);
        createElem (copyArr);
    })

    list.addEventListener('click', function func(event) {
        const del = event.target.closest('button');

        if(del) {
            const id = del.getAttribute('data-id');
            deleteElem(id)
        }
    })

    function deleteElem(id) {
        const cleanArr = copyArr.filter(elem => {
            if(elem.id !==id){
                return elem;
            }
        });

        copyArr.splice(0, copyArr.length, ...cleanArr); 

        createElem(copyArr);
    }
}
task4();

//Изменение одного свойства по id в JavaScript
//Сделайте кнопку, по нажатию на которую будет браться элемент массива с указанным id, в нем будет браться свойство с указанным именем и в конец значения этого свойства будет дописываться знак '!'.
function task5() {
    const list = document.querySelector('.task5 ul')

    let arr = [
        {
            id: getId(),
            prop1: 'value11',
            prop2: 'value12',
            prop3: 'value13',
        },
        {
            id: getId(),
            prop1: 'value21',
            prop2: 'value22',
            prop3: 'value23',
        },
        {
            id: getId(),
            prop1: 'value31',
            prop2: 'value32',
            prop3: 'value33',
        },
    ];

    const copyArr = [...arr]

    let newElem = {
        id: getId(),
        prop1: 'value41',
        prop2: 'value42',
        prop3: 'value43',
    };

    function getId(length = 5) {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        let res = '';
        
        for (let i = 0; i < length; i++) {
            res += chars[Math.floor(Math.random() * chars.length)];
        }
        
        return res;
    }
    
    function createElem (arr) {
        list.innerHTML = '';
       
        arr.forEach((value) => {
            const li = document.createElement('li');
            li.textContent = value.prop1;
            li.setAttribute('data-id', value.id)
            list.appendChild(li);
        })
    }

    createElem (copyArr);
    
    document.querySelector('.task4 .btnAdd').addEventListener('click', () => {
        copyArr.push(newElem);
        createElem (copyArr);
    })

    list.addEventListener('click', function func(event) {
        const edit = event.target.closest('li');

        if(edit) {
            const id = edit.getAttribute('data-id');
            editElem(id)
        }
    })

    function editElem(id) {
        const editArr = copyArr.map(elem => {
            if(elem.id ==id) {
                return {...elem, prop1: elem.prop1+'!'};
            } else {
                return elem;
            }
        });

        copyArr.splice(0, copyArr.length, ...editArr); 

        createElem(copyArr);
    }
}
task5();