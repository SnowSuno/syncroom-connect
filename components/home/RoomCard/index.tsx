import React, {FunctionComponent} from "react";
import styles from "./styles.module.scss";

import {Card, CardActionArea} from "../../common/cards";
import {List, ListItem} from "../../common/lists";

import {Room} from "../../../core/entities/room";
import {getFlippedProps} from "./transitions";

import {Flipped} from "react-flip-toolkit";

interface RoomCardProps {
    room: Room;
}

function RoomCard({room}: RoomCardProps) {
    const key = room.id


    return (
        <Flipped {...getFlippedProps(key)}>
            <Card width={300}>
                <CardActionArea>
                    <div className={styles.tags}>
                        {room.tags.map(tag => <p key={tag}>{`#${tag}`}</p>)}
                    </div>

                    <div className={styles.head}>
                        {room.name}
                    </div>

                    <div className={styles.desc}>
                        {room.desc}
                    </div>

                    <List>
                        {room.members.map(member =>
                            <ListItem key={member.id}>{member.name}</ListItem>
                        )}
                    </List>
                    {/*<div className={styles.members}>*/}
                    {/*    {room.members.map(member =>*/}
                    {/*        <MemberItem key={member.id} member={member}/>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                </CardActionArea>
            </Card>
        </Flipped>
    )
}


export default React.memo(RoomCard);
