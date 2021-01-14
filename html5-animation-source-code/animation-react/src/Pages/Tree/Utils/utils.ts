export function drawTreeWithImg(ctx: CanvasRenderingContext2D, treeImage: any) {
    ctx.fillStyle = '#000000';
    const treeImg = new Image();
    treeImg.src = treeImage;

    treeImg.onload = () => {
        const w = treeImg.width, h = treeImg.height;
        ctx.drawImage(treeImg, 0, 0, w, h , 50, 100, w, h);
        ctx.fill()
    }
}

interface IDraw{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    angle: number;
    depth: number;
}

export function drawTree(ctx: CanvasRenderingContext2D, {x1, y1, x2, y2, angle, depth }: IDraw) {
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineWidth = depth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    if(depth>0) {
        let x = x2 - x1;
        let y = y2 - y1;

        var scale = 0.5 + Math.random() * 0.5;
        x *= scale;
        y *= scale;

        // matrix(a, b, c, d, e, f)

        let xLeft = x * Math.cos( -angle ) - y * Math.sin( -angle );
        let yLeft = x * Math.sin( -angle ) + y * Math.cos( -angle );

        let xRight = x * Math.cos( +angle ) - y * Math.sin( +angle );
        let yRight = x * Math.sin( +angle ) + y * Math.cos( +angle );

        xLeft += x2;
        yLeft += y2;

        xRight += x2;
        yRight += y2;



        drawTree( ctx, {x1: x2, y1: y2, x2: xLeft, y2: yLeft, angle, depth: depth - 1} );
        drawTree( ctx, {x1: x2, y1: y2, x2: xRight, y2: yRight, angle, depth: depth - 1});
    }
}
