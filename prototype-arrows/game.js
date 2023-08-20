"use strict";

let canvas;
let context;
let previousTimestamp = 0
let WIDTH = 0;
let HEIGHT = 0;
const gameObjects = [];

window.onload = init;

function init() {
    canvas = document.getElementById('gameCanvas');
    context = canvas.getContext('2d');
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    handleInput();

    window.requestAnimationFrame(gameloop);
}

function gameloop(timestamp) {
    const deltaTime = (timestamp - previousTimestamp) / 1000;
    previousTimestamp = timestamp;
    const fps = Math.round(1 / deltaTime);

    // handleInput();
    update(deltaTime);
    draw(context, fps);

    window.requestAnimationFrame(gameloop);
}

function drawFps(fps) {
    // Draw number to the screen
    context.fillStyle = 'white';
    context.fillRect(0, 0, 200, 100);
    context.font = '20px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 10, 30);
}

function draw(ctx,fps) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // // Get a random color, red or blue
    // let randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0';

    // // Draw a rectangle
    // context.fillStyle = randomColor;
    // context.fillRect(100, 50, 200, 175);
    drawFps(fps);
    for (let i = 0; i < gameObjects.length; i++) {
        if (!gameObjects[i].pause) {
            gameObjects[i].draw(ctx);
        }
    }
}

function update(dt) {
    for (let i = 0; i < gameObjects.length; i++) {
        if (!gameObjects[i].pause) {
            gameObjects[i].update(dt);
        }
    }
}

function handleInput() {
    window.addEventListener('keypress', (ev) => {
        // console.log(ev);
        if (ev.code === 'Space') {
            gameObjects.push(new Arrow(canvas.width / 2, canvas.height / 2, Math.random() * Math.PI * 2));
        }
    })
}