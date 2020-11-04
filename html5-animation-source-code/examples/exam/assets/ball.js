function Ball(radius= 40, color='#ff0', lineWidth=1) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = radius;
    this.lineWidth = lineWidth;
    this.color = color;
    this.scaleX = 1;
    this.scaleY = 1;
    this.rotation = 0;
}

Ball.prototype.draw = function(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);

    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    context.closePath();

    context.fill();
    context.stroke();
    context.restore();
};
