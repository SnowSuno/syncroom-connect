import React, {ReactNode} from "react";
import styles from "./CardActionArea.module.scss";

interface CardActionAreaProps {
    children: ReactNode;
}

const CardActionArea = (
    {
        children,
    }: CardActionAreaProps
) => (
    <button className={styles.main} style={{padding: 15}}>
        {children}
    </button>
)

export default CardActionArea;
