//1. Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
//textarea - парный тег, позволяющий пользователю ввести многострочное сообщение. Обращению к тексту тега через textarea.value

function task1() {
    const text = document.querySelector('.task1 #elem');
    const p = document.querySelector('.task1 p');

    text.addEventListener('blur', function() {
        p.textContent = text.value;
        text.value = '';
    });
}
task1();

//2. Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
function task2() {
    const input =  document.querySelector('.task2 input');
    const block = document.querySelector('.task2 .block');
    const unlock = document.querySelector('.task2 .unlock');

    block.addEventListener('click', function() {
        input.disabled = true;
    });
    unlock.addEventListener('click', function() {
        input.disabled = false;
    });
}
task2();

//3. Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.