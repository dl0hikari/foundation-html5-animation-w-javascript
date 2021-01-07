import React, {useEffect, useRef} from "react";
import style from "./Tree.module.scss";
export default function Tree() {
    const ref = useRef<HTMLCanvasElement>(null);



    useEffect(() => {
        if(ref.current) {
            const element = ref.current;
            const context = element.getContext("2d");
            if(context) {
                context.beginPath();
                context.lineWidth = 1;
                context.strokeStyle = "green";
                context.moveTo(50,50);
                context.lineTo(100,100);
                context.lineTo(50,200);
            }
/*            const treeImg = new Image();
            treeImg.src="./image/tree.png";
            treeImg.onload = () => {

                context?.save();
                context?.drawImage(treeImg, 0 , 0, 100, 100);
            }*/
        }
    }, [ref.current])

    return <div className={style.root}>
        <canvas ref={ref} width={400} height={400} className={style.canvas}>
            不支持canvas
        </canvas>
        <button>浇水</button>
    </div>
}
