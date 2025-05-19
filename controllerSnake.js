
let snake = document.getElementById('snake-head');
let apple= document.getElementById('apple');
let container = document.getElementById('container-jeu');

let positionSnakeX =  300;
let positionSnakeY = 200;


//FONCTIONS MOUVEMENT SNAKE
function moveSnakeDown () {
        positionSnakeY += 10;
        if(positionSnakeY >= 590){
                positionSnakeY = 10;
                snake.style.top= positionSnakeY + 'px';
        } else {
                snake.style.top= positionSnakeY + 'px';
        }
}
function moveSnakeUp () {
        positionSnakeY -= 10;
        if(positionSnakeY <= 4){
                positionSnakeY = 599;
                snake.style.top= positionSnakeY + 'px';
        } else {
                snake.style.top= positionSnakeY + 'px';
        }
}
function moveSnakeRight () {
        positionSnakeX += 10;
        if(positionSnakeX >= 600){
                positionSnakeX = 0;
                snake.style.left= positionSnakeX + 'px';
        } else {
                snake.style.left= positionSnakeX + 'px';
        }
}
function moveSnakeLeft () {
        positionSnakeX -= 10;
        if(positionSnakeX <= 5){
                positionSnakeX = 599;
                snake.style.left= positionSnakeX + 'px';
        } else {
                snake.style.left= positionSnakeX + 'px';
        }
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


let score = 0;
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
                addSnakeSize();
                score ++;
                alert('SCORE' + '   ' + score );  
        //Fonction changement position pomme.
        AppleMove();
        }
}

//TAILLE SNAKE
function addSnakeSize () {
        let snakeSize = document.createElement('div');
        snakeSize.className = ' snakeSize ';
        snakeSize.style.top =  + 'px';
        snakeSize.style.left = + 'px';
}
//Gestion sortie écran
        //  POSITION SNAKE
        //  POISTION CONTAINER
        // console.log (getBoundingClientRect())




