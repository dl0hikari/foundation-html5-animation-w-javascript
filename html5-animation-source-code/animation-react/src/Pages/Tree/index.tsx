import React, {useEffect, useRef} from "react";
import style from "./Tree.module.scss";
import treeImage from "./image/tree.png";
export default function Tree() {
    const ref = useRef<HTMLCanvasElement>(null);

    const draw = (context:  CanvasRenderingContext2D, num: number) => {
        context.fillStyle = '#000000';
        const treeImg = new Image();
        treeImg.src = treeImage;

        treeImg.onload = () => {
            const w = treeImg.width, h = treeImg.height;
            context.drawImage(treeImg, 0, 0, w, h , 50, 100, w, h);
            context.fill()
        }
    };

    useEffect(() => {
        if(ref.current) {
            const canvas = ref.current;
            const context = canvas.getContext('2d');
            let animationFrameId:number;
            let frameCount = 0;

/*            const render = () => {
                context?.clearRect(0, 0, canvas.width, canvas.height);
                frameCount++;
                draw(context!, frameCount)
                animationFrameId = window.requestAnimationFrame(render);
            }

            render()*/
            draw(context!, frameCount)

            // return () => window.cancelAnimationFrame(animationFrameId);
        }
    }, [ref.current])

    return <div className={style.root}>
        <canvas ref={ref} width={400} height={400} className={style.canvas}>
            不支持canvas
        </canvas>
        <button>浇水</button>
    </div>
}
