function Ball(color='#ff0', lineWidth=1) {
    this.x = 0;
    this.y = 0;
    this.color = color;
    this.lineWidth = lineWidth;
    this.radius = 40;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
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
