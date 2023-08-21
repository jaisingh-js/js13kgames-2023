class Crossbow {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.minAngle = -Math.PI/4;
        this.maxAngle = Math.Pi/4;
        this.arrows = [];
    }

    update(dt) {

    }

    draw( /** @type {CanvasRenderingContext2D} */ ctx ) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc()
    }
}