import React, {useEffect, useState} from "react";

interface ITree{
    ref: React.RefObject<HTMLCanvasElement>;
    IDraw :{
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        angle: number;
        depth: number;
    }
}

export default function useTree({ref, IDraw}: ITree) {
    let branches: number[][] =  [];
    let mark = 0;

    const [data, setData] = useState<number[][]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        init(ref.current!)
    }, []);

    async function init(canvas: HTMLCanvasElement) {
        setLoading(true);
        const ctx = canvas.getContext('2d');
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        try {
            await drawTree(ctx as CanvasRenderingContext2D, IDraw);
            mark = mark + 1;
            setData(branches);
            setLoading(false);
        }
        catch (e) {
            alert("初始化树失败");
        }

    }

    function drawTree(ctx: CanvasRenderingContext2D, {x1, y1, x2, y2, angle, depth}: typeof IDraw) {
        ctx.save();
        if(mark === 0) ctx.strokeStyle = `rgb(0, 0, 0)`;
        if(mark === 1 ) ctx.strokeStyle = `rgb(255, 0, 0)`;
        ctx.lineWidth = depth;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();

        if(depth>0) {
            branches.push([x1, y1, x2, y2]);
            let x = x2 - x1;
            let y = y2 - y1;

            var scale = 0.5 + Math.random() * 0.5;
            x *= scale;
            y *= scale;

            let xLeft = x * Math.cos( -angle ) - y * Math.sin( -angle );
            let yLeft = x * Math.sin( -angle ) + y * Math.cos( -angle );

            let xRight = x * Math.cos( +angle ) - y * Math.sin( +angle );
            let yRight = x * Math.sin( +angle ) + y * Math.cos( +angle );

            xLeft = Math.floor((xLeft + x2) * 100) / 100;
            yLeft = Math.floor((yLeft + y2) * 100) / 100;

            xRight = Math.floor((xRight + x2) * 100) / 100;
            yRight = Math.floor((yRight + y2) * 100) / 100;

            drawTree( ctx, {x1: x2, y1: y2, x2: xLeft, y2: yLeft, angle, depth: depth - 1} );
            drawTree( ctx, {x1: x2, y1: y2, x2: xRight, y2: yRight, angle, depth: depth - 1});
        }
    }
    return [data, loading] as [number[][], boolean];
}
