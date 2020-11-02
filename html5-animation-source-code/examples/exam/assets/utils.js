function mouseCapture(dom) {
    const mouse = {
        x: 0,
        y: 0
    }

    dom.addEventListener('mousemove', function(e) {
        const event = e || window.event,
            bodyScrollLeft = document.body.scrollLeft,
            bodyScrollTop = document.body.scrollTop,
            docElementLeft = document.documentElement.scrollLeft,
            docElementTop = document.documentElement.scrollTop

        let x, y;

        if(event.pageX) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + bodyScrollLeft + docElementLeft;
            y = event.clientY + bodyScrollTop + docElementTop;
        }

        mouse.x = x - dom.offsetLeft;
        mouse.y = y - dom.offsetTop;
    }, false);

    return mouse;
}
