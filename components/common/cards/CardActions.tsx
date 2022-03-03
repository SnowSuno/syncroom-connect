import React, {ReactNode} from "react";
import styles from "./CardActions.module.scss";


interface CardActionsProps {
    children: ReactNode
}

const CardActions = ({children}: CardActionsProps) => {


    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}
