import React from "react";
import styles from "./styles.module.scss";

import {Card} from "../../common/cards";
import {Text} from "../../common/texts";

import {Room} from "../../../core/entities/room";
import classNames from "classnames";

import {motion} from "framer-motion";

interface RoomModalProps {
    data: Room[];
    selectedId: string | null;
    close: () => void;
}

function RoomModal({data, selectedId, close}: RoomModalProps) {
    const room = data.filter(room => room.id === selectedId)[0];


    return (<>
        <div className={styles.container}>
            {selectedId && <motion.div layoutId={selectedId}>
                <Card
                    className={styles.modal}
                    style={{width: 500, height: 400}}
                >
                    {/*TODO: 컨테이너 추상화*/}
                    <div style={{padding: 20}}>
                        <Text.head>{room.name}</Text.head>
                        <Text.desc>{room.desc}</Text.desc>
                    </div>
                </Card>
            </motion.div>}
        </div>
        <div
            className={classNames(
                styles.backdrop,
                {[styles.open]: selectedId !== null}
            )}
            onClick={close}
        />
    </>)
}

export default RoomModal;
