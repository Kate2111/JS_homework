//Библиотека Jquery
$(document).ready(function() {
    $('#button').on('click', function() {
        alert('hello');
    });


});

//Библиотека Lodash
const arr = ['a', 'b', 'c', 'd'];
console.log(_.chunk(arr, 2));
// => [['a', 'b'], ['c', 'd']]
 
console.log(_.chunk(arr, 3));
// => [['a', 'b', 'c'], ['d']]