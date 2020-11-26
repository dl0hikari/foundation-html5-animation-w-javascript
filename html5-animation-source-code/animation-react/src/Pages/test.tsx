import React, {useEffect, useRef} from "react";

export default function Index() {
    const ref = useRef<HTMLCanvasElement>(null);
    const draw = (context:  CanvasRenderingContext2D, num: number) => {
        context.fillStyle = '#000000';
        context.beginPath()
        context.arc(50, 100, 20*Math.sin(num * 0.05) ** 2, 0, 2*Math.PI)
        context.closePath();
        context.fill()
    };

    useEffect(() => {
        if(ref.current) {
            const canvas = ref.current;
            const context = canvas.getContext('2d');
            let animationFrameId:number;
            let frameCount = 0;

            const render = () => {
                context?.clearRect(0, 0, canvas.width, canvas.height);
                frameCount++;
                draw(context!, frameCount)
                animationFrameId = window.requestAnimationFrame(render);
            }

            render()

            return () => window.cancelAnimationFrame(animationFrameId);
        }
    }, [ref.current]);


    return (
        <canvas width={400} height={400} ref={ref}>
            不支持canvas
        </canvas>
    )
}
