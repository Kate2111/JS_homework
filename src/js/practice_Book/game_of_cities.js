"use strict";

//при нажатии Enter записываем название города в массив. Во-первых, нужно проверить то, что первая буква введенного города совпадает с последней буковой предыдущего города. Во-вторых, нужно проверить то, что такого города еще не было в этой игре.

//в сообщении выводим: следующий город на букву "", кроме букв  ь(например), если город повторяется, то выводим сообщение: Такой город называли. Попробуйте еще. Город на букву "".

function task1 () {
    const nameInput = document.querySelectorAll('.game_of_cities #name');
    const city = document.querySelector('.game_of_cities #field');
    const message = document.querySelector('.game_of_cities #message');
    const cities = [];
    const names = [];

    showNamePlayer(nameInput, names, city);
    createArrCities(cities, city, message, names);
    

    function createArrCities(arrCities, nameCity, text, arrNames) {
        const listFirstPlayer = document.querySelector('.firstList');
        const listSecondPlayer = document.querySelector('.secondList');

        nameCity.addEventListener('keypress', function getCityOfArr (event) {
            if(event.code === 'Enter') {
                let val = this.value.trim().toLowerCase();
                checkWord (arrCities, val, text, arrNames);
                showListCitiesOfPlayer (listFirstPlayer, listSecondPlayer, arrCities);

                this.value = '';
            } 
        });

        nameCity.addEventListener('input', () => {text.textContent = '';});
        
    }

    function checkWord (arrCities, city, text, arrNames) {
        if(!arrCities) {
            text.textContent = 'Введите название города';
            return;
        }

        if(arrCities.length > 0 && city[0] !== arrCities[arrCities.length - 1].slice(-1)) {
            text.textContent = `Попробуйте еще. Город начинается на букву ${arrCities[arrCities.length - 1].slice(-1)}`;
            return;
        }

        if(arrCities.includes(city)) {
            text.textContent = 'Такой город уже называли';
            return;
        }

        arrCities.push(city);
        showCurrentPlayer(arrNames);
        console.log(arrCities);
    }

    function showListCitiesOfPlayer (listOne, listTwo, arrCities) {
        listOne.textContent = '';
        listTwo.textContent = '';
        for(let i = 0; i < arrCities.length; i++) {
            if(i % 2 == 0) {
                createList(listOne, arrCities[i]);  
            } else {
                createList(listTwo, arrCities[i]);
            }
        }
    }

    function createList(parent, city) {
        const li = document.createElement('li');
        li.textContent = city;
        parent.appendChild(li);  
    }

    function showNamePlayer(arrInput, arrNames) {
        arrInput.forEach(name => {
            name.addEventListener('keypress', function(event){
                if (event.code === 'Enter') {
                    const namePlayer = document.createElement('p');
                    namePlayer.textContent = name.value;
                    name.parentElement.prepend(namePlayer);
                    name.remove();

                    arrNames.push(namePlayer);
                    arrNames[0].classList.add('active');
                    return arrNames;
                }
            });
        });
    }

    function showCurrentPlayer(arrCities) {
        arrCities.forEach((elem) => {
            if(elem.classList.contains('active')){
                elem.classList.remove('active');
            } else {
                elem.classList.add('active');
            }
        });
    }
}
task1 ();