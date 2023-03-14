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

