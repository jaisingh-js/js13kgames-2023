const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

gameloop();

function update() {

}

function render() {
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.rect(100, 100, 100, 100);
    ctx.fill();
}

function gameloop() {
    update();
    render();
    requestAnimationFrame(gameloop);
}