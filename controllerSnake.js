
let snake = document.getElementById('snake-head');
let apple= document.getElementById('apple');
let container = document.getElementById('container-jeu');

let positionSnakeX = 300;
let positionSnakeY = 200;


//FONCTIONS MOUVEMENT SNAKE
function moveSnakeDown () {
        positionSnakeY += 10;
        snake.style.top= positionSnakeY + 'px';
}
function moveSnakeUp () {
        positionSnakeY -= 10;
        snake.style.top= positionSnakeY + 'px';
}
function moveSnakeRight () {
        positionSnakeX += 10;
        snake.style.left= positionSnakeX + 'px';
}
function moveSnakeLeft () {
        positionSnakeX -= 10;
        snake.style.left= positionSnakeX + 'px';
}



//GESTION D'EVENEMENTS

     //Listener pour touches + renvoi des positions
let lastkeyDownSave = '';
let interval =  setInterval(() => 
        snakeEvent(lastkeyDownSave), 100);

document.addEventListener('keydown', function(event){
        lastkeyDownSave = event.key;
        interval;
});

    //Fonction reaction gestion evenement
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



//POSITIONS DES ELEMENTS en continu 

function AppleMove(){
        apple.style.top = Math.floor(Math.random() * 100);
        apple.style.left = Math.floor(Math.random() * 100);
        
}
let intervalPositions =  setInterval(() => 
        Positions(), 100);
function Positions () {
        let snakePositionDatas = snake.getBoundingClientRect()
        console.log(snakePositionDatas);
        let applePositionDatas = apple.getBoundingClientRect();
        console.log(applePositionDatas);
        let gameLimits = container.getBoundingClientRect();

        //POMME MANGEE avec tolérance +- 10px
        if(Math.abs(snakePositionDatas.x - applePositionDatas.x)<=10 && 
        Math.abs(snakePositionDatas.y - applePositionDatas.y)<=10){
                alert('TEST POMME MANGEE');
        //Fonction changement position pomme.
        AppleMove();
        }
}
//Gestion sortie écran
        //  POSITION SNAKE
        //  POISTION CONTAINER
        // console.log (getBoundingClientRect())




