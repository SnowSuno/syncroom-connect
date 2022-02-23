import React, {ReactNode} from "react";
import styles from "./CardActionArea.module.scss";

interface CardActionAreaProps {
    children: ReactNode;
    onClick?: () => void;
}

const CardActionArea = (
    {
        children,
        onClick,
    }: CardActionAreaProps
) => (
    <button
        className={styles.main}
        onClick={onClick}
    >
        {children}
    </button>
)

export default CardActionArea;
