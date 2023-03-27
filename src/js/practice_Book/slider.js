function task32() {
    const texts = ['text1', 'text2', 'text3']; 
    const slider = document.querySelector('.task32 #slider');
    let index = 0;

   setInterval(()=> {
        slider.textContent = texts[index];
        if (index === texts.length - 1) {
            index = 0;
          } else {
            index++;
          }
   }, 1000);
}
task32();

function task33() {
    const texts = ['text1', 'text2', 'text3']; 
    const slider = document.querySelector('.task33 #slider');
    const left = document.querySelector('.task33 #left');
    const right = document.querySelector('.task33 #right');
    let i = 0; 

    left.addEventListener('click', function() {
        // уменьшаем i на 1
        // и выводим текст с номером i
    });
    right.addEventListener('click', function() {
        // увеличиваем i на 1
        // и выводим текст с номером i
    });
}
task33();