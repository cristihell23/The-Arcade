// HTML variables
const area = document.querySelector('.area');

// Starting Variables
let gameOver = false;
let foodX, foodY;
let snakeBody = [];
let score = 0;
let snakeX = 7, snakeY =7;
let speedX = 0, speedY = 0;

//Movement Logic and direction based on key pressed
const movement = (key) => {
    if (key.key === 'ArrowDown') {
        speedX += 1;
        speedY = 0;
    }
    else if(key.key === 'ArrowUp') {
        speedX -= 1;
        speedY = 0;
    }
    else if(key.key === 'ArrowLeft') {
        speedX = 0;
        speedY -= 1;
    }
    else if(key.key === 'ArrowLeft') {
        speedX = 0;
        speedY += 1;
    }
    console.log(speedX);
    console.log(speedY);

    //Calling function on each keypressed to update Snake Head
    startGame();
};

const randomFoodSpawner = () => {
    // Random Coordinates to match Grid size
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
};

// Game start function and logic
const startGame = () => {
    let food = `<div class ='food' style = 'grid-area: ${foodY} / ${foodX}'> </div>`;

    // Coordinates Update
    snakeX += speedX;
    snakeY += speedY;

    food += `<div class ='snakeHead' style = 'grid-area: ${snakeY} / ${snakeX}'> </div>`;
    area.innerHTML = food;
};

randomFoodSpawner();
startGame();

// Logging key pressed to decide which direction snake head goes towards
document.addEventListener('keydown', movement);