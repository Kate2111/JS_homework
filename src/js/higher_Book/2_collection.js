function task1() {
    let elems = document.querySelectorAll('.task84 p');

    elems.forEach(elem => elem.textContent += ' - ' + typeof(elem));
    //elems.reverse();
    //elems.join(',');
    //elems.push('str');
    //elems.filter(Object);
    //console.log(Array.isArray(elems));
}
task1();

//2. Каким-нибудь способом получите псевдомассив элементов. Преобразуйте его в массив тремя описанными способами.
function task2() {
    let elems = document.querySelectorAll('.task84 p');
    
    //Преобразование с помощью цикла
    //let arr = [];
    //elems.forEach(elem => arr.push(elem));
    
    //Преобразование деструктуризацией
    //const arr = [...elems];

    //Преобразование методом Array.from()
    //const arr = Array.from(elems);
}
task2();

//3. С помощью метода slice получите все абзацы, кроме первого и последнего.
function task3() {
    const parent = document.querySelector('.div');
    let elems = document.querySelectorAll('.task84 p');
    const arr = [...elems];

    const editArr = arr.slice(1, arr.length-1);
    editArr.forEach(elem => {
        parent.textContent = elem;
    });
}
task3();