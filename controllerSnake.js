
let snake = document.getElementById('snake');
let apple= document.getElementById('apple');
let container = document.getElementById('container-jeu');

let positionSnakeX = 100;
let positionSnakeY = 100;


//Fonctions de mouvement
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


//Gestionnaires d'evenements 
     //Listener pour touches
let lastkeyDownSave = '';
document.addEventListener('keydown', function(event){
      lastkeyDownSave = event.key;
      setInterval(() => snakeEvent(lastkeyDownSave), 150);
      // CLEAR ???
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


//POSITIONS DES ELEMENTS
let applePositionData= apple.getBoundingClientRect();
console.log(applePositionData);
let jeuLimits = container.getBoundingClientRect();
console.log(jeuLimits);






//Gestion sortie écran
        //POSITIONS LIMITES
        //Récupération positions container 
        // 
        // console.log(jeuLimits);
        //  POSITION SNAKE
        // let snakeposition = document.getElementById(' ')

        
        // console.log (getBoundingClientRect())



        //condition position



