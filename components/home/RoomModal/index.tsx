import React from "react";
import styles from "./styles.module.scss";

import {Card} from "../../common/cards";

import {Flipped} from "react-flip-toolkit";

import {Room} from "../../../core/entities/room";
import classNames from "classnames";

import {motion} from "framer-motion";

interface RoomModalProps {
    room: Room | null;
    close: () => void;
}

function RoomModal({room, close}: RoomModalProps) {


    return (
        <>
            <div className={styles.container}>
                {room && <motion.div layoutId={room.id}>
                    <Card className={styles.modal} style={{width: 500, height: 400}}>
                        <button onClick={close}>close</button>
                        {room.name}
                    </Card>
                </motion.div>}
            </div>
            <div
                className={classNames(
                    styles.backdrop,
                    {[styles.open]: room !== null}
                )}
                onClick={close}
            />
        </>
    )
}

export default RoomModal;
