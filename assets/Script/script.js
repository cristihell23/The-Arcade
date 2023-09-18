const area = document.querySelector('.area');

let gameOver = false;
let foodX =3 , foodY= 3;
let snakeBody = [];
let score = 0;
let snakeX = 7, snakeY =7;



const startGame = () => {
    let food = `<div class ='food' style = 'grid-area: ${foodY} / ${foodX}'><div>`;
    area.innerHTML = food;
};

startGame();