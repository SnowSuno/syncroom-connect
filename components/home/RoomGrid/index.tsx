import React from "react";
import styles from "./styles.module.scss";

import {Flipper} from "react-flip-toolkit";
// import Masonry from "react-masonry-css";
import {Masonry} from "../../common/layouts";

import RoomCard from "../RoomCard";

import {Room} from "../../../core/entities/room";

import {getFlipperProps} from "./transitions";

interface RoomGridProps {
    data: Room[];
}



function RoomGrid({data}: RoomGridProps) {

    return (
        <Flipper {...getFlipperProps(data)}>
            <Masonry
                // breakpointCols={4}
                // className={styles.grid}
                // columnClassName={styles.column}
            >
                {data.map(room => <RoomCard key={room.id} room={room}/>)}
            </Masonry>
        </Flipper>
    )
}

export default RoomGrid;
