import React, {useState} from "react";
import styles from "./styles.module.scss";

import {Flipper} from "react-flip-toolkit";
// import Masonry from "react-masonry-css";
import {Masonry} from "../../common/layouts";

import RoomCard from "../RoomCard";
import RoomModal from "../RoomModal";

import {Room} from "../../../core/entities/room";

import {getFlipperProps} from "./transitions";

interface RoomGridProps {
    data: Room[];
}



function RoomGrid({data}: RoomGridProps) {
    const [openedRoom, setOpenedRoom] = useState<Room | null>(null);

    React.useEffect(() => {
        console.log(openedRoom)
    }, [openedRoom]);

    return (
        <Flipper {...getFlipperProps(data)}>
            <Masonry
                // breakpointCols={4}
                // className={styles.grid}
                // columnClassName={styles.column}
            >
                {data.map(room => <RoomCard
                    key={room.id}
                    room={room}
                    openedRoom={openedRoom}
                    open={() => setOpenedRoom(room)}
                />)}
            </Masonry>
            <RoomModal
                room={openedRoom}
                close={() => setOpenedRoom(null)}
            />
        </Flipper>
    )
}

export default RoomGrid;
