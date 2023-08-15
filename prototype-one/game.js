const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let previousTime = 0;


const gameObjects = {};
gameObjects['enemy1'] = new Enemy(400, 300);
gameObjects['enemy2'] = new Enemy(500, 300);
gameObjects['castle'] = new Castle();


function handleInputs() {

}

function update(dt) {
    for (let key of Object.keys(gameObjects)) {
        gameObjects[key].update(dt);
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let key of Object.keys(gameObjects)) {
        gameObjects[key].render(ctx);
    }
}

function gameloop(timestamp) {
    let deltaTime = (timestamp - previousTime) / 1000;
    previousTime = timestamp;
    // Move forward in time with a maximum amount
    deltaTime = Math.min(deltaTime, 0.1);
    handleInputs();
    update(deltaTime);
    render();

    requestAnimationFrame(gameloop);
}

requestAnimationFrame(gameloop);
