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
task29(); */


//Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.
function task30() {
    const check     = document.querySelector('.task29 .check');
    const parent = document.querySelectorAll('.task29  .wrapper');
    let answers = [0, 1, 2];
   
    parent.forEach( question => {
        const inputs = question.querySelectorAll('input');
        start(inputs, question);
    });
     
    function start (inputs) {
        inputs.forEach(input => {
            input.addEventListener('change', function() {
                if(input.checked) {
                    isRight(check, input);
                }
            });
        
       });
    }

    function isRight(btnCheck, input) {
        btnCheck.addEventListener('click', function() {
            for(let i = 0; i < answers.length; i++) {
                answers[i] == 
            }
        });
    }
}
task30();