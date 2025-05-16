
let snake = document.getElementById('snake');
let positionSnake = 0;



//Fonctions de mouvement
function moveSnakeDown () {
        positionSnake += 10;
        snake.style.top= positionSnake + 'px';
}
function moveSnakeUp () {
        positionSnake -= 10;
        snake.style.top= positionSnake + 'px';
}
function moveSnakeRight () {
        positionSnake += 10;
        snake.style.left= positionSnake + 'px';
}
function moveSnakeLeft () {
        positionSnake -= 10;
        snake.style.left= positionSnake + 'px';
}


//Gestionnaires d'evenements 
     //Listener pour touches
let lastkeyDownSave = '';
document.addEventListener('keydown', function(event){
      lastkeyDownSave = event.key;
      setInterval(() => snakeEvent(lastkeyDownSave), 150);
});

    //Fonction reaction gestion de l'evenement
function snakeEvent(keydown) {
        if(keydown === 'ArrowRight'){
                moveSnakeRight();
        }
        if (keydown === 'ArrowLeft'){
                moveSnakeLeft();
        }
        if (keydown === 'ArrowDown'){
                moveSnakeDown();
        }
        if (keydown === 'ArrowUp'){
                moveSnakeUp();
        }
}


