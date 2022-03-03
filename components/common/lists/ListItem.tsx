import React, {ReactElement, ReactNode} from "react";
import styles from "./ListItem.module.scss";

interface ListItemProps {
    children: ReactNode;
    icon?: ReactElement;
}

function ListItem({children, icon}: ListItemProps) {

    return (
        <li className={styles.item}>
            {icon}
            <p>{children}</p>
        </li>
    )
}

export default ListItem;
