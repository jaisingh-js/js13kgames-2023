class Castle {
    constructor() {
        this.x = 20;
        this.y = 200;
        this.width = 50;
        this.height = 150;
    }

    update(dt) {

    }

    render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = '#9f0';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}