import React, {ReactNode} from "react";
import classNames from "classnames";
import styles from "./CardActions.module.scss";


interface CardActionsProps {
    children: ReactNode
}

const CardActions = ({children}: CardActionsProps) => {


    return (
        <div className={classNames("CardActions", styles.main)}>
            {children}
        </div>
    )
}

export default CardActions;
