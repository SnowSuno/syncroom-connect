import React from "react";
import styles from "./styles.module.scss";

import {Modal} from "../../common/modals";
import {Card} from "../../common/cards";
import {Text} from "../../common/texts";

import {Room} from "../../../core/entities/room";

import {motion} from "framer-motion";

interface RoomModalProps {
    data: Room[];
    selectedId: string | null;
    close: () => void;
}

function RoomModal({data, selectedId, close}: RoomModalProps) {
    const room = data.filter(room => room.id === selectedId)[0];

    return (
        <Modal open={selectedId !== null} close={close}>
            {selectedId && <motion.div layoutId={selectedId}>
                <Card
                    className={styles.modal}
                    style={{width: 500, height: 400}}
                >
                    <div style={{padding: 20}}>
                        <Text.head>{room.name}</Text.head>
                        <Text.desc>{room.desc}</Text.desc>
                    </div>
                </Card>
            </motion.div>}
        </Modal>
    )
}

export default RoomModal;
