
let snake = document.getElementById('snake');

function move () {
let positionSnake = 0;
    for (let i=0; i<delay; i++){

        positionSnake += 10;
        snake.style.top = positionSnake + "px";
    


    }
}

setTimeout(move, 5000);