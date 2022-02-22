import React from "react";

const onAppear = (el: HTMLElement, i: number) => {
    el.animate([
        {
            opacity: 0,
            // transform: "scale(0.8)"
        },
        {
            opacity: 1,
            // transform: "scale(1)"
        }
    ], {
        duration: 200,
        easing: "ease-out",
    }).onfinish = () => {
        el.style.opacity = "1"
    }
}

const onExit = (el: HTMLElement, _: number, onComplete: () => void) => {
    el.animate([
        {
            opacity: 1,
            // transform: "scale(1)"
        },
        {
            opacity: 0,
            // transform: "scale(0.8)"
        }
    ], {
        duration: 200,
        easing: "ease-out"
    }).onfinish = onComplete;
    // onComplete();
}


export const flippedProps = {
    onAppear, onExit
}
