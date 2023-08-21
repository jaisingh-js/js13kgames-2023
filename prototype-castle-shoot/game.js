"use strict";

let canvas;
let context;
let previousTimestamp = 0
const gameObjects = [];

window.onload = init;

function init() {
    canvas = document.getElementById('gameCanvas');
    c
    context = canvas.getContext('2d');

    window.requestAnimationFrame(gameloop);
}

function gameloop(timestamp) {
    const deltaTime = (timestamp - previousTimestamp) / 1000;
    previousTimestamp = timestamp;
    const fps = Math.round(1 / deltaTime);


    update(deltaTime);
    draw(context);

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

function draw(ctx) {

    // // Get a random color, red or blue
    // let randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0';

    // // Draw a rectangle
    // context.fillStyle = randomColor;
    // context.fillRect(100, 50, 200, 175);
    for(let i=0; i<gameObjects.length; i++) {
        gameObjects.draw(ctx);
    }
}

function update(dt) {
    for(let i=0; i<gameObjects.length; i++) {
        gameObjects.update(dt);
    }
}