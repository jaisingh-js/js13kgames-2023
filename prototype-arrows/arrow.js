class Arrow {
    constructor(spawnX, spawnY, direction) {
        this.speed = 200;
        this.range = 200;
        this.x = spawnX;
        this.y = spawnY;
        this.spawnX = spawnX;
        this.spawnY = spawnY;
        this.angle = direction;
        this.pause = false;
    }

    update(dt) {
        // const xDist = this.x - this.spawnX;
        // const yDist = this.y - this.spawnY;
        // const distance = Math.sqrt(xDist * xDist + yDist * yDist);
        //if arrow is within range
        // if(Math.abs(distance) < this.range) {
        const xVel = this.speed * Math.cos(this.angle);
        const yVel = this.speed * Math.sin(this.angle);

        this.x += xVel * dt;

        this.y += yVel * dt;

        if(this.x < 0 || this.x > WIDTH) {
            this.pause = true;
        }
        else if(this.y < 0 || this.y > HEIGHT) {
            this.pause = true;
        }
        // }
    }

    draw(ctx) {
        ctx.save()
        ctx.fillStyle = '#f00';
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillRect(-10,-2, 20, 4);
        ctx.restore();
    }
}