import React, {useEffect, useRef} from "react";
import style from "./Tree.module.scss";
import treeImage from "./image/tree.png";
import {drawTree} from "./Utils/utils";
export default function Tree() {
    const ref = useRef<HTMLCanvasElement>(null);

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
            const params = {
              x1: 400,
              y1: 300,
              x2: 400,
              y2: 200,
              angle: 0.1 * Math.PI,
              depth: 6
            };
            drawTree(context as CanvasRenderingContext2D, params);

            // return () => window.cancelAnimationFrame(animationFrameId);
        }
    }, [ref.current])

    return <div className={style.root}>
        <canvas ref={ref} width={1200} height={600} className={style.canvas}>
            不支持canvas
        </canvas>
        <button>浇水</button>
    </div>
}
