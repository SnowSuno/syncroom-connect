import React from "react";
import styles from "./icon.module.scss";
import classNames from "classnames";


import {ApiIconData} from "../api/syncroom";
import Image from "next/image";

const icons = [
    "drums",
    "bongos",
    "bass",
    "electric",
    "acoustic",
    "keyboard",
    "piano",
    "trumpet",
    "saxophone",
    "flute",
    "violin",
    "dj",
    "vocal",
    "stage",
]

const getIconSrc = (iconIndex: string) => {
    return `/assets/icons/${icons[parseInt(iconIndex)]}.svg`;
}

const defaultIconSrc = "/assets/icons/user.svg";



export class Icon {
    // TODO : Apply styles
    private readonly src: string;
    private readonly style: string[];

    constructor(src: string, style?: string[]) {
        this.src = src;
        this.style = [styles.round, styles.grayscale];
    }

    public render(): JSX.Element {
        return <Image
            src={this.src}
            alt="profile"
            className={classNames(this.style)}
            width={26}
            height={26}
        />
    }
}

export class PublicIcon extends Icon {
    constructor(iconData: ApiIconData | undefined) {
        if (iconData === undefined) {
            super(defaultIconSrc);
        } else {
            super(iconData.iconurl === ""
                ? getIconSrc(iconData.icon)
                : iconData.iconurl
            );
        }
    }
}

export class PrivateIcon extends Icon {
    constructor() {
        super(defaultIconSrc);
    }
}

export class TempIcon extends Icon {
    constructor() {
        super(defaultIconSrc);
    }
    // TODO : Render grayscale icons
    // constructor(iconData?: ApiIconData) {
    //     if (iconData) {
    //         super(iconData)
    //     } else {
    //         super({icon: "0"})
    //     }
    // }
}
