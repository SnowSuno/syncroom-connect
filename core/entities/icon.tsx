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
    private readonly src: string;
    protected isRounded: boolean;
    protected isGrayscale: boolean;

    constructor(src: string) {
        this.src = src;
        this.isRounded = false;
        this.isGrayscale = false;
    }

    public render(): JSX.Element {
        return <Image
            src={this.src}
            alt="profile"
            className={classNames({
                [styles.rounded]: this.isRounded,
                [styles.grayscale]: this.isGrayscale,
            })}
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
            const isCustom = iconData.iconurl !== "";
            super(isCustom
                ? iconData.iconurl
                : getIconSrc(iconData.icon)
            );
            this.isRounded = isCustom;
        }

    }
}

export class PrivateIcon extends Icon {
    constructor() {
        super(defaultIconSrc);
    }
}

export class TempIcon extends PublicIcon {
    constructor(iconData: ApiIconData | undefined) {
        super(iconData);
        this.isGrayscale = true;
    }
}
