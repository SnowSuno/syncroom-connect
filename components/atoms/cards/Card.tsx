import React, {ReactElement} from "react";
import styles from "./Card.module.scss";

interface CardProps {
    children: ReactElement;
}

function Card ({children}: CardProps) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Card;
