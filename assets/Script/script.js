// HTML variables
const area = document.querySelector('.area');

// Starting Variables
let gameOver = false;
let foodX, foodY;
let snakeBody = [];
let setTimeInterval;
let score = 0;
let snakeX = 7, snakeY =7;
let speedX = 0, speedY = 0;

//Movement Logic and direction based on key pressed
const movement = (key) => {
    if (key.key === 'ArrowRight' && speedX != -1) {
        speedX = 1;
        speedY = 0;
    }
    else if(key.key === 'ArrowLeft' && speedX != 1) {
        speedX = -1;
        speedY = 0;
    }
    else if(key.key === 'ArrowUp' && speedY != 1) {
        speedX = 0;
        speedY = -1;
    }
    else if(key.key === 'ArrowDown' && speedY != -1) {
        speedX = 0;
        speedY = 1;
    }
};

const gameOverFunction = () => {
    //Reset timer and reloads page
    clearInterval(setTimeInterval);
    alert ('Game Over ! Do you want to play again? Press OK to Continue...');
    location.reload();
}

const randomFoodSpawner = () => {
    // Random Coordinates to match Grid size
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
};

// Game start function and logic
const startGame = () => {
    if(gameOver) return gameOverFunction();
    let food = `<div class ='food' style = 'grid-area: ${foodY} / ${foodX}'> </div>`;

    // Coordinates Update
    snakeX += speedX;
    snakeY += speedY;

    // Check if outside playing board
    if (snakeX <= 0 || snakeX > 30 || snakeY <=0 || snakeY > 30) {
        gameOver = True;
    }

    for (let i = 0 ; i < snakeBody.length; i++) {
        food += `<div class ='snakeHead' style = 'grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}'> </div>`;
    }

    // Snake eats food
    if (snakeX === foodX && snakeY === foodY){
        randomFoodSpawner();
        snakeBody.push([foodX, foodY]); // adding additonal body parts based on food position
    // Score implementation
        score +=1;
        console.log(score);
    };
    // New body parts position update
    for (let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }

    // Initial body position
    snakeBody[0] = [snakeX,snakeY];
    area.innerHTML = food;
};

randomFoodSpawner();
setTimeInterval = setInterval(startGame,100);
// Logging key pressed to decide which direction snake head goes towards
document.addEventListener('keydown', movement);