

function task28() {
    const test      = document.querySelector('.task28 .test');
    const check     = document.querySelector('.task28 .check');
    const questions = [
        {
            text:  'вопрос 1?',
            right: '1',
        },
        {
            text:  'вопрос 2?',
            right: '2',
        },
        {
            text:  'вопрос 3?',
            right: '3',
        },
    ];

    start(test, check, questions);

    function start(parent, btnCheck, arrQuestion) {
        showQuestionAndAnswer(parent, arrQuestion);

        btnCheck.addEventListener('click', buttonCheckClick.bind(btnCheck, arrQuestion));
    }

    function showQuestionAndAnswer(parent, arrQuestion) {
        arrQuestion.forEach(question => {
            const wrapper = createElement(parent, 'div');
            wrapper.classList.add('wrapper');

            createElement(wrapper, 'div').textContent = question.text;

            createElement(wrapper, 'input');
        });
    }

    function createElement(parent, attribute) {
        const elem = document.createElement(attribute);
        parent.appendChild(elem); 
        return elem;
    }

    function buttonCheckClick(arrQuestion) {
        const answerUser = document.querySelectorAll('input');
        clearClassAnswer(answerUser);
        isCorrectAnswer(answerUser, arrQuestion);
    }

    function clearClassAnswer(arrUser) {
        arrUser.forEach(elem => {
            //elem.className = ''; //Удалякт сразу все классы
            elem.removeAttribute('class'); //Удалякт сразу все классы
        });
    }

    function isCorrectAnswer(arrUser, arrRight){
        arrRight.forEach((answer, i)=> {
            if(arrUser[i].value == answer.right) {
                arrUser[i].classList.add('right');
            } else {
                arrUser[i].classList.add('wrong');
            }
        });
    }
}
task28();







//Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.

/* function task29() {

    let questions = document.querySelectorAll('.task29 .wrapper');
   
    questions.forEach( question => {
        const answers = question.querySelectorAll('input');
        start(answers, question);
    });
     
    function start (arrAnswer, parent) {
        arrAnswer.forEach(answer => {
            answer.addEventListener('change', function() {
                isDataRight (answer, parent);
            });
        
       });
    }

    function isDataRight (input, parent) {
        if(input.hasAttribute('data-right')) {
            input.parentElement.classList.add('right');
        } else {
            const rightInput = parent.querySelector('input[data-right]');
            rightInput.parentElement.classList.add('right');
        }
    }
}
task29();  */


//Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
/* function task30() {
    const check     = document.querySelector('.task29 .check');
    const question = document.querySelectorAll('.task29  .wrapper');
    let answers = [0, 1, 2];
   
    start(check, question, answers);

    function start(btnCheck, parent, arrAnswer) {
        btnCheck.addEventListener('click', function() {
            parent.forEach( (question, i) => {
                const inputs = question.querySelectorAll('input');
    
                let indexChecked = getIndex(inputs);
               
                isRight(indexChecked == arrAnswer[i], inputs, indexChecked, 'right');
                isRight(indexChecked != arrAnswer[i], inputs, indexChecked, 'wrong');
            });
        });
    }

    function getIndex(arr) {
        let index;
        arr.forEach((input, i) => {
            if(input.checked == true){index = i;}
            return index;
        });
        return index;
    }

    function isRight(condition, arr, index, name) {
        if(condition)  {
            arr[index].parentElement.classList.add(name);
        }
    }

}
task30(); */

function task31() {
    const test = document.querySelector('.task31 .test');
    const check = document.querySelector('.task31 .check');
    let questions = [
        {
            text: 'вопрос 1?',
            right: 0,
            variants: [
                'вариант 1',
                'вариант 2',
                'вариант 3'
            ]
        },
        {
            text: 'вопрос 2?',
            right: 1,
            variants: [
                'вариант 1',
                'вариант 2',
                'вариант 3'
            ]
        },
        {
            text: 'вопрос 3?',
            right: 2,
            variants: [
                'вариант 1',
                'вариант 2',
                'вариант 3'
            ]
        },
    ];

    createTest(questions, test, check);

    function createTest(arr, parent, btnCheck) {
        createWrapper(arr, parent);
        checkResults(arr, btnCheck);
    }
    
    function createWrapper(arr, parent) {
        for(let obj of arr) {
            let wrapper = createElem(parent, 'div');
            wrapper.classList.add('wrapper');

            let question = createElem(wrapper, 'p');
            question.textContent = obj.text;
            createRows(obj, wrapper);
        }
    }

    function createRows(obj, wrapper) {
        for(let elem of obj.variants) {
            let answer = createElem(wrapper, 'label');
            
            let input = createElem(answer, 'input');
            input.type = 'radio';
            input.name = `${obj.right}`;

            let text = createElem(answer, 'p');
            text.textContent = elem;
            text.classList.add('text');
        }
    }
    
    function createElem(parent, tag) {
        const elem = document.createElement(tag);
        parent.appendChild(elem);
        return elem;
    }

    function checkResults(arr, btnCheck) {
        const answers = arr.map(obj => obj.right);
        btnCheck.addEventListener('click', showResultHandler.bind(btnCheck, answers));
    }

    function showResultHandler(answers) {
        const wrapper = document.querySelectorAll('.task31 .wrapper');
        wrapper.forEach( (question, i) => {
            const inputs = question.querySelectorAll('input');
            
            let indexChecked = getIndex(inputs);

            isRight(indexChecked == answers[i], inputs, indexChecked, 'right');
            isRight(indexChecked != answers[i], inputs, indexChecked, 'wrong');
        });
    }

    function getIndex(arr) {
        let index;
        arr.forEach((input, i) => {
            if(input.checked == true){index = i;}
            return index;
        });
        return index;
    }

    function isRight(condition, arr, index, name) {
        if(condition)  {
            arr[index].parentElement.classList.add(name);
        }
    }
}
task31();