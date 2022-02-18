import React, {FunctionComponent, ReactComponentElement} from "react";
import {ApiIconData} from "../api/syncroom";

import {ReactComponent as Drums} from "../../assets/icons/inst/drums.svg";
import {ReactComponent as Bongos} from "../../assets/icons/inst/bongos.svg";
import {ReactComponent as Bass} from "../../assets/icons/inst/bass.svg";
import {ReactComponent as Electric} from "../../assets/icons/inst/electric.svg";
import {ReactComponent as Acoustic} from "../../assets/icons/inst/acoustic.svg";
import {ReactComponent as Keyboard} from "../../assets/icons/inst/keyboard.svg";
import {ReactComponent as Piano} from "../../assets/icons/inst/piano.svg";
import {ReactComponent as Trumpet} from "../../assets/icons/inst/trumpet.svg";
import {ReactComponent as Saxophone} from "../../assets/icons/inst/saxophone.svg";
import {ReactComponent as Flute} from "../../assets/icons/inst/flute.svg";
import {ReactComponent as Violin} from "../../assets/icons/inst/violin.svg";
import {ReactComponent as DJ} from "../../assets/icons/inst/dj.svg";
import {ReactComponent as Vocal} from "../../assets/icons/inst/vocal.svg";
import {ReactComponent as Stage} from "../../assets/icons/inst/stage.svg";
// import {ReactComponent as Private} from "../../assets/icons/inst/user.svg";

import {Person} from '@mui/icons-material';

const icons = [
    React.memo(Drums),
    React.memo(Bongos),
    React.memo(Bass),
    React.memo(Electric),
    React.memo(Acoustic),
    React.memo(Keyboard),
    React.memo(Piano),
    React.memo(Trumpet),
    React.memo(Saxophone),
    React.memo(Flute),
    React.memo(Violin),
    React.memo(DJ),
    React.memo(Vocal),
    React.memo(Stage),
    // Private,
];


export class Icon {
    // TODO : Apply styles
    private readonly component: FunctionComponent;

    constructor(component: FunctionComponent) {
        this.component = component;
    }

    public render(): JSX.Element {
        const Icon = this.component;
        return <Icon />
    }
}

export class PublicIcon extends Icon {
    constructor(iconData: ApiIconData | undefined) {
        if (iconData === undefined) {
            super(Person);
        } else {
            super(iconData.iconurl === ""
                ? icons[parseInt(iconData.icon)]
                : () => <img src={iconData.iconurl} alt="profile"/>
            );
        }
    }
}

export class PrivateIcon extends Icon {
    constructor() {
        super(Person);
    }
}

export class TempIcon extends Icon {
    constructor() {
        super(Person);
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
