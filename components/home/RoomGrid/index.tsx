import React, {useState} from "react";
import styles from "./styles.module.scss";

import {Masonry} from "../../common/layouts";

import RoomCard from "../RoomCard";
import RoomModal from "../RoomModal";

import {Room} from "../../../core/entities/room";

import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";


interface RoomGridProps {
    data: Room[];
}


function RoomGrid({data}: RoomGridProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    React.useEffect(() => {
        console.log(selectedId)
    }, [selectedId]);

    return (
        <motion.div layout>
            <AnimateSharedLayout>
                <AnimatePresence>
                    <Masonry
                        // breakpointCols={4}
                        // className={styles.grid}
                        // columnClassName={styles.column}
                    >
                        {data.map(room => <RoomCard
                            key={room.id}
                            room={room}
                            selectedId={selectedId}
                            open={() => setSelectedId(room.id)}
                        />)}
                    </Masonry>
                </AnimatePresence>
                <AnimatePresence>
                    <RoomModal
                        data={data}
                        selectedId={selectedId}
                        close={() => setSelectedId(null)}
                    />
                </AnimatePresence>
            </AnimateSharedLayout>
        </motion.div>
    )
}


export default RoomGrid;
