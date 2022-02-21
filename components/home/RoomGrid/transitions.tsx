import React, {ReactElement} from "react";
import {Flipper} from "react-flip-toolkit";

import {Room} from "../../../core/entities/room";

interface TransitionProviderProps {
    data: Room[];
    children: ReactElement;
}

const animationConfig = {
    spring: {
        stiffness: 500,
        damping: 40,
    },
    staggerConfig: {
        default: {
            reverse: false,
            speed: .1,
        }
    }
}

export const getFlipperProps = (data: Room[]) => ({
    flipKey: data.map(room => room.key).join(""),
    ...animationConfig,
})

