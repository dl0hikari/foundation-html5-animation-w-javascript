import React, {useEffect, useRef} from "react";
import style from "./Tree.module.scss";
import leafImage from "./image/leaf3.png";
import useTree from "../../Lib/hooks/useTree";
export default function Tree() {
    const ref = useRef<HTMLCanvasElement>(null);
    const params = {
        x1: 400,
        y1: 600,
        x2: 400,
        y2: 500,
        angle: 0.1 * Math.PI,
        depth: 6
    };
    const [data, loading] = useTree({ref, IDraw: params});

    useEffect(() => {
        // 两点间 直线方程
        if(data.length > 0) {
            new Array(100).fill("").map(item => {
                const point = RandomLeaf();
                drawLeaf(point);
            });
        }
    }, [data]);

    function RandomLeaf():number[] {
        const num = Math.floor(Math.random() * data.length);
        const arr = data[num];
        if(arr[0] === arr[2]) return RandomLeaf();
        const k = (arr[3] - arr[1]) / (arr[2] - arr[0]),
            b = arr[1] - k * arr[0];
        const x = arr[0] + Math.random() * (arr[2] - arr[0]);
        const y = k * x + b;
        return [x, y];
    }

    function drawLeaf(point: number[]) {
        const ctx = ref.current!.getContext('2d');
        const img = new Image();
        img.src = leafImage;
        img.onload = () => {
            ctx?.save();
            const random = Math.pow(-1, Math.floor(Math.random()*10));  // 随机生成正负负号 x轴以y轴翻转180deg
            ctx?.scale(random * 0.2, 0.2);
            const x = random * point[0] * 5;
            const y = (point[1] - img.height * 0.2) * 5;
            ctx?.drawImage(img, x, y, img.width, img.height);
            ctx?.restore();
        };

    }

    return <div className={style.root}>
        <canvas ref={ref} width={800} height={600} className={style.canvas}>
            不支持canvas
        </canvas>
        <button>浇水</button>
    </div>
}
