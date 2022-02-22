import React from "react";
import styles from "./styles.module.scss";

import {Card} from "../../common/cards";

import {Flipped} from "react-flip-toolkit";

import {Room} from "../../../core/entities/room";
import classNames from "classnames";

import {motion} from "framer-motion";

interface RoomModalProps {
    selectedId: string | null;
    close: () => void;
}

function RoomModal({selectedId, close}: RoomModalProps) {


    return (
        <>
            <div className={styles.container}>
                {selectedId && <motion.div layoutId={selectedId}>
                    <Card className={styles.modal} style={{width: 500, height: 400}}>
                        <button onClick={close}>close</button>
                        {selectedId}
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
        </>
    )
}

export default RoomModal;
