const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let interval = 1000/60;
let previousTime = performance.now();


const gameObjects = {};
gameObjects['enemy1'] = new Enemy(400, 200);
gameObjects['enemy2'] = new Enemy(500, 200);


function handleInputs() {

}

function update(dt) {
    for(let key of Object.keys(gameObjects)) {
        gameObjects[key].update(dt);
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let key of Object.keys(gameObjects)) {
        gameObjects[key].render(ctx);
    }
}

function gameloop(timestamp) {
    const deltaTime = timestamp - previousTime;

    if(deltaTime >= interval) {
        previousTime = timestamp;
        handleInputs();
        update(deltaTime/1000);
        render(deltaTime);
    }
    
    requestAnimationFrame(gameloop);
}

gameloop();
