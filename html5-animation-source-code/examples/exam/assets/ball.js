function Ball(radius= 40, color='#ff0', lineWidth=1) {
    this.x = 0;
    this.y = 0;
    this.color = color;
    this.lineWidth = lineWidth;
    this.radius = radius;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.vx = 0;
    this.vy = 0;
    this.angle = 0;
    this.ax = 0;
    this.ay = 0;
}

Ball.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);

    context.fillStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.fill();
    context.stroke();
    context.restore();
};
