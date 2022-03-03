import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

import {Card, CardActionArea} from "../../common/cards";
import {List, ListItem} from "../../common/lists";
import {Text} from "../../common/texts";

import {Room} from "../../../core/entities/room";


import {motion} from "framer-motion";


interface RoomCardProps {
    room: Room;
    selectedId: string | null;
    open: () => void;
}


function RoomCard({room, selectedId, open}: RoomCardProps) {
    const isOpen = selectedId === room.id;

    return (
        <motion.div
            layout
            layoutId={isOpen ? undefined : room.id}
            animate={{opacity: 1}}
            initial={{opacity: 0}}
        >
            <Card
                style={{width: 300}}
                className={classNames(
                    styles.card,
                    {[styles.hidden]: isOpen}
                )}
            >
                <CardActionArea onClick={open}>
                    <div className={styles.tags}>
                        {room.tags.map(tag => <p key={tag}>{`#${tag}`}</p>)}
                    </div>
                    <Text.head className={styles.head}>
                        {room.name}
                    </Text.head>
                    <Text.desc className={styles.desc}>
                        {room.desc}
                    </Text.desc>

                    <List className={styles.memberList}>
                        {room.members.map(member =>
                            <ListItem
                                key={member.id}
                                icon={member.icon.render()}
                            >
                                {member.name}
                            </ListItem>
                        )}
                    </List>
                    {/*<div className={styles.members}>*/}
                    {/*    {room.members.map(member =>*/}
                    {/*        <MemberItem key={member.id} member={member}/>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                </CardActionArea>
            </Card>
        </motion.div>
    )
}


export default React.memo(RoomCard);
