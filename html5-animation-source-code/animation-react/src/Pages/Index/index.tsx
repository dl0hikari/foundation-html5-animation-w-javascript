import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.scss";

interface IParameter{
    bodyScrollLeft: number;
    bodyScrollTop: number;
    docElementScrollLeft: number;
    docElementScrollTop: number;
    offsetLeft: number;
    offsetTop: number
}

interface IMouse{
    x: number;
    y: number;
}

export default function Index() {
    const ref = useRef<HTMLCanvasElement>(null);
    const [parameter, setParameter] = useState<IParameter>({
        bodyScrollLeft: document.body.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        docElementScrollLeft: document.documentElement.scrollLeft,
        docElementScrollTop: document.documentElement.scrollTop,
        offsetLeft: 0,
        offsetTop: 0
    });
    const [mouse, setMouse] = useState<IMouse>({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        if(ref.current) {
            const element = ref.current;
            const offsetLeft = element.offsetLeft;
            const offsetTop = element.offsetTop;
            setParameter({...parameter, offsetLeft, offsetTop});
            element.addEventListener('mousemove', function (e) {
                const event = e || window.event;
                let x, y;
                if(event.pageX) {
                    x = event.pageX;
                    y = event.pageY;
                } else {
                    x = event.clientX + parameter.docElementScrollLeft + parameter.bodyScrollLeft;
                    y = event.clientY + parameter.docElementScrollTop + parameter.bodyScrollTop;
                }

                x = x - parameter.offsetLeft;
                y = y - parameter.offsetTop;
                setMouse({x, y});
            });
        }
    }, [ref.current]);

    function draw() {

    }

    useEffect(() => {

    }, [mouse])

    return (
        <canvas width={400} height={400} className={style.root} ref={ref}>
            不支持canvas
        </canvas>
    )
}
