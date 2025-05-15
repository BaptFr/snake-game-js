
let snake = document.getElementById('snake');
let positionSnake = 0;

setInterval(moveSnake, 100);


//Fonctions de mouvement
function moveSnakeDown () {
        positionSnake += 10;
        snake.style.top= positionSnake + "px";
}
function moveSnakeUp () {
        positionSnake -= 10;
        snake.style.top= positionSnake + "px";
}
function moveSnakeRight () {
        positionSnake += 10;
        snake.style.left= positionSnake + "px";
}
function moveSnakeLeft () {
        positionSnake -= 10;
        snake.style.left= positionSnake + "px";
}



//Gestionnaires d'evenements 
    //Listener pour touches
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight'){
       moveSnakeRight;
       LastkeyDownSave = 'ArrowRight';
    }
    if (event.key === 'ArrowLeft'){
       moveSnakeLeft;
        LastkeyDownSave = 'ArrowRight';
    }
    if (event.key === 'ArrowDown'){
       moveSnakeDown;
        LastkeyDownSave = 'ArrowRight';
    }
    if (event.key === 'ArrowUp'){
       moveSnakeUp
    }
});



function snakeEvent (keydown) {


}
