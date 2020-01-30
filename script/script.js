'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

//реализую функцию, которая создает границы рандомного числа в моем случае от 1 до 100

    

let foo = (function() {
    //рандомное число в замыкании от 1 до 100
    let number = Math.floor((Math.random() * 100) +1);
    console.log(number);
    return function bar () {
        let userNamber = prompt('Угадай число от 1 до 100');
        if(typeof(userNamber) !== isNaN && userNamber === '') {
            userNamber = prompt('Введи число!');
        } if (userNamber > number ) {
            alert('Загаданное число меньше!');
            bar();
            
        } if (userNamber < number) {
            alert('Загаданное число больше!');
            bar();
            
        }if (userNamber === number) {
            confirm('Ты победил!');
        }
       return bar();
    };
})();
foo();















    

   

    