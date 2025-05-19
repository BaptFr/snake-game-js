
let snake = document.getElementById('snake-head');
let apple = document.getElementById('apple');
let container = document.getElementById('container-jeu');
let scoreDisplay = document.getElementById('score-display');
let positionSnakeX = 300;
let positionSnakeY = 200;
let lastPositions = [];
let addSnakePart =  [];



//FONCTIONS MOUVEMENT SNAKE
function moveSnakeDown() {
        positionSnakeY += 10;
        if (positionSnakeY >= 590) {
                positionSnakeY = 10;
                snake.style.top = positionSnakeY + 'px';
        } else {
                snake.style.top = positionSnakeY + 'px';
        }
        updateSnakeBody();
}
function moveSnakeUp() {
        positionSnakeY -= 10;
        if (positionSnakeY <= 4) {
                positionSnakeY = 599;
                snake.style.top = positionSnakeY + 'px';
        } else {
                snake.style.top = positionSnakeY + 'px';
        }
        updateSnakeBody();
}
function moveSnakeRight() {
        positionSnakeX += 10;
        if (positionSnakeX >= 585) {
                positionSnakeX = 0;
                snake.style.left = positionSnakeX + 'px';
        } else {
                snake.style.left = positionSnakeX + 'px';
        }
        updateSnakeBody();
}
function moveSnakeLeft() {
        positionSnakeX -= 10;
        if (positionSnakeX <= 5) {
                positionSnakeX = 599;
                snake.style.left = positionSnakeX + 'px';
        } else {
                snake.style.left = positionSnakeX + 'px';
        }
        updateSnakeBody();
}


//GESTION D'EVENEMENTS
//Listener pour touches + renvoi des positions
let lastkeyDownSave = '';
let interval = setInterval(() =>
        snakeEvent(lastkeyDownSave), 100);

document.addEventListener('keydown', function (event) {
        lastkeyDownSave = event.key;
        interval;
});

//Fonction reaction gestion evenement
function snakeEvent(keydown) {
        if (keydown === 'ArrowRight') {
                moveSnakeRight();
        }
        if (keydown === 'ArrowLeft') {
                moveSnakeLeft();
        }
        if (keydown === 'ArrowDown') {
                moveSnakeDown();
        }
        if (keydown === 'ArrowUp') {
                moveSnakeUp();
        }
}


let score = 0;
//CHANGEMENT POSITION APPLE
function AppleMove() {
        apple.style.top = Math.floor(Math.random() * 100);
        apple.style.left = Math.floor(Math.random() * 100);
}


//POSITIONS DES ELEMENTS en continu
let intervalPositions = setInterval(() =>
        Positions(), 100);
function Positions() {
        let snakePositionDatas = snake.getBoundingClientRect()
        //console.log(snakePositionDatas);
        let applePositionDatas = apple.getBoundingClientRect();
        //console.log(applePositionDatas);

        //POMME MANGEE avec tolérance +- 15px
        if (Math.abs(snakePositionDatas.x - applePositionDatas.x) <= 16 &&
                Math.abs(snakePositionDatas.y - applePositionDatas.y) <= 15) {
                AppleMove();
                score++;
                scoreDisplay.innerHTML = 'SCORE: ' + score
                addSnakeSize();

        }
}


//AJOUT SNAKE
function addSnakeSize() {
        //Snake grossit ajout
        let snakeSize = document.createElement('div');
        snakeSize.className = 'snake-size';
        if (lastPositions[1]){
                snakeSize.style.top = lastPositions[1].y + 'px';
                snakeSize.style.left = lastPositions[1].x + 'px';
        } else {
                snakeSize.style.top = positionSnakeX + 'px';
                snakeSize.style.left = positionSnakeY + 'px';
        }

        container.appendChild(snakeSize);
        //Ajout  au tableau snakePart: Uniquement partie suppl
        addSnakePart.push(snakeSize);
}

function updateSnakeBody() {
        lastPositions.unshift({ x: positionSnakeX, y: positionSnakeY });
        for (let i = 0; i < addSnakePart.length; i++) {
                if (lastPositions[i + 1]) {
                addSnakePart[i].style.left = lastPositions[i + 1].x + 'px';
                addSnakePart[i].style.top = lastPositions[i + 1].y + 'px';
                }
        }
}