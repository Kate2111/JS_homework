"use strict";

//при нажатии Enter записываем название города в массив. Во-первых, нужно проверить то, что первая буква введенного города совпадает с последней буковой предыдущего города. Во-вторых, нужно проверить то, что такого города еще не было в этой игре.

//в сообщении выводим: следующий город на букву "", кроме букв  ь(например), если город повторяется, то выводим сообщение: Такой город называли. Попробуйте еще. Город на букву "".

function task1 () {
    const names = document.querySelectorAll('.game_of_cities #name');
    const city = document.querySelector('.game_of_cities #field');
    const message = document.querySelector('.game_of_cities #message');
    let arrCities = [];

    showNamePlayer(names);
    createArrCities(arrCities, city, message);
    

    
    function createArrCities(arr, nameCity, text) {
        nameCity.addEventListener('keypress', function getCityOfArr (event) {
            if(event.code === 'Enter') {
                let val = this.value.trim();
                checkWord(arr, text, val);
                hasCity (arr, val, text);
                
                console.log(arr);
                this.value = '';
            } 
        });
    }

    function hasCity (arr, val, text) {
        if(arr.includes(val)) {
            text.textContent = 'Такой город уже называли';
        } else {
            arr.push(val);
        }
    }

    function checkWord(arr, text, val) {
        for(let i = 0; i < arr.length; i++) {
            text.textContent = `Город начинается на букву ${arr[i].slice(-1)}`;

            if(i>= 1 && arr[i][0] == arr[i - 1].slice(-1)) {
                arr.push(val);
                
            } else {
                text.textContent = `Попробуйте еще. Город начинается на букву ${arr[i - 1].slice(-1)}`;
            }
        }
    }

    function showNamePlayer(arr) {
        arr.forEach(name => {
            name.addEventListener('keypress', function(event){
                if (event.code === 'Enter') {
                    const namePlayer = document.createElement('p');
                    namePlayer.textContent = name.value;
                    name.parentElement.appendChild(namePlayer);
                    name.remove();
                }
            });
        });
    }
    
}
task1 ();