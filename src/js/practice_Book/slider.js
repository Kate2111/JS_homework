function task32() {
    const texts = [
        '../../img/calc/0cat_aquarius.png', 
        '../../img/calc/1cat_pisces.png', 
        '../../img/calc/2cat_aries (1).png', 
        '../../img/calc/3cat_taurus (1).png', 
        '../../img/calc/4cat_gemini.png', 
        '../../img/calc/5cat_cancer.png'
    ]; 
    const slider = document.querySelector('.task32 img');
    let index = 0;

   setInterval(()=> {
        slider.src = texts[index];
        if (index === texts.length - 1) {
            index = 0;
          } else {
            index++;
          }
   }, 2000);
}
task32();

// Сделайте так, чтобы тексты ходили по кругу.
function task33() {
    const texts = [
        '../../img/calc/0cat_aquarius.png', 
        '../../img/calc/1cat_pisces.png', 
        '../../img/calc/2cat_aries (1).png'
    ]; 
    const slider = document.querySelector('.task33 img');
    const left = document.querySelector('.task33 #left');
    const right = document.querySelector('.task33 #right');
    let i = 0; 

    slider.src = texts[i];
    
    left.addEventListener('click', function(e) {
        e.preventDefault();
        i === 0 ? i = texts.length - 1 : i -= 1;
        slider.src = texts[i];
    });
    right.addEventListener('click', function(e) {
        e.preventDefault();
        i === texts.length - 1 ? i = 0 : i += 1;
        slider.src = texts[i];
    });
}
task33();

//Модифицируйте предыдущую задачу так, чтобы тексты не ходили по кругу, а просто не прокручивались дальше по достижению крайнего правого или левого положения.
function task34() {
    const texts = [
        '../../img/calc/1cat_pisces.png', 
        '../../img/calc/2cat_aries (1).png', 
        '../../img/calc/3cat_taurus (1).png', 
        '../../img/calc/4cat_gemini.png', 
        '../../img/calc/5cat_cancer.png', 
        '../../img/calc/0cat_aquarius.png'
    ]; 
    const slider = document.querySelector('.task34 img');
    const left = document.querySelector('.task34 #left');
    const right = document.querySelector('.task34 #right');
    let i = 0; 

    slider.src = texts[i];
    
    right.addEventListener('click', function (e) {
        e.preventDefault();
        if(i < texts.length - 1) {
            i++;
            slider.src = texts[i];
            if (i === texts.length - 1) {
                right.classList.add('disabled');
            } else {
                right.classList.remove('disabled');
            }
            left.classList.remove('disabled');
        } 
    });

    left.addEventListener('click', function (e) {
        e.preventDefault();
        if(i > 0) {
            i--;
            slider.src = texts[i];
            if (i === 0) {
                console.log(i);
                left.classList.add('disabled');
            } else {
                left.classList.remove('disabled');
            }  
            right.classList.remove('disabled');    
        } 
    });
}
task34();
