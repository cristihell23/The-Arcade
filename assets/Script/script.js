const area = document.querySelector('.area');

let gameOver = false;
let foodX, foodY;
let snakeBody = [];
let score = 0;
let snakeX = 7, snakeY =7;

const randomFoodSpawner = () => {
    // Random Coordinates to match Grid size
    foodX = Math.floor(Math.random() * 30) +1;
    foodY = Math.floor(Math.random() * 30) +1;
}

const startGame = () => {
    let food = `<div class ='food' style = 'grid-area: ${foodY} / ${foodX}'><div>`;
    food += `<div class ='snakeHead' style = 'grid-area: ${snakeY} / ${snakeX}'><div>`;
    area.innerHTML = food;
};

randomFoodSpawner();
startGame();