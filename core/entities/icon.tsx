import React, {FunctionComponent, ReactComponentElement} from "react";
import {ApiIconData} from "../api/syncroom";
import Image from "next/image";

// import {ReactComponent as Drums} from "../../public/assets/icons/inst/drums.svg";
// import {ReactComponent as Bongos} from "../../public/assets/icons/inst/bongos.svg";
// import {ReactComponent as Bass} from "../../public/assets/icons/inst/bass.svg";
// import {ReactComponent as Electric} from "../../public/assets/icons/inst/electric.svg";
// import {ReactComponent as Acoustic} from "../../public/assets/icons/inst/acoustic.svg";
// import {ReactComponent as Keyboard} from "../../public/assets/icons/inst/keyboard.svg";
// import {ReactComponent as Piano} from "../../public/assets/icons/inst/piano.svg";
// import {ReactComponent as Trumpet} from "../../public/assets/icons/inst/trumpet.svg";
// import {ReactComponent as Saxophone} from "../../public/assets/icons/inst/saxophone.svg";
// import {ReactComponent as Flute} from "../../public/assets/icons/inst/flute.svg";
// import {ReactComponent as Violin} from "../../public/assets/icons/inst/violin.svg";
// import {ReactComponent as DJ} from "../../public/assets/icons/inst/dj.svg";
// import {ReactComponent as Vocal} from "../../public/assets/icons/inst/vocal.svg";
// import {ReactComponent as Stage} from "../../public/assets/icons/inst/stage.svg";
// import {ReactComponent as Private} from "../../assets/icons/inst/user.svg";


// import {Person} from '@mui/icons-material';

// const icons = [
//     React.memo(Drums),
//     React.memo(Bongos),
//     React.memo(Bass),
//     React.memo(Electric),
//     React.memo(Acoustic),
//     React.memo(Keyboard),
//     React.memo(Piano),
//     React.memo(Trumpet),
//     React.memo(Saxophone),
//     React.memo(Flute),
//     React.memo(Violin),
//     React.memo(DJ),
//     React.memo(Vocal),
//     React.memo(Stage),
//     // Private,
// ];
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


export class Icon {
    // TODO : Apply styles
    private readonly src: string;

    constructor(src: string) {
        this.src = src;
    }

    public render(): JSX.Element {
        return <Image src={`/assets/icons${this.src}.svg`} alt="profile"/>
    }
}

export class PublicIcon extends Icon {
    constructor(iconData: ApiIconData | undefined) {
        if (iconData === undefined) {
            super("user");
        } else {
            super(iconData.iconurl === ""
                ? icons[parseInt(iconData.icon)]
                : iconData.iconurl
            );
        }
    }
}

export class PrivateIcon extends Icon {
    constructor() {
        super("user");
    }
}

export class TempIcon extends Icon {
    constructor() {
        super("user");
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
